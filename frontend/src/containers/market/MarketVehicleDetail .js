import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  removeSelectedMarketItem,
  selectedMarketItem,
} from "../../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Link } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Storage from "@aws-amplify/storage";
import SwipeViews from "../../components/Market/SwipeViews";
import { makeStyles } from "@mui/styles";
import { marketVehicleOptions } from "./marketVehicleOptions";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

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
    height: "90vh",
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
    overflowY: "scroll",
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
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    if (id && id !== "") {
      const type = "vehicle";
      dispatch(selectedMarketItem(id, type));
    }
    return () => dispatch(removeSelectedMarketItem());
  }, [id, dispatch]);
  const { marketItem } = useSelector((state) => state.market.selected);
  console.log("marketItem", marketItem);
  const {
    // id,
    // name,
    imgS3Keys,
    price,
    description,
    location,
    vehicleType,
    make,
    year,
    model,
    exteriorColor,
    interiorColor,
    fuelType,
    tags,
    // active,
    createdAt,
    // ByCreatedAt,
    owner,
  } = marketItem;

  useEffect(() => {
    const getImage = async () => {
      try {
        setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Array.from(imgS3Keys).map((key) =>
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
    if (imgS3Keys) {
      getImage();
    }
  }, [imgS3Keys]);

  return (
    <div className={classes.root}>
      {Object.keys(marketItem).length === 0 ? (
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2} direction="row">
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
        </Box>
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
                {year} {make} {model}
              </Typography>

              <Typography marginX="1rem" marginTop="0.25rem">
                $ {price}
              </Typography>
              <Typography marginX="1rem" variant="caption" color="gray">
                发布日期： {createdAt.slice(0, 10)}
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
                  variant="contained"
                >
                  Contact
                </Button>
                <Button
                  startIcon={<BookmarksIcon />}
                  onClick={() => console.log("clicked!")}
                  variant="contained"
                >
                  Save
                </Button>
                <Button
                  startIcon={<ShareIcon />}
                  onClick={() => console.log("clicked!")}
                  variant="contained"
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
                  {VType.filter((item) => item.value === vehicleType)[0].label}
                </Grid>
                <Grid item xs={4}>
                  Make/Model
                </Grid>
                <Grid item xs={8}>
                  {year} {make} {model}
                </Grid>
                <Grid item xs={4}>
                  Exterior Color
                </Grid>
                <Grid item xs={8}>
                  {exteriorColor}
                </Grid>
                <Grid item xs={4}>
                  Interior Color
                </Grid>
                <Grid item xs={8}>
                  {interiorColor}
                </Grid>
                <Grid item xs={4}>
                  Furl Type
                </Grid>
                <Grid item xs={8}>
                  {fuelType}
                </Grid>
              </Grid>

              {tags && (
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
                {tags.map((tag, tagIdx) => {
                  return <Chip key={tagIdx} label={tag} color="primary" />;
                })}
              </Stack>
              <Divider />
              <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                Descriptions
              </Typography>
              <Typography marginX="1rem" marginY="0.25rem">
                {description}
              </Typography>
              <Box
                sx={{
                  marginX: "1rem",
                  marginY: "0.25rem",
                  bgcolor: "#4caf50",
                  height: "200px",
                }}
              >
                Google map
              </Box>
              <Typography marginX="1rem" marginY="0.25rem">
                {location}
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
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      component={Link}
                      to={`/account/profile/${owner}`}
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={owner}
                  subheader={`发布日期： ${createdAt.slice(
                    0,
                    10
                  )} ${createdAt.slice(11, 19)}`}
                />
              </Box>
            </Paper>
          </Box>
        </Stack>
      )}
    </div>
  );
}
