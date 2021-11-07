import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchMarketItems,
  fetchMarketRentals,
  fetchMarketVehicles,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import MarketComponent from "../../components/Market/MarketComponent";
import MarketSideBar from "./marketSideBar";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

// import {
// import MarketSideBar from './marketSideBar';
// setMarketItems,
//   setMarketRental,
//   setMarketVehicles,
// } from "../../redux/actions/marketItemActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
  },
  items: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  contain: {
    width: "100%",
    overflow: "hidden",
    height: "100vh",
    bgcolor: "black",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    // overflowY: "scroll",
    overflow: "hidden",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  img: {
    padding: "2rem",
    height: "100%",
    width: "calc(100% - 360px)",
    // bgcolor="black"
    position: "relative",
    overflowY: "auto",
    float: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
}));

export default function MarketList() {
  useTitle("市场");
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    marketItems,
    marketVehicles,
    marketRentals,
    fetchMarketItemsStatus,
    fetchMarketRentalsStatus,
    fetchMarketVehiclesStatus,
  } = useSelector((state) => state.market);

  useEffect(() => {
    if (fetchMarketItemsStatus === "idle" || undefined) {
      dispatch(fetchMarketItems());
    }
    if (fetchMarketRentalsStatus === "idle" || undefined) {
      dispatch(fetchMarketRentals());
    }
    if (fetchMarketVehiclesStatus === "idle" || undefined) {
      dispatch(fetchMarketVehicles());
    }
  }, [
    fetchMarketItemsStatus,
    fetchMarketRentalsStatus,
    fetchMarketVehiclesStatus,
    dispatch,
  ]);

  const marketItemRenderList =
    marketItems &&
    marketItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent item={marketItem} type={"item"} key={marketItemIdx} />
      );
    });
  console.log("marketVehicles", marketVehicles);

  const marketVehicleRenderList =
    marketVehicles &&
    marketVehicles.map((marketVehicle, marketVehicleIdx) => {
      return (
        <MarketComponent
          item={marketVehicle}
          type={"vehicle"}
          key={marketVehicleIdx}
        />
      );
    });

  const marketRentalRenderList =
    marketRentals &&
    marketRentals.map((marketRental, marketRentalIdx) => {
      return (
        <MarketComponent
          item={marketRental}
          type={"rental"}
          key={marketRentalIdx}
        />
      );
    });

  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        className={classes.contain}
      >
        <MarketSideBar />
        <Box className={classes.img}>
          <Typography variant="h3" className={classes.title}>
            二手商城
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Item
          </Typography>
          <Box className={classes.items}>{marketItemRenderList}</Box>
          <Divider />
          <Typography variant="h5" className={classes.title}>
            汽车
          </Typography>
          <Box className={classes.items}>{marketVehicleRenderList}</Box>
          <Divider />
          <Typography variant="h5" className={classes.title}>
            房屋
          </Typography>
          <Box className={classes.items}>{marketRentalRenderList}</Box>
          <Divider />
        </Box>
      </Stack>
    </Box>
  );
}
