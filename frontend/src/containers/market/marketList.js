import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import {
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
  const starter = useStarter(marketItems);
  // console.log(starter);
  // console.log(marketItems);
  // const status = useSelector((state) => state.market.fetchMarketItemsStatus);

  //conversion: Latitude: 1 deg = 110.574 km
  // Longitude: 1 deg = 111.320*cos(latitude) km
  useEffect(() => {
    // const filter =
    //   addressInfo === ""
    //     ? { active: { eq: true } }
    //     : {
    //         and: [
    //           {
    //             address: {
    //               lat: {
    //                 between: [
    //                   addressInfo.lat - searchRadius / 110.574,
    //                   addressInfo.lat + searchRadius / 110.574,
    //                 ],
    //               },
    //             },
    //             lng: {
    //               between: [
    //                 addressInfo.lng -
    //                   searchRadius / (111.32 * Math.cos(searchRadius.lat)),
    //                 addressInfo.lng +
    //                   searchRadius / (111.32 * Math.cos(searchRadius.lat)),
    //               ],
    //             },
    //           },
    //         ],
    //       };

    dispatch(fetchMarketItems({ query: marketItemSortBySortKey }));
  }, [dispatch, addressInfo, searchRadius]);

  const clickHandler = () => {
    dispatch(fetchMarketItems({ query: marketItemSortBySortKey }));
  };

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
      {starter === false ? null : ( // <Loading status={status} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          className={classes.contain}
        >
          <MarketSideBar
            setAddressInfo={setAddressInfo}
            setSearchRadius={setSearchRadius}
            clickHandler={clickHandler}
          />
          <Box className={classes.img}>
            <MarketTopBar />
            <Box className={classes.items}>{marketItemRenderList}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
