import { Box, Divider, Fab, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  selectMarketItemById,
  selectedMarketItem,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../../components/BackdropLoading";
import CloseIcon from "@mui/icons-material/Close"; // import { Loading } from "../../components/Market/loading";
import DetailInfo from "../../components/Market/detailInfo";
// import { Loading } from "../../components/Market/loading";
import SellerInfo from "../../components/Market/sellerInfo";
import SwipeViews from "../../components/SwipeViews";
import TitleInfo from "../../components/Market/titleInfo";
import { detailStyle } from "../../components/Market/marketDetailCss";
import { useHistory } from "react-router";
// import useGetImages from "../../components/Market/useGetImages";
import { useParams } from "react-router-dom";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export function MarketVehicleInfo({ marketItem, mode = "detail", darkTheme }) {
  console.log(mode);
  const {
    id,
    name,
    price,
    description,
    address,
    vehicleType,
    make,
    year,
    model,
    exteriorColor,
    interiorColor,
    fuelType,
    tags,
    user,
    // active,
    createdAt,
    updatedAt,
    // ByCreatedAt,
    contactEmail,
    contactPhone,
    contactWeChat,
    owner,
  } = marketItem;
  return (
    <Paper>
      <TitleInfo
        name={name}
        id={id}
        mode={mode}
        price={price}
        updatedAt={updatedAt}
        owner={owner}
        user={user}
        contactEmail={contactEmail}
        contactPhone={contactPhone}
        contactWeChat={contactWeChat}
        type="vehicle"
        year={year}
        make={make}
        model={model}
        darkTheme={darkTheme}
      />
      <Divider variant="middle" />
      <DetailInfo
        type="vehicle"
        tags={tags}
        description={description}
        address={address}
        year={year}
        make={make}
        model={model}
        mode={mode}
        vehicleType={vehicleType}
        exteriorColor={exteriorColor}
        interiorColor={interiorColor}
        fuelType={fuelType}
        darkTheme={darkTheme}
      />
      <Divider variant="middle">
        <Typography fontWeight="600">卖家详情</Typography>
      </Divider>
      <SellerInfo
        user={user}
        createdAt={createdAt}
        owner={owner}
        darkTheme={darkTheme}
      />
    </Paper>
  );
}

export default function MarketVehicleDetail() {
  const classes = detailStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("二手车辆");
  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const { darkTheme } = useSelector((state) => state.general);
  const starter = useStarter(marketItem, "vehicle");
  const closeHandler = () => {
    const currentURL = window.location.href;
    const goURL = currentURL.split("/");
    history.push(`/market/${goURL[goURL.length - 2]}`);
  };
  return (
    <div className={classes.root}>
      {starter === false ? (
        <BackdropLoading />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          className={classes.contain}
        >
          <Box className={classes.fabBox}>
            <Fab color="primary" onClick={() => closeHandler()}>
              <CloseIcon />
            </Fab>
          </Box>
          <Box className={classes.images}>
            <SwipeViews images={marketItem.imgURLs} />
          </Box>
          <Box className={classes.info}>
            <MarketVehicleInfo marketItem={marketItem} darkTheme={darkTheme} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
