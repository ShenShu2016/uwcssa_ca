import {
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmojiTransportation from "@mui/icons-material/EmojiTransportation";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

export const SearchArea = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgb(243, 246, 249)",
    marginRight: theme.spacing(2),
    width: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: theme.spacing(3),
    //   width: "auto",
    // },
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

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        disabled
      />
    </Search>
  );
};

export const CategoryIcons = () => {
  const IconList = ({ to, label, icon }) => {
    return (
      <ListItem disablePadding>
        <ListItemButton component={Link} to={to}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <nav aria-label="main mailbox folders">
      <List
        sx={{
          position: "relative",
          color: "black",
        }}
      >
        <IconList
          to="/market/item"
          label="二手商品"
          icon={<AddShoppingCartIcon />}
        />
        <IconList to="/market/vehicle" label="汽車" icon={<DriveEtaIcon />} />
        <IconList to="/market/rental" label="房屋" icon={<HouseIcon />} />
        <IconList to="/market/pet" label="宠物" icon={<PetsIcon />} />
        <IconList
          to="/market/carpool"
          label="拼车"
          icon={<EmojiTransportation />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
        <IconList
          to="/market/vehicle"
          label="凑数"
          icon={<AccessibilityNewIcon />}
        />
      </List>
    </nav>
  );
};
