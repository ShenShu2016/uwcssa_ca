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
import { marketVehicleOptions } from "../../components/Market/marketVehicleOptions";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

// import {
//   removeSelectedMarketItem,
//   selectedMarketItem,
// } from "../../redux/actions/marketItemActions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  photo: {
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

export default function MarketVehicleDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("二手车辆");
  const { marketVehicleTypeList: VType } = marketVehicleOptions;
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const [starter, setStarter] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const status = useSelector((state) => state.market.selectedMarketItemStatus);
  useEffect(() => {
    if (
      marketItem === undefined ||
      marketItem === null ||
      marketItem.length === 0
    ) {
      setStarter(false);
    } else {
      if (marketItem.fuelType === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }
    }
  }, [marketItem]);

  console.log("id", id);
  console.log("marketItem", marketItem);
  // const {
  //   // id,
  //   // name,
  //   imgS3Keys,
  //   price,
  //   description,
  //   location,
  //   vehicleType,
  //   make,
  //   year,
  //   model,
  //   exteriorColor,
  //   interiorColor,
  //   fuelType,
  //   tags,
  //   user,
  //   // active,
  //   createdAt,
  //   // ByCreatedAt,
  //   owner,
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
          <SwipeViews images={imgKeyFromServer} />

          <Box
            // bgcolor="yellow"
            className={classes.info}
          >
            <Paper sx={{ maxWidth: "100%" }}>
              <Typography
                fontWeight="bold"
                variant="h5"
                marginLeft="1rem"
                paddingTop="0.5rem"
              >
                {marketItem.year} {marketItem.make} {marketItem.model}
              </Typography>

              <Typography marginX="1rem" marginTop="0.25rem">
                $ {marketItem.price}
              </Typography>
              <Typography marginX="1rem" variant="caption" color="gray">
                {moment(marketItem.createdAt).fromNow()}
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
                  Vehicle Type
                </Grid>
                <Grid item xs={8}>
                  {
                    VType.filter(
                      (item) => item.value === marketItem.vehicleType
                    )[0].label
                  }
                </Grid>
                <Grid item xs={4}>
                  Make/Model
                </Grid>
                <Grid item xs={8}>
                  {marketItem.year} {marketItem.make} {marketItem.model}
                </Grid>
                <Grid item xs={4}>
                  Exterior Color
                </Grid>
                <Grid item xs={8}>
                  {marketItem.exteriorColor}
                </Grid>
                <Grid item xs={4}>
                  Interior Color
                </Grid>
                <Grid item xs={8}>
                  {marketItem.interiorColor}
                </Grid>
                <Grid item xs={4}>
                  Furl Type
                </Grid>
                <Grid item xs={8}>
                  {marketItem.fuelType}
                </Grid>
              </Grid>

              {marketItem.tags && (
                <Box>
                  <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                    Tags
                  </Typography>
                </Box>
              )}
              <Stack
                direction="row"
                marginX="1rem"
                marginBottom="0.5rem"
                spacing={2}
              >
                {marketItem.tags.map((tag, tagIdx) => {
                  return <Chip key={tagIdx} label={tag} />;
                })}
              </Stack>
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
                {marketItem.location}
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
                  subheader={`发布日期： ${marketItem.createdAt.slice(0, 10)} `}
                />
              </Box>
            </Paper>
          </Box>
        </Stack>
      )}
    </div>
  );
}
