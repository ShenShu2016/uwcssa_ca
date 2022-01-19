import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CategoryIcons, SearchArea } from "./marketItemSearch";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import EmojiTransportation from "@mui/icons-material/EmojiTransportation";
import FilterInfo from "./marketItemFilterInfo";
import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
// import MarketFIlterLocation from "./marketFilterLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PetsIcon from "@mui/icons-material/Pets";
import PropTypes from "prop-types";
import { filterClear } from "../../redux/slice/marketSlice";
import { marketItemFilterUpdate } from "./useMarketItemFilter";
import { marketItemStyle } from "./marketItemCss";
import { useDispatch } from "react-redux";

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, darkTheme, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 600 } }}
      maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      onClose={() => onClose()}
      {...other}
    >
      <DialogTitle>选择种类</DialogTitle>
      <DialogContent dividers>
        <Box width="100%">
          <CategoryIcons darkTheme={darkTheme} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          关闭
        </Button>
        <Button onClick={handleOk}>Okay</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function MarketImgTopFilter({
  darkTheme,
  control,
  type,
  tagsOccurrence,
  handleSearch,
  filterList,
  handleReset,
}) {
  const useStyles = marketItemStyle;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Filter");
  const [clickedTags, setClickedTags] = useState([]);
  React.useEffect(() => {
    marketItemFilterUpdate({ tags: clickedTags, type: "all" }, dispatch);
  }, [dispatch, clickedTags]);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  const handleFilter = () => {
    dispatch(filterClear());
  };
  return (
    <React.Fragment>
      {/* ImgTopFIlter for large screen */}
      <Paper elevation={3} className={classes.imgPaper1}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={`${darkTheme ? "#787878" : "#fffff"}`}
        >
          Shop by trend
        </Typography>
        {/* Not Finished Yet */}
        <Stack
          spacing={1}
          direction="row"
          sx={{ color: "action.active", marginTop: "0.5rem" }}
        >
          {Object.keys(tagsOccurrence)
            .slice(0, 5)
            .map((tag, tagIdx) => {
              return (
                <Chip
                  sx={{ margin: "0.25rem" }}
                  key={tagIdx}
                  avatar={<Avatar>{tagsOccurrence[tag]}</Avatar>}
                  label={tag}
                  color={clickedTags.includes(tag) ? "primary" : "default"}
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
        </Stack>
      </Paper>
      {/* ImgTopFilter for medium screen  */}
      <Paper elevation={3} className={classes.imgPaper2}>
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <span style={{ cursor: "not-allowed" }}>
              <Button
                startIcon={<HomeIcon />}
                color="inherit"
                component={Link}
                to="/market"
                onClick={handleFilter}
              >
                Market
              </Button>
            </span>
            {type === "Item" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<AddShoppingCartIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/item"
                  onClick={handleFilter}
                >
                  Item
                </Button>
              </span>
            ) : null}
            {type === "Vehicle" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<DriveEtaIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/vehicle"
                  onClick={handleFilter}
                >
                  Vehicle
                </Button>
              </span>
            ) : null}
            {type === "Rental" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<HouseIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/rental"
                  onClick={handleFilter}
                >
                  Rental
                </Button>
              </span>
            ) : null}
            {type === "Pet" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<PetsIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/pet"
                  onClick={handleFilter}
                >
                  Pet
                </Button>
              </span>
            ) : null}
            {type === "Carpool" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<EmojiTransportation />}
                  color="inherit"
                  component={Link}
                  to="/market/carpool"
                  onClick={handleFilter}
                >
                  Carpool
                </Button>
              </span>
            ) : null}
          </Breadcrumbs>
        </Box>
        <Button
          endIcon={<MoreVertIcon />}
          sx={{
            fontWeight: "bold",
            color: `${darkTheme ? "#787878" : "rgba(0, 0, 0, 0.54)"}`,
            fontSize: "1.25rem",
            marginLeft: "5px",
            marginBottom: "0.5rem",
            padding: 0,
          }}
          onClick={handleClickListItem}
        >
          {type}
        </Button>
        <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          darkTheme={darkTheme}
          open={open}
          onClose={handleClose}
          value={value}
        />
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            color: "action.active",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(tagsOccurrence)
            .slice(0, 5)
            .map((tag, tagIdx) => {
              return (
                <Chip
                  sx={{ margin: "0.25rem" }}
                  key={tagIdx}
                  avatar={<Avatar>{tagsOccurrence[tag]}</Avatar>}
                  label={tag}
                  color={clickedTags.includes(tag) ? "primary" : "default"}
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
        </Grid>

        <Divider sx={{ marginY: "1rem" }} />
        <Stack spacing={0.5} direction="row" justifyContent="flex-end">
          <SearchArea darkTheme={darkTheme} mode="button" />
          <Button
            startIcon={<AddIcon />}
            component={Link}
            variant="outlined"
            to={`/market/create/${type.toLowerCase()}`}
          >
            Add
          </Button>
          {/* <MarketFIlterLocation type="button" marketType={type} /> */}
          <FilterInfo
            darkTheme={darkTheme}
            control={control}
            form="button"
            type={type}
            handleSearch={handleSearch}
            filterList={filterList}
            handleReset={handleReset}
          />
        </Stack>
      </Paper>
    </React.Fragment>
  );
}
