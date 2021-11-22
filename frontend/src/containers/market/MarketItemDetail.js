import {
  Box,
  Button,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Loading } from "../../components/Market/loading";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ShareIcon from "@mui/icons-material/Share";
import Storage from "@aws-amplify/storage";
import SwipeViews from "../../components/SwipeViews";
import UpdateIcon from "@mui/icons-material/Update";
import { makeStyles } from "@mui/styles";
import { marketItemOptions } from "../../components/Market/marketItemOptions";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

// import {
//   removeSelectedMarketItem,
//   selectedMarketItem,
// } from "../../redux/reducers/marketSlice";

// removeSelectedMarketItem,
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

function SimpleDialog(props) {
  const { open, onClose, contactEmail, contactPhone, contactWeChat } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Seller Contact Infos</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button>
          <ListItemIcon>
            <PhoneInTalkIcon />
          </ListItemIcon>
          <ListItemText primary={contactPhone} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={contactEmail} />
        </ListItem>
        {contactWeChat ? (
          <ListItem button>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary={contactWeChat} />
          </ListItem>
        ) : null}
      </List>
    </Dialog>
  );
}

export function MarketItemInfo({ marketItem, mode = "detail" }) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userAuth.user.username);
  const {
    marketItemConditionList: Conditions,
    marketItemCategoryList: Category,
  } = marketItemOptions;
  const [open, setOpen] = useState(false);
  const {
    id,
    // name,
    // imgS3Keys,
    title,
    price,
    description,
    location,
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
    <Paper sx={{ maxWidth: "100%" }}>
      <Typography
        fontWeight="bold"
        variant="h5"
        marginLeft="1rem"
        marginRight="1rem"
        paddingTop="0.5rem"
      >
        {title.length === 0 ? "Title Goes Here" : title}
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
            component={Link}
            startIcon={<UpdateIcon />}
            to={
              mode === "detail"
                ? `/market/edit/item/${id}`
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
            onClick={() => setOpen(true)}
            variant="outlined"
            color="info"
          >
            Contact
          </Button>
        )}
        <SimpleDialog
          open={open}
          user={user}
          contactPhone={contactPhone}
          contactEmail={contactEmail}
          contactWeChat={contactWeChat}
          onClose={() => setOpen(false)}
        />
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
          {Category.map((item) => item.value).includes(marketItemCategory)
            ? Category.filter((item) => item.value === marketItemCategory)[0]
                .label
            : ""}
        </Grid>
        <Grid item xs={4}>
          Condition
        </Grid>
        <Grid item xs={8}>
          {Conditions.map((item) => item.value).includes(marketItemCondition)
            ? Conditions.filter((item) => item.value === marketItemCondition)[0]
                .label
            : ""}
        </Grid>
      </Grid>
      {tags && (
        <Box>
          <Box>
            <Typography marginX="1rem" marginY="0.25rem" fontWeight="600">
              Tags
            </Typography>
          </Box>
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
        </Box>
      )}
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
      <Typography margin="1rem" marginY="0.25rem">
        {location.length === 0 ? "Location Goes Here" : location}
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
  );
}

export default function MarketItemDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useTitle("二手商品信息");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const { id } = useParams();
  const [starter, setStarter] = useState(false);

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
      if (marketItem.marketItemCategory === undefined) {
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
            <MarketItemInfo marketItem={marketItem} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
