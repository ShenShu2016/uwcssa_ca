import { Box, Button, Divider, Paper, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import HouseIcon from "@mui/icons-material/House";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MarketFIlterLocation from "./marketFilterLocation";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const MarketSideBar = () => {
  const useStyles = makeStyles((theme) => ({
    info: {
      width: "360px",
      height: "100%",
      float: "left",
      // overflowY: "scroll",
      overflow: "hidden",
      position: "relative",

      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
      },
    },
    paper: {
      padding: "1rem",
      //   backgroundColor: "black",
      marginRight: "5px",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      overflow: "hidden",
    },
  }));
  const classes = useStyles();
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

  const UtilityIcons = () => {
    return (
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/market">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Browse All" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/market/notifications">
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
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
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="房屋" />
            </ListItemButton>
          </ListItem>{" "}
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
  return (
    <Box className={classes.info}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" marginBottom="1rem" fontWeight="bold">
          Market
        </Typography>
        <Box width="100%" marginBottom="1rem" overflow="hidden">
          <SearchArea />
          <UtilityIcons />
          <Button
            variant="contained"
            sx={{ marginX: "1rem", marginBottom: "1rem" }}
            startIcon={<AddIcon />}
            component={Link}
            to="/market/create"
          >
            Add new listing
          </Button>
          <Divider />
        </Box>

        <Box width="100%" overflow="hidden">
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            Location Filters
          </Typography>
          <MarketFIlterLocation />
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

export default MarketSideBar;
