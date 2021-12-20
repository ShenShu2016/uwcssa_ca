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
import MarketFIlterLocation from "./marketFilterLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PetsIcon from "@mui/icons-material/Pets";
import PropTypes from "prop-types";
import { marketItemStyle } from "./marketItemCss";

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;

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
      {...other}
    >
      <DialogTitle>选择种类</DialogTitle>
      <DialogContent dividers>
        <Box
          width="100%"
          // maxHeight="400px" overflow="auto"
        >
          <CategoryIcons />
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
  type,
  trueMarketItems,
  handleClick,
  filterList,
  handleSortKey,
  handleMin,
  handleMax,
  handleCategory,
  handleCondition,
  handleVehicleType,
  handleMinYear,
  handleMaxYear,
  handleMake,
  handleModel,
  handleMarketRentalSaleRent,
  handlePropertyType,
  handleAirConditioningType,
  handleHeatingType,
  handleReset,
}) {
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Filter");

  let tags = [];
  // console.log(trueMarketItems);

  trueMarketItems
    .filter((a) => a.tags !== null)
    .forEach((item) => {
      item.tags.map((subitem) => tags.push(subitem));
    });

  const countTags = (arr) =>
    arr.reduce((obj, e) => {
      obj[e] = (obj[e] || 0) + 1;
      return obj;
    }, {});

  const occurrence = countTags(tags);

  const sortedOccurrence = Object.keys(occurrence).sort(
    (a, b) => occurrence[b] - occurrence[a]
  );

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <React.Fragment>
      {/* ImgTopFIlter for large screen */}
      <Paper elevation={3} className={classes.imgPaper1}>
        <Typography variant="h6" fontWeight="bold">
          Shop by trend
        </Typography>
        <Stack
          spacing={1}
          direction="row"
          sx={{ color: "action.active", marginTop: "0.5rem" }}
        >
          {sortedOccurrence.slice(0, 5).map((tag, tagIdx) => {
            return (
              <Chip
                key={tagIdx}
                avatar={<Avatar>{occurrence[tag]}</Avatar>}
                label={tag}
                onClick={() => {
                  handleClick(tag);
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
              >
                Market
              </Button>
            </span>
            {type === "item" ? (
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
            ) : null}
            {type === "vehicle" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<DriveEtaIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/vehicle"
                >
                  Vehicle
                </Button>
              </span>
            ) : null}
            {type === "rental" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<HouseIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/rental"
                >
                  Rental
                </Button>
              </span>
            ) : null}
            {type === "pet" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<PetsIcon />}
                  color="inherit"
                  component={Link}
                  to="/market/pet"
                >
                  Pet
                </Button>
              </span>
            ) : null}
            {type === "carpool" ? (
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<EmojiTransportation />}
                  color="inherit"
                  component={Link}
                  to="/market/carpool"
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
            color: "rgba(0, 0, 0, 0.54)",
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
          {sortedOccurrence.slice(0, 5).map((tag, tagIdx) => {
            return (
              <Grid item key={tagIdx}>
                <Chip
                  avatar={<Avatar>{occurrence[tag]}</Avatar>}
                  label={tag}
                  onClick={() => {
                    handleClick(tag);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        <SearchArea />
        <Divider sx={{ marginY: "1rem" }} />
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <Button
            startIcon={<AddIcon />}
            component={Link}
            to={`/market/create/${type}`}
          >
            Add
          </Button>
          <MarketFIlterLocation type="button" />
          <FilterInfo
            form="button"
            type={type}
            filterList={filterList}
            handleSortKey={handleSortKey}
            handleMin={handleMin}
            handleMax={handleMax}
            handleCategory={handleCategory}
            handleCondition={handleCondition}
            handleReset={handleReset}
            handleMarketRentalSaleRent={handleMarketRentalSaleRent}
            handlePropertyType={handlePropertyType}
            handleAirConditioningType={handleAirConditioningType}
            handleHeatingType={handleHeatingType}
            handleVehicleType={handleVehicleType}
            handleMinYear={handleMinYear}
            handleMaxYear={handleMaxYear}
            handleMake={handleMake}
            handleModel={handleModel}
          />
        </Stack>
      </Paper>
    </React.Fragment>
  );
}
