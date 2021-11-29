import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchMarketItems,
  selectAllMarketItems,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../../components/Market/loading";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketSideBar from "../../components/Market/marketSideBar";
import MarketTopBar from "../../components/Market/marketTopBar";
import { marketItemSortBySortKey } from "../../components/Market/marketQueries";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketList() {
  useTitle("商城");
  const dispatch = useDispatch();
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const [starter, setStarter] = useState(false);

  const marketItems = useSelector(selectAllMarketItems);
  const status = useSelector((state) => state.market.fetchMarketItemsStatus);

  useEffect(() => {
    dispatch(fetchMarketItems(marketItemSortBySortKey));
  }, [dispatch]);

  useEffect(() => {
    if (
      marketItems === undefined ||
      marketItems === null ||
      marketItems.length === 0
    ) {
      setStarter(false);
    } else {
      if (
        marketItems[0].title === undefined ||
        marketItems[0].model === undefined ||
        marketItems[0].propertyType === undefined
      ) {
        setStarter(false);
      } else {
        setStarter(true);
      }
    }
  }, [marketItems]);

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
  return (
    <Box className={classes.root}>
      {starter === false ? (
        <Loading status={status} />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          className={classes.contain}
        >
          <MarketSideBar />
          <Box className={classes.img}>
            <MarketTopBar />
            <Box className={classes.items}>{marketItemRenderList}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
