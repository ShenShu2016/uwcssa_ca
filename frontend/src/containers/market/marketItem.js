import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterInfo from "./marketItemFilterInfo";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketImgTopFilter from "./marketImgTopFilter";
import { fetchMarketItems } from "../../redux/reducers/marketSlice";
import marketItemFilter from "./marketItemFilter";
import { marketItemStyle } from "./marketItemCss";
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

  const { marketItems, fetchMarketItemsStatus } = useSelector(
    (state) => state.market
  );
  const trueMarketItems = marketItems.filter(
    (item) => item.marketType === "Item"
  );

  console.log("true items", trueMarketItems);
  useEffect(() => {
    if (fetchMarketItemsStatus === "idle" || undefined) {
      dispatch(fetchMarketItems());
    }
  }, [fetchMarketItemsStatus, dispatch]);

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
