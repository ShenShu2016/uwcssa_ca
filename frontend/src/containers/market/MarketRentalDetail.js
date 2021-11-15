import {
  Box,
  Button,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  selectMarketItemById,
  selectedMarketItem,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CustomAvatar from "../../components/CustomMUI/CustomAvatar";
import { Loading } from "../../components/Market/loading";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Storage from "@aws-amplify/storage";
import SwipeViews from "../../components/Market/SwipeViews";
import { makeStyles } from "@mui/styles";
import { marketRentalOptions } from "../../components/Market/marketRentalOptions";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

// import {
//   removeSelectedMarketItem,
//   selectedMarketItem,
// } from "../../redux/actions/marketItemActions";

//点太快，selectedMarket来不及删，会产生bug; Solved!
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    // paddingBlock: "3rem",
  },
  images: {
    height: "100%",
    width: "calc(100% - 360px)",
    // bgcolor="black"
    position: "relative",
    overflow: "hidden",
    float: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
  contain: {
    width: "100%",
    overflow: "hidden",
    height: "calc(100vh - 64px)",
    bgcolor: "black",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

export default function MarketRentalDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("租房信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { id } = useParams();
  const [starter, setStarter] = useState(false);
  const {
    marketRentalSaleRent: RentOrSale,
    propertyType: PType,
    airConditionType: ACType,
    heatingType: HType,
  } = marketRentalOptions;
  console.log("id", id);
  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const status = useSelector((state) => state.market.selectedMarketItemStatus);
  console.log("marketItem", marketItem);
  useEffect(() => {
    if (
      marketItem === undefined ||
      marketItem === null ||
      marketItem.length === 0
    ) {
      setStarter(false);
    } else {
      if (marketItem.catFriendly === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }
    }
  }, [marketItem]);

  // const {
  //   // id,
  //   // name,
  //   imgS3Keys,
  //   // title,
  //   price,
  //   description,
  //   tags,
  //   // active,
  //   createdAt,
  //   // ByCreatedAt,
  //   owner,
  //   marketRentalSaleRent,
  //   propertyType,
  //   bedroomCounts,
  //   // bathroomsCounts,
  //   address,
  //   // propertySize,
  //   // dateAvailable,
  //   // laundryType,
  //   user,
  //   airConditionType,
  //   heatingType,
  //   catFriendly,
  //   dogFriendly,
  // } = marketItem;

  useEffect(() => {
    const getImage = async () => {
      try {
        setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Array.from(marketItem.imgS3Keys).map((key) =>
            Storage.get(key, {
              level: "public",
              expires: 120,
              download: false,
            })
          )
        );
        setImgKeyFromServer((url) => url.concat(imageAccessURL));
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer([]);
      }
    };
    if (starter) {
      getImage();
    }
  }, [starter, marketItem]);

  return (
    <div className={classes.root}>
      {starter === false ? (
        <Loading status={status} />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          className={classes.contain}
        >
          <Box className={classes.images}>
            <SwipeViews images={imgKeyFromServer} />
          </Box>
          <Box className={classes.info}>
            <Paper sx={{ maxWidth: "100%" }}>
              <Typography
                fontWeight="bold"
                variant="h5"
                marginLeft="1rem"
                paddingTop="0.5rem"
              >
                {
                  PType.filter(
                    (item) => item.value === marketItem.propertyType
                  )[0].label
                }
                ,{marketItem.bedroomCounts} bedrooms,
                {
                  RentOrSale.filter(
                    (item) => item.value === marketItem.marketRentalSaleRent
                  )[0].label
                }
              </Typography>
              <Typography marginX="1rem" marginTop="0.25rem">
                $ {marketItem.price}
              </Typography>
              <Typography marginX="1rem" variant="caption" color="gray">
                发布日期： {marketItem.createdAt.slice(0, 10)}
              </Typography>
              <Stack
                justifyContent="center"
                marginY="0.5rem"
                direction="row"
                spacing={1}
              >
                <Button
                  startIcon={<MessageIcon />}
                  onClick={() => console.log("clicked!")}
                  variant="outlined"
                  color="info"
                >
                  Contact
                </Button>
                <Button
                  startIcon={<BookmarksIcon />}
                  onClick={() => console.log("clicked!")}
                  variant="outlined"
                  color="info"
                >
                  Save
                </Button>
                <Button
                  startIcon={<ShareIcon />}
                  onClick={() => console.log("clicked!")}
                  variant="outlined"
                  color="info"
                >
                  Share
                </Button>
              </Stack>
              <Divider />
              <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                Details
              </Typography>
              <Grid marginX="0.5rem" container spacing={2}>
                <Grid item xs={4}>
                  AC Type
                </Grid>
                <Grid item xs={8}>
                  {
                    ACType.filter(
                      (item) => item.value === marketItem.airConditionType
                    )[0].label
                  }
                </Grid>
                <Grid item xs={4}>
                  Heating Type
                </Grid>
                <Grid item xs={8}>
                  {
                    HType.filter(
                      (item) => item.value === marketItem.heatingType
                    )[0].label
                  }
                </Grid>
                <Grid item xs={4}>
                  Pet Friendly
                </Grid>
                <Grid item xs={8}>
                  {marketItem.catFriendly && marketItem.dogFriendly
                    ? "可以养"
                    : "不可以养"}
                </Grid>
              </Grid>
              {marketItem.tags && (
                <Box>
                  <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                    Tags
                  </Typography>
                </Box>
              )}
              <Box sx={{ marginX: "1rem", marginBottom: "0.5rem" }}>
                {marketItem.tags.map((tag, tagIdx) => {
                  return (
                    <Chip key={tagIdx} label={tag} sx={{ margin: "0.5rem" }} />
                  );
                })}
              </Box>
              <Divider />
              <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                Descriptions
              </Typography>

              <Typography marginX="1rem" marginY="0.25rem">
                {marketItem.description}
              </Typography>
              <Paper
                sx={{
                  marginX: "1rem",
                  marginY: "0.25rem",
                  height: "250px",
                  backgroundColor: "rgb(243, 246, 249)",
                  marginBottom: "1rem",
                }}
              >
                Google Map
              </Paper>
              <Typography marginX="1rem" marginY="0.25rem">
                {marketItem.address}
              </Typography>
              <Divider />
              <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                Seller Infos
              </Typography>
              <Box
                sx={{
                  margin: "1rem",
                  // bgcolor: "#ff9800",
                }}
              >
                <CardHeader
                  avatar={
                    <CustomAvatar
                      // aria-label="recipe"
                      className={classes.avatar}
                      component={true}
                      user={marketItem.user}
                      // to={`/account/profile/${owner}`}
                    ></CustomAvatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={marketItem.owner}
                  subheader={`发布日期： ${marketItem.createdAt.slice(0, 10)}`}
                />
              </Box>
            </Paper>
          </Box>
        </Stack>
      )}
    </div>
  );
}
