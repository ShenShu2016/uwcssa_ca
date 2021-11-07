import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "@mui/icons-material/House";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MarketComponent from "../../components/Market/MarketComponent";
import MarketFIlterLocation from "./marketFilterLocation";
import MarketForm from "../../components/Market/marketForm";
import SearchIcon from "@mui/icons-material/Search";
import { fetchMarketItems } from "../../redux/reducers/marketSlice";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useTitle } from "../../Hooks/useTitle";

export default function MarketItem() {
  const useStyles = makeStyles((theme) => ({
    root: {},
    info: {
      width: "360px",
      height: "100%",
      float: "left",
      // overflowY: "scroll",
      overflow: "hidden",
      position: "relative",
      //   backgroundColor: "black",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
      },
    },
    contain: {
      width: "100%",
      overflow: "hidden",
      height: "100vh",
      //   bgcolor: "black",
      [theme.breakpoints.down("md")]: {
        display: "block",
        height: "100%",
      },
    },
    paper: {
      padding: "1rem",
      //   backgroundColor: "black",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      overflow: "hidden",
      marginRight: "5px",
    },
    img: {
      padding: "2rem",
      height: "100%",
      width: "calc(100% - 360px)",
      position: "relative",
      overflowY: "auto",
      float: "left",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "50vh",
      },
    },
    title: {
      textAlign: "center",
      color: "#0D1F48",
      paddingBottom: "3rem",
    },
    items: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  useTitle("Item");
  const dispatch = useDispatch();
  const classes = useStyles();
  const [sortKey, setSortKey] = useState("original");
  const { marketItems, fetchMarketItemsStatus } = useSelector(
    (state) => state.market
  );

  useEffect(() => {
    if (fetchMarketItemsStatus === "idle" || undefined) {
      dispatch(fetchMarketItems());
    }
  }, [fetchMarketItemsStatus, dispatch]);

  const sortOptions = [
    { value: "original", label: "Recommended" },
    { value: "PriceDesc", label: "Price: highest first" },
    { value: "PriceAsc", label: "Price: lowest first" },
  ];
  let tags = [];
  marketItems.forEach((item) => {
    item.tags.map((subitem) => tags.push(subitem));
  });
  const countTags = (arr) =>
    arr.reduce((obj, e) => {
      obj[e] = (obj[e] || 0) + 1;
      return obj;
    }, {});
  const occurrence = countTags(tags);
  const sortedOccurrence = Object.keys(occurrence).sort(
    (a, b) => occurrence[a] - occurrence[b]
  );
  console.log("Sorted Occurrence", sortedOccurrence);
  const sortedFunction = (sortKey) => {
    if (sortKey === "original") {
      return marketItems;
    }
    if (sortKey === "PriceDesc") {
      const copyMarketItems = [...marketItems];
      const sortedItems = copyMarketItems.sort((a, b) => b.price - a.price);
      return sortedItems;
    }
    if (sortKey === "PriceAsc") {
      const copyMarketItems = [...marketItems];
      const sortedItems = copyMarketItems.sort((a, b) => a.price - b.price);
      return sortedItems;
    }
  };
  const sortedMarketItems = sortedFunction(sortKey);
  const itemRenderList =
    sortedMarketItems &&
    sortedMarketItems.map((marketItem, marketItemIdx) => {
      return (
        <MarketComponent item={marketItem} type={"item"} key={marketItemIdx} />
      );
    });

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgb(243, 246, 249)",
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const SearchArea = () => {
    return (
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    );
  };
  const CategoryIcons = () => {
    return (
      <nav aria-label="main mailbox folders">
        <List sx={{ overflow: "auto", position: "relative" }}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/market/item">
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="二手商品" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText primary="汽車" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    );
  };

  const FilterInfo = () => {
    return (
      <Box className={classes.info}>
        <Paper className={classes.paper} elevation={3}>
          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<HomeIcon />}
                  color="inherit"
                  component={Link}
                  to="/market"
                >
                  Market
                </Button>
              </span>
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<AddShoppingCartIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/item"
                >
                  Item
                </Button>
              </span>
            </Breadcrumbs>
          </Box>
          <Typography variant="h5" marginBottom="1rem" fontWeight="bold">
            Item
          </Typography>
          <Box width="100%" marginBottom="1rem" overflow="hidden">
            <SearchArea />
            <Button
              variant="contained"
              sx={{ margin: "1rem" }}
              startIcon={<AddIcon />}
              component={Link}
              to="/market/create"
            >
              Add new listing
            </Button>
            <Divider />
          </Box>
          <Box width="100%" overflow="hidden">
            <Typography variant="h6" fontWeight="bold">
              Location Filters
            </Typography>
            <MarketFIlterLocation />
            <MarketForm
              title="Sort by"
              value={sortKey}
              options={sortOptions}
              required={false}
              onChange={(e) => setSortKey(e.target.value)}
            />
            <Typography
              marginTop="1rem"
              variant="h6"
              marginBottom="1rem"
              fontWeight="bold"
            >
              Price Range
            </Typography>
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Category
            </Typography>
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Condition
            </Typography>
            <Divider />
          </Box>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            Categories
          </Typography>
          <Box width="100%" maxHeight="400px" overflow="auto">
            <CategoryIcons />
          </Box>
        </Paper>
      </Box>
    );
  };

  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        className={classes.contain}
      >
        <FilterInfo />
        <Box className={classes.img}>
          <Paper
            elevation={3}
            sx={{
              alignContent: "center",
              marginBottom: "1rem",
              padding: "2rem",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Shop by trend
            </Typography>
            <Stack
              spacing={1}
              direction="row"
              sx={{ color: "action.active", marginTop: "0.5rem" }}
            >
              {sortedOccurrence.slice(0, 4).map((tag, tagIdx) => {
                return (
                  <Chip
                    key={tagIdx}
                    avatar={<Avatar>{occurrence[tag]}</Avatar>}
                    label={tag}
                  />
                );
              })}
            </Stack>
          </Paper>
          <Box className={classes.items}>{itemRenderList}</Box>
        </Box>
      </Stack>
    </Box>
  );
}
