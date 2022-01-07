import { Box, Stack } from "@mui/material";
import React, { useState } from "react";

import BackdropLoading from "../../components/BackdropLoading";
import FilterInfo from "../../components/Market/marketItemFilterInfo";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketImgTopFilter from "../../components/Market/marketImgTopFilter";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import { selectAllMarketItems } from "../../redux/slice/marketSlice";
import { useForm } from "react-hook-form";
import useMarketItemFilter from "../../components/Market/useMarketItemFilter";
import { useSelector } from "react-redux";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketRental() {
  const useStyles = marketItemStyle;
  useTitle("Rental");
  const classes = useStyles();

  const [filterList, setFilterList] = useState({
    type: "Rental",
    sortKey: "original",
    min: "",
    max: "",
    marketRentalSaleRent: "",
    propertyType: "",
    airConditioningType: "",
    heatingType: "",
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      type: "Rental",
      sortKey: "original",
      min: "",
      max: "",
      marketRentalSaleRent: "",
      propertyType: "",
      airConditioningType: "",
      heatingType: "",
    },
  });
  const handleSearch = handleSubmit((data) => {
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
      type: "Rental",
      sortKey: "original",
      min: "",
      max: "",
      marketRentalSaleRent: "",
      propertyType: "",
      airConditioningType: "",
      heatingType: "",
    });
  };
  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        className={classes.contain}
      >
        <FilterInfo
          darkTheme={darkTheme}
          form="plain"
          type="Rental"
          filterList={filterList}
          control={control}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
        <Box className={classes.img}>
          <MarketImgTopFilter
            darkTheme={darkTheme}
            control={control}
            type="Rental"
            trueMarketItems={filteredItems}
            filterList={filterList}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
          <Box className={classes.items}>
            {isFiltering && (
              <Box width="100%" margin="0.5rem" color="#6c6c6c" fontSize="14px">
                Found {filteredItems.length} related results...
              </Box>
            )}
            {starter === false ? <BackdropLoading /> : itemRenderList}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
