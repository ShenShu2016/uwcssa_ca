import { Backdrop, Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import {
  addressFilteredMarketItem,
  fetchMarketItems,
  selectAllMarketItems,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import AppsIcon from "@mui/icons-material/Apps";
import BackdropLoading from "../../components/BackdropLoading";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketSideBar from "../../components/Market/marketSideBar";
import MarketTopBar from "../../components/Market/marketTopBar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { marketItemSortBySortKey } from "../../components/Market/marketQueries";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

const actions = [{ icon: <KeyboardArrowUpIcon />, name: "Top" }];

export default function MarketList() {
  useTitle("UWCSSA商城");
  const dispatch = useDispatch();
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const marketItems = useSelector(selectAllMarketItems);
  const { darkTheme } = useSelector((state) => state.general);
  const { filter } = useSelector((state) => state.market);
  const starter = useStarter(marketItems);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  useEffect(() => {
    if (Object.keys(filter).length === 0) {
      dispatch(fetchMarketItems({ query: marketItemSortBySortKey }));
    } else {
      dispatch(addressFilteredMarketItem({ filter }));
    }
  }, [dispatch, filter]);
  const clickHandler = () => {
    dispatch(fetchMarketItems({ query: marketItemSortBySortKey }));
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
      {!starter && <BackdropLoading />}
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
          <Box className={classes.items}>{marketItemRenderList}</Box>
          <Box className={classes.fabBox}>
            <Backdrop open={open} />
            <SpeedDial
              ariaLabel="SpeedDial controlled open example"
              FabProps={{ color: "default" }}
              icon={<AppsIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={() => {
                    topRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
