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
import { useHistory } from "react-router-dom";
// import useGetImages from "../../components/Market/useGetImages";
import { useParams } from "react-router-dom";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export function MarketRentalInfo({ marketItem, mode = "detail", darkTheme }) {
  const {
    id,
    name,
    // title,
    price,
    description,
    tags,
    // active,
    createdAt,
    updatedAt,
    // ByCreatedAt,
    owner,
    marketRentalSaleRent,
    propertyType,
    bedroomCounts,
    // bathroomsCounts,
    address,
    // propertySize,
    // dateAvailable,
    // laundryType,
    user,
    airConditionType,
    heatingType,
    catFriendly,
    dogFriendly,
    contactEmail,
    contactPhone,
    contactWeChat,
  } = marketItem;

  return (
    <Paper>
      <TitleInfo
        name={name}
        type="rental"
        price={price}
        updatedAt={updatedAt}
        owner={owner}
        user={user}
        contactEmail={contactEmail}
        contactWeChat={contactWeChat}
        contactPhone={contactPhone}
        id={id}
        mode={mode}
        propertyType={propertyType}
        bedroomCounts={bedroomCounts}
        marketRentalSaleRent={marketRentalSaleRent}
        darkTheme={darkTheme}
      />
      <Divider variant="middle" />
      <DetailInfo
        type="rental"
        tags={tags}
        description={description}
        airConditionType={airConditionType}
        heatingType={heatingType}
        catFriendly={catFriendly}
        mode={mode}
        dogFriendly={dogFriendly}
        address={address}
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

export default function MarketRentalDetail() {
  const classes = detailStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  useTitle("租房信息");
  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const { darkTheme } = useSelector((state) => state.general);
  const starter = useStarter(marketItem, "rental");
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
            <MarketRentalInfo marketItem={marketItem} darkTheme={darkTheme} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
