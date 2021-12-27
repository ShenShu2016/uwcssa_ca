import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
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

function ConfirmationDialogRaw(props) {
  const { onClose, open, control, onKeyDownHandler, darkTheme, ...other } =
    props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 650 } }}
      maxWidth="xs"
      open={open}
      onClose={onClose}
      {...other}
    >
      <DialogTitle>位置</DialogTitle>
      <DialogContent dividers>
        {/* <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="caption">根据地址，邮编搜索</Typography>
        </Box> */}
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
                autoFocus
                value={value}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => {
                  onKeyDownHandler(e);
                }}
              />
            )}
          />
        </Search>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
}

export const SearchArea = ({ type = "all", darkTheme, mode = "fullWidth" }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { control, reset, getValues } = useForm({
    defaultValues: {
      searchInfo: "",
    },
  });

  const onKeyDownHandler = (e) => {
    if (e.key.toLowerCase() === "enter") {
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
    }
  };

  return (
    <>
      {mode === "fullWidth" ? (
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
                onKeyDown={(e) => onKeyDownHandler(e)}
              />
            )}
          />
        </Search>
      ) : (
        <>
          <IconButton onClick={() => setOpen(true)}>
            <SearchIcon />
          </IconButton>
          <ConfirmationDialogRaw
            control={control}
            darkTheme={darkTheme}
            id="ringtone-menu"
            keepMounted
            onKeyDownHandler={onKeyDownHandler}
            open={open}
            onClose={() => setOpen(false)}
          />
        </>
      )}
    </>
  );
};

export const CategoryIcons = ({ darkTheme }) => {
  const IconList = ({ to, label, icon }) => {
    return (
      <ListItem
        disablePadding
        sx={{ color: darkTheme ? "#787878" : "rgb(0,0,0)" }}
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
