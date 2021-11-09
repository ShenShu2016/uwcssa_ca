import { Avatar, Box, Chip, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterInfo from "./marketItemFilterInfo";
import MarketComponent from "../../components/Market/MarketComponent";
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

  const filteredItems = marketItemFilter(trueMarketItems, filterList);
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

  let tags = [];
  trueMarketItems
    .filter((a) => a.tags !== null)
    .forEach((item) => {
      item.tags.map((subitem) => tags.push(subitem));
    });
  const countTags = (arr) =>
    arr.reduce((obj, e) => {
      obj[e] = (obj[e] || 0) + 1;
      return obj;
    }, {});
  const occurrence = countTags(tags);
  const sortedOccurrence = Object.keys(occurrence).sort(
    (a, b) => occurrence[b] - occurrence[a]
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
  const handleCategory = (e) => {
    setFilterList({ ...filterList, category: e.target.value });
  };
  const handleCondition = (e) => {
    setFilterList({ ...filterList, condition: e.target.value });
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
          filterList={filterList}
          handleSortKey={handleSortKey}
          handleMin={handleMin}
          handleMax={handleMax}
          handleCategory={handleCategory}
          handleCondition={handleCondition}
          handleReset={handleReset}
        />
        <Box className={classes.img}>
          <Paper
            elevation={3}
            sx={{
              alignContent: "center",
              marginBottom: "1rem",
              padding: "2rem",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Shop by trend
            </Typography>
            <Stack
              spacing={1}
              direction="row"
              sx={{ color: "action.active", marginTop: "0.5rem" }}
            >
              {sortedOccurrence.slice(0, 5).map((tag, tagIdx) => {
                return (
                  <Chip
                    key={tagIdx}
                    avatar={<Avatar>{occurrence[tag]}</Avatar>}
                    label={tag}
                    onClick={(e) => {
                      setFilterList({ ...filterList, clickedTag: tag });
                    }}
                  />
                );
              })}
            </Stack>
          </Paper>
          <Box className={classes.items}>{itemRenderList}</Box>
        </Box>
      </Stack>
    </Box>
  );
}
