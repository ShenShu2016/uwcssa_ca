import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MarketComponent from "../../components/Market/MarketComponent";
import MarketSideBar from "./marketSideBar";
import MarketTopBar from "./marketTopBar";
import { fetchMarketItems } from "../../redux/reducers/marketSlice";
import { marketItemStyle } from "./marketItemCss";
import { useTitle } from "../../Hooks/useTitle";

// setMarketItems,
//   setMarketRental,
//   setMarketVehicles,
// } from "../../redux/actions/marketItemActions";

export default function MarketList() {
  useTitle("市场");
  const dispatch = useDispatch();
  const useStyles = marketItemStyle;
  const classes = useStyles();

  const { marketItems, fetchMarketItemsStatus } = useSelector(
    (state) => state.market
  );

  useEffect(() => {
    if (fetchMarketItemsStatus === "idle" || undefined) {
      dispatch(fetchMarketItems());
    }
  }, [fetchMarketItemsStatus, dispatch]);

  const marketItemRenderList =
    marketItems &&
    marketItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent
          item={marketItem}
          type={marketItem.marketType.toLowerCase()}
          key={marketItemIdx}
        />
      );
    });
  console.log("marketVehicles", marketItems);

  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        className={classes.contain}
      >
        <MarketSideBar />
        <Box className={classes.img}>
          <MarketTopBar />
          <Box className={classes.items}>{marketItemRenderList}</Box>

          {/* <Typography variant="h5" className={classes.title}>
            汽车
          </Typography>
          <Box className={classes.items}>{marketVehicleRenderList}</Box>
          <Divider />
          <Typography variant="h5" className={classes.title}>
            房屋
          </Typography>
          <Box className={classes.items}>{marketRentalRenderList}</Box>
          <Divider /> */}
        </Box>
      </Stack>
    </Box>
  );
}
