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
  removeSelectedMarketItem,
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
import { marketItemOptions } from "./marketItemOptions";
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

  console.log("id", id);

  useEffect(() => {
    const getItems = async () => {
      if (id && id !== "") {
        try {
          await dispatch(selectedMarketItem(id)).unwrap();
          console.log("Successfully get items");
        } catch (error) {
          console.error("Failed to get items", error);
        } finally {
          return () => dispatch(removeSelectedMarketItem());
        }
      }
    };
    getItems();
  }, [id, dispatch]);

  const { marketItem } = useSelector((state) => state.market.selected);
  const {
    marketItemConditionList: Conditions,
    marketItemCategoryList: Category,
  } = marketItemOptions;
  console.log("marketItem", marketItem);

  const {
    // id,
    // name,
    imgS3Keys,
    title,
    price,
    description,
    location,
    marketItemCondition,
    marketItemCategory,
    tags,
    // active,
    createdAt,
    user,
    // userID,
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
                {title}
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
                      (item) => item.value === marketItemCategory
                    )[0].label
                  }
                </Grid>
                <Grid item xs={4}>
                  Condition
                </Grid>
                <Grid item xs={8}>
                  {
                    Conditions.filter(
                      (item) => item.value === marketItemCondition
                    )[0].label
                  }
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
                  return <Chip key={tagIdx} label={tag} />;
                })}
              </Stack>
              <Divider />
              <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
                Descriptions
              </Typography>

              <Typography marginX="1rem" marginY="0.25rem">
                {description}
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
                {location}
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
                      user={user}
                      // to={`/account/profile/${owner}`}
                    ></CustomAvatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={owner}
                  subheader={`发布日期： ${createdAt.slice(0, 10)} `}
                />
              </Box>
            </Paper>
          </Box>
        </Stack>
      )}
    </div>
  );
}
