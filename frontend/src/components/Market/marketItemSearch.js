import { Controller, useForm } from "react-hook-form";
import {
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  marketItemSortBySortKey,
  marketItemSortBySortKeyItem,
  marketItemSortBySortKeyRental,
  marketItemSortBySortKeyVehicle,
} from "./marketQueries";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmojiTransportation from "@mui/icons-material/EmojiTransportation";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { fetchMarketItems } from "../../redux/slice/marketSlice";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";

export const SearchArea = ({ type = "all", darkTheme }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
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

  const dispatch = useDispatch();

  const {
    control,
    reset,
    getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      searchInfo: "",
    },
  });

  const onKeyDownHandler = () => {
    const searchInfos = getValues("searchInfo");
    console.log("searchInfo:", searchInfos);

    const filter = {
      name: { contains: searchInfos },
      // description: { contains: { searchInfo } },
    };
    if (type === "all") {
      dispatch(
        fetchMarketItems({ query: marketItemSortBySortKey, filter: filter })
      );
    } else if (type === "item") {
      dispatch(fetchMarketItems({ query: marketItemSortBySortKeyItem }));
    } else if (type === "vehicle") {
      dispatch(fetchMarketItems({ query: marketItemSortBySortKeyVehicle }));
    } else if (type === "rental") {
      dispatch(fetchMarketItems({ query: marketItemSortBySortKeyRental }));
    }

    reset();
  };

  return (
    <Search
      sx={{ backgroundColor: darkTheme ? "#121212" : "rgb(243, 246, 249)" }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Controller
        name="searchInfo"
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={value}
            onChange={(e) => onChange(e)}
            onKeyDown={(e) =>
              e.key.toLowerCase() === "enter" ? onKeyDownHandler() : null
            }
          />
        )}
      />
    </Search>
  );
};

export const CategoryIcons = ({ darkTheme }) => {
  const IconList = ({ to, label, icon }) => {
    return (
      <ListItem
        disablePadding
        sx={{ color: darkTheme ? "#787878" : "#ffffff" }}
      >
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
          // overflow: "auto",
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
