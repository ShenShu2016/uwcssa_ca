import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import {
  addressFilteredMarketItem,
  fetchMarketItems,
  selectAllMarketItems,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

// import { Loading } from "../../components/Market/loading";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketSideBar from "../../components/Market/marketSideBar";
import MarketTopBar from "../../components/Market/marketTopBar";
import { marketItemSortBySortKey } from "../../components/Market/marketQueries";
import { marketItemStyle } from "../../components/Market/marketItemCss";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketList() {
  useTitle("UWCSSA商城");
  const dispatch = useDispatch();
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const [addressInfo, setAddressInfo] = React.useState("");
  const [searchRadius, setSearchRadius] = React.useState(0);
  // console.log(addressInfo);
  const marketItems = useSelector(selectAllMarketItems);
  const { darkTheme } = useSelector((state) => state.general);
  const starter = useStarter(marketItems);
  // console.log(starter);
  // console.log(marketItems);
  // const status = useSelector((state) => state.market.fetchMarketItemsStatus);

  //conversion: Latitude: 1 deg = 110.574 km
  // Longitude: 1 deg = 111.320*cos(latitude) km
  // console.log("addressInfo", addressInfo);
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
    // console.log("filter", filter);
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
      {starter === false ? null : ( // <Loading status={status} />
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
            <Box className={classes.items}>{marketItemRenderList}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
