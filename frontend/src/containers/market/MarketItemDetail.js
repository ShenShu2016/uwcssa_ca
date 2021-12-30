import { Box, Divider, Fab, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  selectMarketItemById,
  selectedMarketItem,
} from "../../redux/slice/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close"; // import { Loading } from "../../components/Market/loading";
import DetailInfo from "../../components/Market/detailInfo";
import SellerInfo from "../../components/Market/sellerInfo";
import SwipeViews from "../../components/SwipeViews";
import TitleInfo from "../../components/Market/titleInfo";
import { detailStyle } from "../../components/Market/marketDetailCss";
import { useHistory } from "react-router-dom";
// import useGetImages from "../../components/Market/useGetImages";
import { useParams } from "react-router-dom";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export function MarketItemInfo({ marketItem, mode = "detail", darkTheme }) {
  const [open, setOpen] = useState(false);
  const {
    id,
    // name,
    title,
    price,
    description,
    // location,
    address,
    marketItemCondition,
    marketItemCategory,
    tags,
    // active,
    updatedAt,
    createdAt,
    user,
    // userID,
    // ByCreatedAt,
    contactEmail,
    contactPhone,
    contactWeChat,
    owner,
  } = marketItem;

  return (
    <Paper>
      <TitleInfo
        id={id}
        mode={mode}
        title={title}
        price={price}
        updatedAt={updatedAt}
        owner={owner}
        open={open}
        user={user}
        contactEmail={contactEmail}
        contactPhone={contactPhone}
        contactWeChat={contactWeChat}
        handleClose={() => setOpen(false)}
        handleOpen={() => setOpen(true)}
        type="item"
        darkTheme={darkTheme}
      />
      <Divider variant="middle" />
      <DetailInfo
        marketItemCategory={marketItemCategory}
        marketItemCondition={marketItemCondition}
        tags={tags}
        mode={mode}
        description={description}
        address={address}
        type="item"
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

export default function MarketItemDetail() {
  const classes = detailStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  useTitle("二手商品信息");
  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const { darkTheme } = useSelector((state) => state.general);
  const starter = useStarter(marketItem, "item");
  const closeHandler = () => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      const currentURL = window.location.href;
      const goURL = currentURL.split("/");
      history.push(`/market/${goURL[goURL.length - 2]}`);
    }
  };

  return (
    <div className={classes.root}>
      {starter === false ? null : (
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
            <MarketItemInfo marketItem={marketItem} darkTheme={darkTheme} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
