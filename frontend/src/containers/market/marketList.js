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
  const [addressInfo, setAddressInfo] = React.useState("");
  const [searchRadius, setSearchRadius] = React.useState(0);
  const marketItems = useSelector(selectAllMarketItems);
  const { darkTheme } = useSelector((state) => state.general);
  const starter = useStarter(marketItems);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //conversion: Latitude: 1 deg = 110.574 km
  // Longitude: 1 deg = 111.320*cos(latitude) km
  useEffect(() => {
    const filter =
      addressInfo === ""
        ? dispatch(fetchMarketItems({ query: marketItemSortBySortKey }))
        : {
            // {and: {lat: {between: [50, 52]}, lng: {between: [-2, 0]}}}
            and: {
              lat: {
                between: [
                  addressInfo.lat - searchRadius / 110.574,
                  addressInfo.lat + searchRadius / 110.574,
                ],
              },
              lng: {
                between: [
                  addressInfo.lng -
                    searchRadius / (111.32 * Math.cos(addressInfo.lat)),
                  addressInfo.lng +
                    searchRadius / (111.32 * Math.cos(addressInfo.lat)),
                ],
              },
            },
          };
    dispatch(addressFilteredMarketItem({ filter: filter }));
  }, [dispatch, addressInfo, searchRadius]);

  const clickHandler = () => {
    dispatch(fetchMarketItems({ query: marketItemSortBySortKey }));
  };

  const marketItemRenderList =
    marketItems &&
    marketItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent
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
      >
        <MarketSideBar
          darkTheme={darkTheme}
          setAddressInfo={setAddressInfo}
          setSearchRadius={setSearchRadius}
          clickHandler={clickHandler}
        />
        <Box className={classes.img}>
          <MarketTopBar darkTheme={darkTheme} />
          <Box className={classes.items}>
            {starter === false ? <BackdropLoading /> : marketItemRenderList}
          </Box>
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
                  onClick={() => {}}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
