import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { CategoryIcons, SearchArea } from "./marketItemSearch";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import MarketFIlterLocation from "./marketFilterLocation";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import { makeStyles } from "@mui/styles";

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
