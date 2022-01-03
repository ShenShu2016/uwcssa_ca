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

export default function MarketItem() {
  const useStyles = marketItemStyle;
  useTitle("Item");
  const classes = useStyles();
  const [filterList, setFilterList] = useState({
    type: "item",
    sortKey: "original",
    min: "",
    max: "",
    category: "",
    condition: "",
    clickedTag: [],
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      type: "item",
      sortKey: "original",
      min: "",
      max: "",
      category: "",
      condition: "",
      clickedTag: [],
    },
  });

  const handleSearch = handleSubmit((data) => {
    setFilterList(data);
  });
  console.log(filterList);
  const isFiltering = useMarketItemFilter(filterList);
  const { darkTheme } = useSelector((state) => state.general);
  const filteredItems = useSelector(selectAllMarketItems);

  const starter = useStarter(filteredItems, "all", isFiltering);

  const itemRenderList =
    filteredItems &&
    filteredItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent
          darkTheme={darkTheme}
          item={marketItem}
          type={marketItem.marketType.toLowerCase()}
          key={marketItemIdx}
        />
      );
    });

  // const handleSortKey = (e) => {
  //   setFilterList({ ...filterList, sortKey: e.target.value });
  // };
  // const handleMax = (e) => {
  //   setFilterList({ ...filterList, max: e.target.value });
  // };
  // const handleMin = (e) => {
  //   setFilterList({ ...filterList, min: e.target.value });
  // };
  // const handleCategory = (e) => {
  //   setFilterList({ ...filterList, category: e.target.value });
  // };
  // const handleCondition = (e) => {
  //   setFilterList({ ...filterList, condition: e.target.value });
  // };
  // const handleClick = (tag) => {
  //   const { clickedTag } = { ...filterList };
  //   const newTags = clickedTag.includes(tag)
  //     ? clickedTag.filter((t) => t !== tag)
  //     : clickedTag.concat(tag);
  //   setFilterList({ ...filterList, clickedTag: newTags });
  // };

  const handleReset = () => {
    reset({
      type: "item",
      sortKey: "original",
      min: "",
      max: "",
      category: "",
      condition: "",
      clickedTag: [],
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
          type="item"
          filterList={filterList}
          control={control}
          handleSearch={handleSearch}
          // handleSortKey={handleSortKey}
          // handleMin={handleMin}
          // handleMax={handleMax}
          // handleCategory={handleCategory}
          // handleCondition={handleCondition}
          handleReset={handleReset}
        />
        <Box className={classes.img}>
          <MarketImgTopFilter
            darkTheme={darkTheme}
            control={control}
            type="item"
            trueMarketItems={filteredItems}
            filterList={filterList}
            handleSearch={handleSearch}
            // handleClick={handleClick}
            // handleSortKey={handleSortKey}
            // handleMin={handleMin}
            // handleMax={handleMax}
            // handleCategory={handleCategory}
            // handleCondition={handleCondition}
            handleReset={handleReset}
          />
          <Box className={classes.items}>
            {isFiltering && (
              <Box width="100%" margin="0.5rem" color="black" fontSize="14px">
                is filtering...
              </Box>
            )}
            {starter === false ? <BackdropLoading /> : itemRenderList}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
