import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchMarketItems,
  selectAllMarketItems,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import FilterInfo from "../../components/Market/marketItemFilterInfo";
import { Loading } from "../../components/Market/loading";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketImgTopFilter from "../../components/Market/marketImgTopFilter";
import marketItemFilter from "../../components/Market/marketItemFilter";
import { marketItemSortBySortKeyVehicle } from "../../components/Market//marketQueries";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketVehicle() {
  const useStyles = marketItemStyle;
  useTitle("Vehicle");
  const dispatch = useDispatch();
  const classes = useStyles();
  const [filterList, setFilterList] = useState({
    sortKey: "original",
    min: "",
    max: "",
    vehicleType: "",
    minYear: "",
    maxYear: "",
    make: "",
    model: "",
    clickedTag: "",
  });

  const marketItems = useSelector(selectAllMarketItems);
  const starter = useStarter(marketItems, "all");
  const status = useSelector((state) => state.market.fetchMarketItemsStatus);
  const trueMarketItems = marketItems.filter(
    (item) => item.marketType === "Vehicle" && item.description !== null
  );

  console.log("true items", trueMarketItems);
  useEffect(() => {
    dispatch(fetchMarketItems(marketItemSortBySortKeyVehicle));
  }, [dispatch]);

  const filteredItems = marketItemFilter(
    trueMarketItems,
    filterList,
    "vehicle"
  );

  const itemRenderList =
    filteredItems &&
    filteredItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent
          item={marketItem}
          type={marketItem.marketType.toLowerCase()}
          key={marketItemIdx}
        />
      );
    });

  const handleSortKey = (e) => {
    setFilterList({ ...filterList, sortKey: e.target.value });
  };
  const handleMax = (e) => {
    setFilterList({ ...filterList, max: e.target.value });
  };
  const handleMin = (e) => {
    setFilterList({ ...filterList, min: e.target.value });
  };
  const handleVehicleType = (e) => {
    setFilterList({ ...filterList, vehicleType: e.target.value });
  };
  const handleMinYear = (e) => {
    setFilterList({ ...filterList, minYear: e.target.value });
  };
  const handleMaxYear = (e) => {
    setFilterList({ ...filterList, maxYear: e.target.value });
  };
  const handleModel = (e) => {
    setFilterList({ ...filterList, model: e.target.value });
  };
  const handleMake = (e) => {
    setFilterList({ ...filterList, make: e.target.value });
  };
  const handleClick = (tag) => {
    setFilterList({ ...filterList, clickedTag: tag });
  };

  const handleReset = () => {
    setFilterList({
      sortKey: "original",
      min: "",
      max: "",
      vehicleType: "",
      minYear: "",
      maxYear: "",
      make: "",
      model: "",
      clickedTag: "",
    });
  };

  return (
    <Box className={classes.root}>
      {starter === false ? (
        <Loading status={status} />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          className={classes.contain}
        >
          <FilterInfo
            form="plain"
            type="vehicle"
            filterList={filterList}
            handleSortKey={handleSortKey}
            handleMin={handleMin}
            handleMax={handleMax}
            handleVehicleType={handleVehicleType}
            handleMinYear={handleMinYear}
            handleMaxYear={handleMaxYear}
            handleMake={handleMake}
            handleModel={handleModel}
            handleReset={handleReset}
          />
          <Box className={classes.img}>
            <MarketImgTopFilter
              type="vehicle"
              trueMarketItems={trueMarketItems}
              handleClick={handleClick}
              filterList={filterList}
              handleSortKey={handleSortKey}
              handleMin={handleMin}
              handleMax={handleMax}
              handleVehicleType={handleVehicleType}
              handleMinYear={handleMinYear}
              handleMaxYear={handleMaxYear}
              handleMake={handleMake}
              handleModel={handleModel}
              handleReset={handleReset}
            />
            <Box className={classes.items}>{itemRenderList}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
