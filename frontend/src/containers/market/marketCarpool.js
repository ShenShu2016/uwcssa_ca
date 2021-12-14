import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchMarketItems,
  selectAllMarketItems,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import FilterInfo from "../../components/Market/marketItemFilterInfo";
import { Loading } from "../../components/Market/loading";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketImgTopFilter from "../../components/Market/marketImgTopFilter";
import marketItemFilter from "../../components/Market/marketItemFilter";
import { marketItemSortBySortKeyRental } from "../../components/Market//marketQueries";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketCarpool() {
  const useStyles = marketItemStyle;
  useTitle("Carpool");
  const dispatch = useDispatch();
  const classes = useStyles();
  const [starter, setStarter] = useState(false);

  const [filterList, setFilterList] = useState({
    sortKey: "original",
    min: "",
    max: "",
    marketRentalSaleRent: "",
    propertyType: "",
    airConditioningType: "",
    heatingType: "",
    clickedTag: "",
  });

  const marketItems = useSelector(selectAllMarketItems);
  const status = useSelector((state) => state.market.fetchMarketItemsStatus);

  const trueMarketItems = marketItems.filter(
    (item) => item.marketType === "Carpool" && item.description !== null
  );

  useEffect(() => {
    dispatch(fetchMarketItems(marketItemSortBySortKeyRental));
  }, [dispatch]);

  useEffect(() => {
    if (
      marketItems === undefined ||
      marketItems === null ||
      marketItems.length === 0
    ) {
      setStarter(false);
    } else {
      if (marketItems[0].catFriendly === undefined) {
        setStarter(false);
      } else if (marketItems[0].tags === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }
    }
  }, [marketItems]);

  const filteredItems = marketItemFilter(
    trueMarketItems,
    filterList,
    "carpool"
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
  const handleMarketRentalSaleRent = (e) => {
    setFilterList({ ...filterList, marketRentalSaleRent: e.target.value });
  };
  const handlePropertyType = (e) => {
    setFilterList({ ...filterList, propertyType: e.target.value });
  };
  const handleAirConditioningType = (e) => {
    setFilterList({ ...filterList, airConditioningType: e.target.value });
  };
  const handleHeatingType = (e) => {
    setFilterList({ ...filterList, heatingType: e.target.value });
  };
  const handleClick = (tag) => {
    setFilterList({ ...filterList, clickedTag: tag });
  };

  const handleReset = () => {
    setFilterList({
      sortKey: "original",
      min: "",
      max: "",
      marketRentalSaleRent: "",
      propertyType: "",
      airConditioningType: "",
      heatingType: "",
      clickedTag: "",
    });
  };
  console.log("filterList", filterList);
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
            type="carpool"
            filterList={filterList}
            handleSortKey={handleSortKey}
            handleMin={handleMin}
            handleMax={handleMax}
            handleMarketRentalSaleRent={handleMarketRentalSaleRent}
            handlePropertyType={handlePropertyType}
            handleAirConditioningType={handleAirConditioningType}
            handleHeatingType={handleHeatingType}
            handleReset={handleReset}
          />
          <Box className={classes.img}>
            <MarketImgTopFilter
              type="carpool"
              trueMarketItems={trueMarketItems}
              handleClick={handleClick}
              filterList={filterList}
              handleSortKey={handleSortKey}
              handleMin={handleMin}
              handleMax={handleMax}
              handleMarketRentalSaleRent={handleMarketRentalSaleRent}
              handlePropertyType={handlePropertyType}
              handleAirConditioningType={handleAirConditioningType}
              handleHeatingType={handleHeatingType}
              handleReset={handleReset}
            />
            <Box className={classes.items}>{itemRenderList}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
