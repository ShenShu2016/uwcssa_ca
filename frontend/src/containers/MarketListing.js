import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MarketComponent from "../components/Market/MarketComponent";
import { makeStyles } from "@mui/styles";
import { setMarketItems } from "../redux/actions/marketItemActions";

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

export default function MarketListing() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setMarketItems());
  }, [dispatch]);

  const marketItems = useSelector((state) => state.allMarketItems.marketItems);

  const marketItemRenderList = marketItems.map((marketItem) => {
    return <MarketComponent marketItem={marketItem} key={marketItem.id} />;
  });

  console.log("marketItems", marketItems);
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h3" className={classes.title}>
          二手商城
        </Typography>
        <Box className={classes.items}>{marketItemRenderList}</Box>
      </Box>
    </Box>
  );
}
