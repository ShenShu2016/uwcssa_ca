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
import { marketItemSortBySortKeyItem } from "../../components/Market//marketQueries";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketItem() {
  const useStyles = marketItemStyle;
  useTitle("Item");
  const dispatch = useDispatch();
  const classes = useStyles();

  const [starter, setStarter] = useState(false);
  const [filterList, setFilterList] = useState({
    sortKey: "original",
    min: "",
    max: "",
    category: "",
    condition: "",
    clickedTag: "",
  });

  const marketItems = useSelector(selectAllMarketItems);
  const status = useSelector((state) => state.market.fetchMarketItemsStatus);

  useEffect(() => {
    dispatch(fetchMarketItems(marketItemSortBySortKeyItem));
  }, [dispatch]);

  useEffect(() => {
    if (
      marketItems === undefined ||
      marketItems === null ||
      marketItems.length === 0
    ) {
      setStarter(false);
    } else {
      if (marketItems[0].marketItemCategory === undefined) {
        setStarter(false);
      } else if (marketItems[0].tags === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }
    }
  }, [marketItems]);

  const trueMarketItems = marketItems.filter(
    (item) => item.marketType === "Item" && item.description !== null
  );

  const filteredItems = marketItemFilter(trueMarketItems, filterList, "item");

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
  const handleCategory = (e) => {
    setFilterList({ ...filterList, category: e.target.value });
  };
  const handleCondition = (e) => {
    setFilterList({ ...filterList, condition: e.target.value });
  };
  const handleClick = (tag) => {
    setFilterList({ ...filterList, clickedTag: tag });
  };

  const handleReset = () => {
    setFilterList({
      ...filterList,
      sortKey: "original",
      min: "",
      max: "",
      category: "",
      condition: "",
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
            type="item"
            filterList={filterList}
            handleSortKey={handleSortKey}
            handleMin={handleMin}
            handleMax={handleMax}
            handleCategory={handleCategory}
            handleCondition={handleCondition}
            handleReset={handleReset}
          />
          <Box className={classes.img}>
            <MarketImgTopFilter
              type="item"
              trueMarketItems={trueMarketItems}
              handleClick={handleClick}
              filterList={filterList}
              handleSortKey={handleSortKey}
              handleMin={handleMin}
              handleMax={handleMax}
              handleCategory={handleCategory}
              handleCondition={handleCondition}
              handleReset={handleReset}
            />
            <Box className={classes.items}>{itemRenderList}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
