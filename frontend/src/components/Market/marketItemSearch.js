import {
  Avatar,
  Box,
  Button,
  Chip,
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
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmojiTransportation from "@mui/icons-material/EmojiTransportation";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { filterClear } from "../../redux/slice/marketSlice";
import { marketItemFilterUpdate } from "./useMarketItemFilter";
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
  const {
    onClose,
    open,
    control,
    onKeyDownHandler,
    darkTheme,
    sortedOccurrence,
    occurrence,
    ...other
  } = props;
  const [clickedTags, setClickedTags] = React.useState([]);

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
      <DialogTitle>搜索</DialogTitle>
      <DialogContent dividers>
        {/* <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="caption">根据地址，邮编搜索</Typography>
        </Box> */}
        <Search
          style={{
            backgroundColor: darkTheme ? "#121212" : "rgb(243, 246, 249)",
          }}
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
        <Box sx={{ color: "action.active", marginTop: "0.5rem" }}>
          <Typography marginBottom="0.5rem" fontSize="14px" fontWeight="600">
            热度趋势
          </Typography>

          {sortedOccurrence &&
            sortedOccurrence.slice(0, 6).map((tag, tagIdx) => {
              return (
                <Chip
                  key={tagIdx}
                  avatar={<Avatar>{occurrence[tag]}</Avatar>}
                  label={tag}
                  sx={{ margin: "0.2rem" }}
                  color="default"
                  onClick={() => {
                    if (clickedTags.includes(tag)) {
                      setClickedTags((prev) => prev.filter((t) => t !== tag));
                    } else {
                      setClickedTags((prev) => prev.concat(tag));
                    }
                  }}
                />
              );
            })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
}

export const SearchArea = ({
  type = "all",
  darkTheme,
  mode = "fullWidth",
  occurrence,
  sortedOccurrence,
}) => {
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
      marketItemFilterUpdate({ name: searchInfos }, dispatch);
      reset();
    }
  };

  return (
    <>
      {mode === "fullWidth" ? (
        <Search
          sx={{
            backgroundColor: darkTheme
              ? "rgba(247, 247, 247,0.85)"
              : "rgb(243, 246, 249)",
          }}
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
            sortedOccurrence={sortedOccurrence}
            occurrence={occurrence}
            open={open}
            onClose={() => setOpen(false)}
          />
        </>
      )}
    </>
  );
};

export const CategoryIcons = ({ darkTheme }) => {
  const dispatch = useDispatch();
  const IconList = ({ to, label, icon }) => {
    return (
      <ListItem
        disablePadding
        sx={{ color: darkTheme ? "#787878" : "rgb(0,0,0)" }}
      >
        <ListItemButton
          component={Link}
          to={to}
          onClick={() => {
            dispatch(filterClear());
          }}
        >
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
          to="/market"
          label="敬请期待"
          icon={<AccessibilityNewIcon />}
        />
      </List>
    </nav>
  );
};
