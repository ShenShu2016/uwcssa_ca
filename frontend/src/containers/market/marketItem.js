import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  filterUpdated,
  selectAllMarketItems,
} from "../../redux/slice/marketSlice";

import BackdropLoading from "../../components/BackdropLoading";
import FilterInfo from "../../components/Market/marketItemFilterInfo";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketImgTopFilter from "../../components/Market/marketImgTopFilter";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import useMarketItemFilter from "../../components/Market/useMarketItemFilter";
import { useSelector } from "react-redux";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketItem() {
  const useStyles = marketItemStyle;
  const dispatch = useDispatch();
  useTitle("Item");
  const classes = useStyles();

  const [filterList, setFilterList] = useState({
    type: "Item",
    sortKey: "original",
    min: "",
    max: "",
    category: "",
    condition: "",
  });

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
    const { type, min, max, category, condition } = data;

    const filter = {
      price: { between: [min === "" ? 0 : min, max === "" ? 999999 : max] },
    };
    console.log(category, condition);
    dispatch(filterUpdated({ marketType: type, filter: filter }));

    setFilterList(data);
  });

  const isFiltering = useMarketItemFilter(filterList);
  const { darkTheme } = useSelector((state) => state.general);
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
    reset({
      type: "Item",
      sortKey: "original",
      min: "",
      max: "",
      category: "",
      condition: "",
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
          darkTheme={darkTheme}
          form="plain"
          type="Item"
          control={control}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
        <Box className={classes.img}>
          <MarketImgTopFilter
            darkTheme={darkTheme}
            control={control}
            type="Item"
            trueMarketItems={filteredItems}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
          <Box className={classes.items}>
            {isFiltering && (
              <Box width="100%" margin="0.5rem" color="#6c6c6c" fontSize="14px">
                Found {filteredItems.length} related results...
              </Box>
            )}
            {itemRenderList}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
