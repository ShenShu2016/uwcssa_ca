import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchMarketItems,
  selectAllMarketItems,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import FilterInfo from "../../components/Market/marketItemFilterInfo";
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
  const [filterList, setFilterList] = useState({
    sortKey: "original",
    min: "",
    max: "",
    category: "",
    condition: "",
    clickedTag: "",
  });

  // const [images, setImages] = useState();
  const marketItems = useSelector(selectAllMarketItems);
  useEffect(() => {
    dispatch(fetchMarketItems(marketItemSortBySortKeyItem));
  }, [dispatch]);

  const trueMarketItems = marketItems.filter(
    (item) => item.marketType === "Item" && item.description !== null
  );

  console.log("true items", trueMarketItems);
  const filteredItems = marketItemFilter(trueMarketItems, filterList, "item");
  console.log("say something", filteredItems);

  // let urls = [];
  // marketItems.forEach((item) => {
  //   item.imgS3Keys.map((subitem) => urls.push(subitem));
  // });
  // const preloadImages = () => {
  //   setImages(
  //     urls.map((url, urlIdx) => {
  //       let img = new Image();
  //       img.onload = () => handleImageLoad(urlIdx);
  //       img.src = url;
  //       return { url: url, loaded: false };
  //     })
  //   );
  // };
  // const handleImageLoad = (index) => {
  //   setImages((img) => (img.loaded = true));
  // };

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
  console.log("filterList", filterList);
  return (
    <Box className={classes.root}>
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
    </Box>
  );
}
