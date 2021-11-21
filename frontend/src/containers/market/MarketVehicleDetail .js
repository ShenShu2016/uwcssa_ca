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
import { Link } from "react-router-dom";
import { Loading } from "../../components/Market/loading";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Storage from "@aws-amplify/storage";
import SwipeViews from "../../components/SwipeViews";
import UpdateIcon from "@mui/icons-material/Update";
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

export function MarketVehicleInfo({ marketItem, mode = "detail" }) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userAuth.user.username);
  const { marketVehicleTypeList: VType } = marketVehicleOptions;
  const {
    id,
    // name,
    // imgS3Keys,
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
    user,
    // active,
    createdAt,
    updatedAt,
    // ByCreatedAt,
    owner,
  } = marketItem;
  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <Typography
        fontWeight="bold"
        variant="h5"
        marginLeft="1rem"
        marginRight="1rem"
        paddingTop="0.5rem"
      >
        {year.length === 0 && make.length === 0 && model.length === 0
          ? "Composite Title Goes Here"
          : `${year} ${make} ${model}`}
      </Typography>

      <Typography marginX="1rem" marginTop="0.25rem">
        $ {price.length === 0 ? "Price Goes Here" : price}
      </Typography>
      <Typography marginX="1rem" variant="caption" color="gray">
        更新于: {updatedAt.length === 0 ? "" : moment(updatedAt).fromNow()}
      </Typography>
      <Stack
        justifyContent="center"
        marginY="0.5rem"
        direction="row"
        spacing={1}
      >
        {currentUser === owner ? (
          <Button
            startIcon={<UpdateIcon />}
            component={Link}
            to={
              mode === "preview"
                ? `/market/edit/vehicle/${id}`
                : window.location.pathname
            }
            variant="outlined"
            color="info"
          >
            Edit
          </Button>
        ) : (
          <Button
            startIcon={<MessageIcon />}
            onClick={() => console.log("clicked!")}
            variant="outlined"
            color="info"
          >
            Contact
          </Button>
        )}
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
          {VType.map((item) => item.value).includes(vehicleType)
            ? VType.filter((item) => item.value === vehicleType)[0].label
            : ""}
        </Grid>
        <Grid item xs={4}>
          Make/Model
        </Grid>
        <Grid item xs={8}>
          {year.length === 0 && make.length === 0 && model.length === 0
            ? "Make & Model"
            : `${year} ${make} ${model}`}
        </Grid>
        <Grid item xs={4}>
          Exterior Color
        </Grid>
        <Grid item xs={8}>
          {exteriorColor.length === 0
            ? "Exterior Color Goes Here"
            : exteriorColor}
        </Grid>
        <Grid item xs={4}>
          Interior Color
        </Grid>
        <Grid item xs={8}>
          {interiorColor.length === 0
            ? "Interior Color Goes Here"
            : interiorColor}
        </Grid>
        <Grid item xs={4}>
          Furl Type
        </Grid>
        <Grid item xs={8}>
          {fuelType.length === 0 ? "Fuel Type Color Goes Here" : fuelType}
        </Grid>
      </Grid>

      {tags && (
        <Box>
          <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
            Tags
          </Typography>
        </Box>
      )}
      <Stack direction="row" marginX="1rem" marginBottom="0.5rem" spacing={2}>
        {tags.map((tag, tagIdx) => {
          return <Chip key={tagIdx} label={tag} />;
        })}
      </Stack>
      <Divider />
      <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
        Descriptions
      </Typography>
      <Typography marginX="1rem" marginY="0.25rem">
        {description.length === 0 ? "Description Goes Here" : description}
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
        {location.length === 0 ? "Location Goes Here" : location}
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
  );
}

export default function MarketVehicleDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("二手车辆");
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
          <Box
            // bgcolor="yellow"
            className={classes.info}
          >
            <MarketVehicleInfo marketItem={marketItem} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
