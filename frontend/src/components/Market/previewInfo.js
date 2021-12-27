import { Box, Typography } from "@mui/material";

import { MarketItemInfo } from "../../containers/market/MarketItemDetail";
import { MarketRentalInfo } from "../../containers/market/MarketRentalDetail";
import { MarketVehicleInfo } from "../../containers/market/MarketVehicleDetail ";
import React from "react";
import SwipeViews from "../SwipeViews";
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
    color: "#c1c1c1",
    transition: "color 0.3s",
    "&:hover": {
      color: "#a9a9a9",
    },
    "&::-webkit-scrollbar": {
      width: "14px",
    },

    "&::-webkit-scrollbar-button": {
      width: 0,
      height: 0,
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundClip: "content-box",
      border: "4px solid transparent",
      borderRadius: "7px",
      boxShadow: "inset 0 0 0 10px",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    },
  },
}));

export default function PreviewInfo({ imgURLs, fakeItems, darkTheme }) {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box
        className={classes.previewImgRight}
        sx={{ backgroundColor: darkTheme ? "#2a2a2a" : "rgb(243, 246, 249)" }}
      >
        {imgURLs.length !== 0 ? (
          <SwipeViews images={imgURLs} />
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
        {fakeItems.marketType === "Item" ? (
          <MarketItemInfo
            marketItem={fakeItems}
            mode="preview"
            darkTheme={darkTheme}
          />
        ) : null}
        {fakeItems.marketType === "Rental" ? (
          <MarketRentalInfo
            marketItem={fakeItems}
            mode="preview"
            darkTheme={darkTheme}
          />
        ) : null}
        {fakeItems.marketType === "Vehicle" ? (
          <MarketVehicleInfo
            marketItem={fakeItems}
            mode="preview"
            darkTheme={darkTheme}
          />
        ) : null}
      </Box>
    </Box>
  );
}
