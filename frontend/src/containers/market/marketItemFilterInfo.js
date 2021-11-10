import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CategoryIcons, SearchArea } from "./marketItemSearch";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import FilterListIcon from "@mui/icons-material/FilterList";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import MarketFIlterLocation from "./marketFilterLocation";
import MarketForm from "../../components/Market/marketForm";
import PropTypes from "prop-types";
import { marketItemOptions } from "./marketItemOptions";
import { marketItemStyle } from "./marketItemCss";
import { marketVehicleOptions } from "./marketVehicleOptions";
import { sortOptions } from "./marketItemFilter";

function ConfirmationDialogRaw(props) {
  const {
    onClose,
    value: valueProp,
    open,
    type,
    filterList,
    handleSortKey,
    handleMin,
    handleMax,
    handleVehicleType,
    handleYear,
    handleMake,
    handleModel,
    handleCategory,
    handleCondition,
    handleReset,
    ...other
  } = props;

  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
  const { marketVehicleTypeList } = marketVehicleOptions;
  const useStyles = marketItemStyle;
  const classes = useStyles();

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
      <DialogTitle>Filters</DialogTitle>
      <DialogContent dividers>
        <Box
          flexDirection="row"
          display="flex"
          position="relative"
          sx={{ marginBottom: "1rem" }}
        >
          <Typography variant="h6" fontWeight="bold">
            Location Filters
          </Typography>
          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{ right: 0, position: "absolute" }}
          >
            Reset All
          </Button>
        </Box>
        <MarketForm
          title="Sort by"
          value={filterList.sortKey}
          options={sortOptions}
          required={false}
          onChange={(e) => handleSortKey(e)}
        />
        <Typography
          marginTop="1rem"
          variant="h6"
          marginBottom="1rem"
          fontWeight="bold"
        >
          Price Range
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            sx={{ maxWidth: "100%" }}
            label="Min Price"
            variant="outlined"
            type="number"
            helperText="eg. 1000 CAD $"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">CAD $</InputAdornment>
              ),
            }}
            value={filterList.min}
            className={classes.titleInput}
            onChange={(e) => handleMin(e)}
          />
          <TextField
            sx={{ maxWidth: "100%" }}
            label="Max Price"
            variant="outlined"
            type="number"
            helperText="eg. 25000 CAD $"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">CAD $</InputAdornment>
              ),
            }}
            value={filterList.max}
            className={classes.titleInput}
            onChange={(e) => handleMax(e)}
          />
        </Stack>
        {type === "item" ? (
          <React.Fragment>
            {" "}
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Category
            </Typography>
            <MarketForm
              title="Category"
              value={filterList.category}
              options={marketItemCategoryList}
              onChange={(e) => handleCategory(e)}
            />
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Condition
            </Typography>
            <MarketForm
              title="Condition"
              value={filterList.condition}
              options={marketItemConditionList}
              onChange={(e) => handleCondition(e)}
            />
          </React.Fragment>
        ) : null}
        {type === "vehicle" ? (
          <React.Fragment>
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Vehicle Type
            </Typography>
            <MarketForm
              title="Vehicle Type"
              value={filterList.vehicleType}
              options={marketVehicleTypeList}
              onChange={(e) => handleVehicleType(e)}
            />
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Year
            </Typography>
            <MarketForm
              title="Year"
              value={filterList.vehicleType} // Need to change the style to (min,max)
              options={marketVehicleTypeList} //
              disabled={true}
              onChange={(e) => handleYear(e)}
            />
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Make
            </Typography>
            <MarketForm
              title="Make"
              value={filterList.vehicleType} // Need to generate corresponding list
              options={marketVehicleTypeList} //
              onChange={(e) => handleMake(e)}
            />
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              Model
            </Typography>
            <MarketForm
              title="Model"
              value={filterList.vehicleType} // Need to generate corresponding list
              options={marketVehicleTypeList} //
              onChange={(e) => handleModel(e)}
            />
          </React.Fragment>
        ) : null}
        <Divider />

        <Box
          width="100%"
          // maxHeight="400px" overflow="auto"
        >
          {" "}
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            Categories
          </Typography>
          <CategoryIcons />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Close
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

export default function FilterInfo({
  type,
  form = "plain",
  filterList,
  handleSortKey,
  handleMin,
  handleMax,
  handleVehicleType,
  handleYear,
  handleMake,
  handleModel,
  handleCategory,
  handleCondition,
  handleReset,
}) {
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
  const { marketVehicleTypeList } = marketVehicleOptions;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Filter");
  if (form === "plain") {
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
            </Breadcrumbs>
          </Box>
          <Typography variant="h5" marginBottom="1rem" fontWeight="bold">
            {type.toUpperCase()}
          </Typography>
          <Box
            width="100%"
            marginBottom="1rem"
            overflow="hidden"
            paddingRight="1rem"
          >
            <SearchArea />
            <Button
              variant="contained"
              sx={{ margin: "1rem" }}
              startIcon={<AddIcon />}
              component={Link}
              to="/market/create/item"
            >
              Add new listing
            </Button>
            <Divider />
          </Box>
          <Box
            width="100%"
            maxHeight="75vh"
            paddingRight="1rem"
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,.1)",
                outline: "1px solid slategrey",
              },
            }}
          >
            <Box flexDirection="row" display="flex" position="relative">
              <Typography variant="h6" fontWeight="bold">
                Location Filters
              </Typography>
              <Button
                variant="outlined"
                onClick={handleReset}
                sx={{ right: 0, position: "absolute" }}
              >
                Reset All
              </Button>
            </Box>
            <MarketFIlterLocation />
            <MarketForm
              title="Sort by"
              value={filterList.sortKey}
              options={sortOptions}
              required={false}
              onChange={(e) => handleSortKey(e)}
            />
            <Typography
              marginTop="1rem"
              variant="h6"
              marginBottom="1rem"
              fontWeight="bold"
            >
              Price Range
            </Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                sx={{ maxWidth: "100%" }}
                label="Min Price"
                variant="outlined"
                type="number"
                helperText="eg. 1000 CAD $"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">CAD $</InputAdornment>
                  ),
                }}
                value={filterList.min}
                className={classes.titleInput}
                onChange={(e) => handleMin(e)}
              />
              <TextField
                sx={{ maxWidth: "100%" }}
                label="Max Price"
                variant="outlined"
                type="number"
                helperText="eg. 25000 CAD $"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">CAD $</InputAdornment>
                  ),
                }}
                value={filterList.max}
                className={classes.titleInput}
                onChange={(e) => handleMax(e)}
              />
            </Stack>
            {type === "item" ? (
              <React.Fragment>
                <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
                  Category
                </Typography>
                <MarketForm
                  title="Category"
                  value={filterList.category}
                  options={marketItemCategoryList}
                  onChange={(e) => handleCategory(e)}
                />
                <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
                  Condition
                </Typography>
                <MarketForm
                  title="Condition"
                  value={filterList.condition}
                  options={marketItemConditionList}
                  onChange={(e) => handleCondition(e)}
                />
              </React.Fragment>
            ) : null}
            {type === "vehicle" ? (
              <React.Fragment>
                <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
                  Vehicle Type
                </Typography>
                <MarketForm
                  title="Vehicle Type"
                  value={filterList.vehicleType}
                  options={marketVehicleTypeList}
                  onChange={(e) => handleVehicleType(e)}
                />
                <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
                  Year
                </Typography>
                <MarketForm
                  title="Year"
                  value={filterList.vehicleType} // Need to change the style to (min,max)
                  options={marketVehicleTypeList} //
                  disabled={true}
                  onChange={(e) => handleYear(e)}
                />
                <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
                  Make
                </Typography>
                <MarketForm
                  title="Make"
                  disabled={true}
                  value={filterList.vehicleType} // Need to generate corresponding list
                  options={marketVehicleTypeList} //
                  onChange={(e) => handleMake(e)}
                />
                <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
                  Model
                </Typography>
                <MarketForm
                  title="Model"
                  disabled={true}
                  value={filterList.vehicleType} // Need to generate corresponding list
                  options={marketVehicleTypeList} //
                  onChange={(e) => handleModel(e)}
                />
              </React.Fragment>
            ) : null}
            <Divider />

            <Box
              width="100%"
              // maxHeight="400px" overflow="auto"
            >
              <Typography variant="h6" marginTop="1rem" fontWeight="bold">
                Categories
              </Typography>
              <CategoryIcons />
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  } else if (form === "button") {
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
        <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          onClick={handleClickListItem}
        >
          {value}
        </Button>
        <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          type={type}
          filterList={filterList}
          handleSortKey={handleSortKey}
          handleMin={handleMin}
          handleMax={handleMax}
          handleCategory={handleCategory}
          handleCondition={handleCondition}
          handleReset={handleReset}
        />
      </React.Fragment>
    );
  }
}
