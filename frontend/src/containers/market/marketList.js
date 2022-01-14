import { Box, Fab, Stack } from "@mui/material";
import {
  filterClear,
  selectAllMarketItems,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../../components/BackdropLoading";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketSideBar from "../../components/Market/marketSideBar";
import MarketTopBar from "../../components/Market/marketTopBar";
import React from "react";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import useMarketItemFilter from "../../components/Market/useMarketItemFilter";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketList() {
  useTitle("UWCSSA商城");
  const dispatch = useDispatch();
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const marketItems = useSelector(selectAllMarketItems);
  const { darkTheme } = useSelector((state) => state.general);
  const { filter } = useSelector((state) => state.market);
  const isFiltering = useMarketItemFilter(filter, "all");
  const starter = useStarter(marketItems, "all", isFiltering);
  const topRef = React.useRef(null);

  let tags = [];
  marketItems
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

  const clickHandler = () => {
    dispatch(filterClear());
  };

  const marketItemRenderList =
    marketItems &&
    marketItems.map((marketItem, marketItemIdx) => {
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
  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        className={classes.contain}
        ref={topRef}
      >
        <MarketSideBar darkTheme={darkTheme} clickHandler={clickHandler} />
        <Box className={classes.img}>
          <MarketTopBar
            darkTheme={darkTheme}
            sortedOccurrence={sortedOccurrence}
            occurrence={occurrence}
          />
          <Box className={classes.items}>
            {isFiltering && (
              <Box width="100%" margin="0.5rem" color="#6c6c6c" fontSize="14px">
                Found {marketItems.length} related results...
              </Box>
            )}
            {starter === false ? <BackdropLoading /> : marketItemRenderList}
          </Box>
          <Box className={classes.fabBox}>
            <Fab
              color="info"
              onClick={() => {
                topRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
