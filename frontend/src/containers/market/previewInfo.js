import { Box, Typography } from "@mui/material";

import { MarketItemInfo } from "./MarketItemDetail";
import { MarketRentalInfo } from "./MarketRentalDetail";
import { MarketVehicleInfo } from "./MarketVehicleDetail ";
import React from "react";
import SwipeViews from "../../components/SwipeViews";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  previewImgRight: {
    width: "calc(100% - 350px)",
    height: "100%",
    position: "relative",
    backgroundColor: "rgb(243, 246, 249)",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "40vh",
    },
  },
  previewInfo: {
    width: "350px",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    },
  },
}));

export default function PreviewInfo({ imgKeyFromServer, fakeItems }) {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.previewImgRight}>
        {imgKeyFromServer.length !== 0 ? (
          <SwipeViews images={imgKeyFromServer} />
        ) : (
          <Box
            height="50px"
            sx={{
              left: "50%",
              top: "40%",
              position: "absolute",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Typography variant="h6">预览照片</Typography>
          </Box>
        )}
      </Box>
      <Box className={classes.previewInfo}>
        {fakeItems.type === "item" ? (
          <MarketItemInfo marketItem={fakeItems} mode="preview" />
        ) : null}
        {fakeItems.type === "rental" ? (
          <MarketRentalInfo marketItem={fakeItems} mode="preview" />
        ) : null}
        {fakeItems.type === "vehicle" ? (
          <MarketVehicleInfo marketItem={fakeItems} mode="preview" />
        ) : null}
      </Box>
    </Box>
  );
}
