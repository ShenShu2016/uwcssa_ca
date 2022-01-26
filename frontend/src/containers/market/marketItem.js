import { Box, Stack } from "@mui/material";
import {
  filterClear,
  selectAllMarketItems,
} from "../../redux/slice/marketSlice";
import useMarketItemFilter, {
  marketItemFilterUpdate,
} from "../../components/Market/useMarketItemFilter";

import BackdropLoading from "../../components/BackdropLoading";
import FilterInfo from "../../components/Market/marketItemFilterInfo";
import LoadMore from "../../components/LoadMore";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketImgTopFilter from "../../components/Market/marketImgTopFilter";
import MarketSkeleton from "../../components/Market/MarketSkeleton";
import React from "react";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketItem() {
  useTitle("Item");
  const useStyles = marketItemStyle;
  const { darkTheme } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const classes = useStyles();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      type: "Item",
      sortKey: "original",
      min: "",
      max: "",
      category: [],
      condition: [],
    },
  });

  const handleSearch = handleSubmit((data) => {
    marketItemFilterUpdate(data, dispatch);
  });

  const { filter: filterList } = useSelector((state) => state.market);
  const isFiltering = useMarketItemFilter(filterList, "Item");
  const filteredItems = useSelector(selectAllMarketItems);

  const starter = useStarter(filteredItems, "all", isFiltering);

  const itemRenderList =
    filteredItems &&
    filteredItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent
          starter={starter}
          darkTheme={darkTheme}
          item={marketItem}
          type={marketItem.marketType.toLowerCase()}
          key={marketItemIdx}
        />
      );
    });

  const handleReset = () => {
    dispatch(filterClear());
    reset({
      type: "Item",
      sortKey: "original",
      min: "",
      max: "",
      category: [],
      condition: [],
    });
  };

  return (
    <Box className={classes.root}>
      {!starter ? <BackdropLoading /> : null}
      <Stack
        direction={{ xs: "column", md: "row" }}
        className={classes.contain}
      >
        <FilterInfo
          form="plain"
          type="Item"
          control={control}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
        <Box className={classes.img}>
          <MarketImgTopFilter
            control={control}
            type="Item"
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
          <Box className={classes.items}>
            {isFiltering && (
              <Box width="100%" margin="0.5rem" color="#6c6c6c" fontSize="14px">
                Found {filteredItems.length} related results...
              </Box>
            )}
            {starter === false ? <MarketSkeleton /> : itemRenderList}
            <LoadMore />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
