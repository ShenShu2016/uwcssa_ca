import {
  Avatar,
  Box,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  removeSelectedMarketItem,
  selectedMarketItem,
} from "../../redux/actions/marketItemActions";
import { useDispatch, useSelector } from "react-redux";

import AutoSwipeableViews from "../../components/Market/AutoSwipeableViews";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Stack from "@mui/material/Stack";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bread: {
    marginTop: "4rem",
    marginLeft: "1rem",
  },
  root: {
    // maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
  },
  boxSize: {
    paddingInline: "3rem",
    height: "100%",
    overflow: "hidden",
    // maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      paddingInline: "0",
      // height: "100%",
    },
  },
}));

export default function MarketRentalDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imageURL, setImageURL] = useState(null);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    if (id && id !== "") {
      const type = "rental";
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
    // title,
    price,
    description,
    // tags,
    // active,
    createdAt,
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
    airConditionType,
    heatingType,
    catFriendly,
    dogFriendly,
  } = marketItem;

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(imgS3Keys[0], {
          level: "public",
          expires: 120,
          download: false,
        });
        // console.log("imageAccessURL", imageAccessURL);
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (imgS3Keys) {
      getImage();
    }
  }, [imgS3Keys]);
  return (
    <div className={classes.root}>
      {Object.keys(marketItem).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item md={9} xs={12}>
              <Box className={classes.boxSize}>
                <AutoSwipeableViews images={[imageURL]} />
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Paper>
                <Typography
                  variant="h5"
                  marginLeft="0.5rem"
                  paddingTop="0.5rem"
                >
                  {propertyType},{bedroomCounts} Bedrooms,{" "}
                  {marketRentalSaleRent}
                </Typography>
                <Typography margin="0.5rem">$ {price}</Typography>
                <Typography margin="0.5rem">
                  发布日期： {createdAt.slice(0, 10)}
                </Typography>
                <Stack
                  justifyContent="center"
                  marginY="0.5rem"
                  direction="row"
                  spacing={1}
                >
                  <Chip
                    icon={<MessageIcon />}
                    onClick={() => console.log("clicked!")}
                    label="Contact"
                  />
                  <Chip
                    icon={<BookmarksIcon />}
                    onClick={() => console.log("clicked!")}
                    label="Save"
                  />
                  <Chip
                    icon={<ShareIcon />}
                    onClick={() => console.log("clicked!")}
                    label="Share"
                  />
                </Stack>
                <Divider />
                <Typography marginLeft="0.5rem">Details</Typography>
                <Grid marginLeft="0.5rem" container spacing={2}>
                  <Grid item xs={4}>
                    AC Type
                  </Grid>
                  <Grid item xs={8}>
                    {airConditionType}
                  </Grid>
                  <Grid item xs={4}>
                    Heating Type
                  </Grid>
                  <Grid item xs={8}>
                    {heatingType}
                  </Grid>
                  <Grid item xs={4}>
                    Pet Friendly
                  </Grid>
                  <Grid item xs={8}>
                    {catFriendly && dogFriendly ? "可以养" : "不可以养"}
                  </Grid>
                </Grid>
                <Typography marginLeft="0.5rem" marginTop="0.5rem">
                  Descriptions
                </Typography>

                <Typography marginLeft="0.5rem">{description}</Typography>
                <Box
                  sx={{ margin: "0.5rem", bgcolor: "#4caf50", height: "200px" }}
                >
                  Google map
                </Box>
                <Typography margin="0.5rem">Address {address}</Typography>
                <Divider />
                <Typography margin="0.5rem">Seller Infos</Typography>
                <Box
                  sx={{
                    margin: "0.5rem",
                    bgcolor: "#ff9800",
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
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
