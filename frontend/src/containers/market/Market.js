import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  setMarketItems,
  setMarketRental,
  setMarketVehicles,
} from "../../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";

import MarketComponent from "../../components/Market/MarketComponent";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "1500px",
    paddingInline: "0.5rem",
  },
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
}));

export default function Market() {
  useTitle("市场");
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setMarketItems());
    dispatch(setMarketVehicles());
    dispatch(setMarketRental());
  }, [dispatch]);

  const { marketItems, marketVehicles, marketRentals } = useSelector(
    (state) => state.market
  );

  const marketItemRenderList =
    marketItems &&
    marketItems.map((marketItem) => {
      return (
        <MarketComponent item={marketItem} type={"item"} key={marketItem.id} />
      );
    });
  console.log("marketVehicles", marketVehicles);

  const marketVehicleRenderList =
    marketVehicles &&
    marketVehicles.map((marketVehicle) => {
      return (
        <MarketComponent
          item={marketVehicle}
          type={"vehicle"}
          key={marketVehicle.id}
        />
      );
    });

  const marketRentalRenderList =
    marketRentals &&
    marketRentals.map((marketRental) => {
      return (
        <MarketComponent
          item={marketRental}
          type={"rental"}
          key={marketRental.id}
        />
      );
    });

  return (
    <Box className={classes.root}>
      <Box>
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
    </Box>
  );
}
