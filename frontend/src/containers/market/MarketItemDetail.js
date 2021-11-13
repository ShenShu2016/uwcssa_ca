import {
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
  selectMarketItemById,
  selectedMarketItem,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CustomAvatar from "../../components/CustomMUI/CustomAvatar";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Storage from "@aws-amplify/storage";
import SwipeViews from "../../components/Market/SwipeViews";
import { makeStyles } from "@mui/styles";
import { marketItemOptions } from "../../components/Market/marketItemOptions";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

// import {
//   removeSelectedMarketItem,
//   selectedMarketItem,
// } from "../../redux/reducers/marketSlice";

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

export default function MarketItemDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("二手商品信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { id } = useParams();
  const [starter, setStarter] = useState(false);

  useEffect(() => {
    console.log("试试看");
    dispatch(selectedMarketItem(id));
    setStarter(true);

    // return () => dispatch(removeSelectedMarketItem());
  }, [id, dispatch]);
  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  console.log("id", id);
  console.log("啥玩意", marketItem);
  const {
    marketItemConditionList: Conditions,
    marketItemCategoryList: Category,
  } = marketItemOptions;

  // const {
  //   // id,
  //   // name,
  //   imgS3Keys,
  //   title,
  //   price,
  //   description,
  //   location,
  //   marketItemCondition,
  //   marketItemCategory,
  //   tags,
  //   // active,
  //   createdAt,
  //   user,
  //   // userID,
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
    if (marketItem) {
      getImage();
    }
  }, [marketItem]);
  console.log("starter", starter);
  return (
    <div className={classes.root}>
      {marketItem ? (
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
                {marketItem.title}
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
                  Category
                </Grid>
                <Grid item xs={8}>
                  {
                    Category.filter(
                      (item) => item.value === marketItem.marketItemCategory
                    ).label
                  }
                </Grid>
                <Grid item xs={4}>
                  Condition
                </Grid>
                <Grid item xs={8}>
                  {/* {
                    Conditions.filter(
                      (item) => item.value === marketItemCondition
                    )[0].label
                  } */}
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
              <Typography margin="1rem" marginY="0.25rem">
                {marketItem.location}
              </Typography>
              <Divider />
              <Typography margin="1rem" marginY="0.25rem" fontWeight="600">
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
      ) : (
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
      )}
    </div>
  );
}
