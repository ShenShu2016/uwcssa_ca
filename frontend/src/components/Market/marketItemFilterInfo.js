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
import EmojiTransportation from "@mui/icons-material/EmojiTransportation";
import FilterListIcon from "@mui/icons-material/FilterList";
import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";
import MarketFIlterLocation from "./marketFilterLocation";
import MarketForm from "../../components/Market/marketForm";
import PetsIcon from "@mui/icons-material/Pets";
import PropTypes from "prop-types";
import { marketItemOptions } from "./marketItemOptions";
import { marketItemStyle } from "./marketItemCss";
import { marketRentalOptions } from "./marketRentalOptions";
import { marketVehicleOptions } from "./marketVehicleOptions";
import { sortOptions } from "./marketItemFilter";

const FilterContent = (props) => {
  const {
    darkTheme,
    type,
    filterList,
    handleSortKey,
    handleMin,
    handleMax,
    handleVehicleType,
    handleMinYear,
    handleMaxYear,
    handleMake,
    handleModel,
    handleCategory,
    handleCondition,
    handleMarketRentalSaleRent,
    handlePropertyType,
    handleAirConditioningType,
    handleHeatingType,
    handleReset,
  } = props;

  const { marketItemConditionList, marketItemCategoryList } = marketItemOptions;
  const { marketVehicleTypeList } = marketVehicleOptions;
  const { marketRentalSaleRent, propertyType, airConditionType, heatingType } =
    marketRentalOptions;

  const useStyles = marketItemStyle;
  const classes = useStyles();

  return (
    <Box sx={{ color: darkTheme ? "#787878" : "rgb(0,0,0)" }}>
      <Box
        flexDirection="row"
        display="flex"
        position="relative"
        className={classes.specialBox}
      >
        <Typography variant="h6" fontWeight="bold" className={classes.special}>
          区域
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          className={classes.specialNot}
        >
          过滤器
        </Typography>

        <Button
          variant="outlined"
          onClick={handleReset}
          sx={{ right: 0, position: "absolute" }}
        >
          重置
        </Button>
      </Box>
      <Box className={classes.special}>
        <MarketFIlterLocation />
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
        价格
      </Typography>
      <Stack direction="row" spacing={2} mb="0.5rem">
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
          <Box mb="1rem">
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              类别
            </Typography>
            <MarketForm
              title="Category"
              value={filterList.category}
              options={marketItemCategoryList}
              onChange={(e) => handleCategory(e)}
            />
          </Box>
          <Box mb="1rem">
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              使用程度
            </Typography>
            <MarketForm
              title="Condition"
              value={filterList.condition}
              options={marketItemConditionList}
              onChange={(e) => handleCondition(e)}
            />
          </Box>
        </React.Fragment>
      ) : null}
      {type === "vehicle" ? (
        <React.Fragment>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            车型
          </Typography>
          <MarketForm
            title="Vehicle Type"
            value={filterList.vehicleType}
            options={marketVehicleTypeList}
            onChange={(e) => handleVehicleType(e)}
          />
          <Typography
            marginTop="1rem"
            variant="h6"
            marginBottom="1rem"
            fontWeight="bold"
          >
            年份
          </Typography>
          <Stack direction="row" spacing={2} mb="1rem">
            <TextField
              sx={{ maxWidth: "100%" }}
              label="Min Year"
              variant="outlined"
              type="number"
              helperText="eg. 2012"
              value={filterList.minYear}
              className={classes.titleInput}
              onChange={(e) => handleMinYear(e)}
            />
            <TextField
              sx={{ maxWidth: "100%" }}
              label="Max Year"
              variant="outlined"
              type="number"
              helperText="eg. 2021"
              value={filterList.maxYear}
              className={classes.titleInput}
              onChange={(e) => handleMaxYear(e)}
            />
          </Stack>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            品牌
          </Typography>
          <Box mb="1rem">
            <MarketForm
              title="Make"
              disabled={true}
              value={filterList.vehicleType} // Need to generate corresponding list
              options={marketVehicleTypeList} //
              onChange={(e) => handleMake(e)}
            />
          </Box>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            型号
          </Typography>
          <Box mb="1rem">
            <MarketForm
              title="Model"
              disabled={true}
              value={filterList.vehicleType} // Need to generate corresponding list
              options={marketVehicleTypeList} //
              onChange={(e) => handleModel(e)}
            />
          </Box>
        </React.Fragment>
      ) : null}
      {type === "rental" ? (
        <React.Fragment>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            出租/出售
          </Typography>
          <Box mb="1rem">
            <MarketForm
              title="Home for Rent or Sale"
              value={filterList.marketRentalSaleRent}
              options={marketRentalSaleRent}
              onChange={(e) => handleMarketRentalSaleRent(e)}
            />
          </Box>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            房源类别
          </Typography>
          <Box mb="1rem">
            {" "}
            <MarketForm
              title="Property Type"
              value={filterList.propertyType}
              options={propertyType}
              onChange={(e) => handlePropertyType(e)}
            />
          </Box>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            空调
          </Typography>
          <Box mb="1rem">
            <MarketForm
              title="AC Type"
              value={filterList.airConditioningType}
              options={airConditionType}
              onChange={(e) => handleAirConditioningType(e)}
            />
          </Box>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            供暖
          </Typography>
          <Box mb="1rem">
            <MarketForm
              title="Heating Type"
              value={filterList.heatingType}
              options={heatingType}
              onChange={(e) => handleHeatingType(e)}
            />
          </Box>
        </React.Fragment>
      ) : null}
      <Box width="100%" marginTop="1rem">
        <Typography variant="h6" fontWeight="bold">
          其他分类
        </Typography>
        <CategoryIcons darkTheme={darkTheme} />
      </Box>
    </Box>
  );
};

function ConfirmationDialogRaw(props) {
  const {
    darkTheme,
    onClose,
    value: valueProp,
    open,
    type,
    filterList,
    handleSortKey,
    handleMin,
    handleMax,
    handleVehicleType,
    handleMinYear,
    handleMaxYear,
    handleMake,
    handleModel,
    handleCategory,
    handleCondition,
    handleMarketRentalSaleRent,
    handlePropertyType,
    handleAirConditioningType,
    handleHeatingType,
    handleReset,
    ...other
  } = props;

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
      onClose={() => onClose()}
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>分类</DialogTitle>
      <DialogContent dividers>
        <FilterContent
          darkTheme={darkTheme}
          type={type}
          filterList={filterList}
          handleMinYear={handleMinYear}
          handleMaxYear={handleMaxYear}
          handleSortKey={handleSortKey}
          handleMin={handleMin}
          handleMax={handleMax}
          handleCategory={handleCategory}
          handleVehicleType={handleVehicleType}
          handleMake={handleMake}
          handleModel={handleModel}
          handleCondition={handleCondition}
          handleMarketRentalSaleRent={handleMarketRentalSaleRent}
          handlePropertyType={handlePropertyType}
          handleAirConditioningType={handleAirConditioningType}
          handleHeatingType={handleHeatingType}
          handleReset={handleReset}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          关闭
        </Button>
        <Button onClick={handleOk}>确认</Button>
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
  darkTheme,
  type,
  form = "plain",
  filterList,
  handleSortKey,
  handleMin,
  handleMax,
  handleVehicleType,
  handleMinYear,
  handleMaxYear,
  handleMake,
  handleModel,
  handleCategory,
  handleCondition,
  handleReset,
  handleMarketRentalSaleRent,
  handlePropertyType,
  handleAirConditioningType,
  handleHeatingType,
}) {
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Filter");

  if (form === "plain") {
    return (
      <Box className={classes.info}>
        <Paper className={classes.paper} elevation={3}>
          <Box>
            <Breadcrumbs
              aria-label="breadcrumb"
              color={`${darkTheme ? "#787878" : "#fffff"}`}
            >
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  startIcon={<HomeIcon />}
                  color="inherit"
                  component={Link}
                  to="/market"
                >
                  商城
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
                    二手商品
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
                    汽车
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
                    租房
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
                    宠物
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
                    拼车
                  </Button>
                </span>
              ) : null}
            </Breadcrumbs>
          </Box>
          <Typography
            variant="h5"
            marginBottom="1rem"
            fontWeight="bold"
            color={`${darkTheme ? "#787878" : "#fffff"}`}
          >
            {type.toUpperCase()}
          </Typography>
          <Box
            width="100%"
            marginBottom="1rem"
            overflow="hidden"
            paddingRight="1rem"
          >
            <SearchArea darkTheme={darkTheme} />
            <Button
              variant="outlined"
              sx={{ margin: "1rem" }}
              startIcon={<AddIcon />}
              component={Link}
              to={`/market/create/${type}`}
            >
              新增商品
            </Button>
            <Divider />
          </Box>
          <Box
            width="100%"
            maxHeight="75vh"
            paddingRight="1rem"
            sx={{
              overflowY: "auto",
              color: "#c1c1c1",

              transition: "color 0.3s",
              "&:hover": {
                color: "#a9a9a9",
              },
              "&::-webkit-scrollbar": {
                width: "14px",
              },
              "&::-webkit-scrollbar-button": {
                width: 0,
                height: 0,
                display: "none",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundClip: "content-box",
                border: "4px solid transparent",
                borderRadius: "7px",
                boxShadow: "inset 0 0 0 10px",
              },
              "&::-webkit-scrollbar-corner": {
                backgroundColor: "transparent",
              },
            }}
          >
            <FilterContent
              darkTheme={darkTheme}
              type={type}
              filterList={filterList}
              handleMinYear={handleMinYear}
              handleMaxYear={handleMaxYear}
              handleSortKey={handleSortKey}
              handleMin={handleMin}
              handleMax={handleMax}
              handleCategory={handleCategory}
              handleVehicleType={handleVehicleType}
              handleMake={handleMake}
              handleModel={handleModel}
              handleCondition={handleCondition}
              handleMarketRentalSaleRent={handleMarketRentalSaleRent}
              handlePropertyType={handlePropertyType}
              handleAirConditioningType={handleAirConditioningType}
              handleHeatingType={handleHeatingType}
              handleReset={handleReset}
            />
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
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={handleClickListItem}
        >
          {value}
        </Button>
        <ConfirmationDialogRaw
          darkTheme={darkTheme}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          type={type}
          filterList={filterList}
          handleMinYear={handleMinYear}
          handleMaxYear={handleMaxYear}
          handleSortKey={handleSortKey}
          handleMin={handleMin}
          handleMax={handleMax}
          handleCategory={handleCategory}
          handleVehicleType={handleVehicleType}
          handleMake={handleMake}
          handleModel={handleModel}
          handleCondition={handleCondition}
          handleMarketRentalSaleRent={handleMarketRentalSaleRent}
          handlePropertyType={handlePropertyType}
          handleAirConditioningType={handleAirConditioningType}
          handleHeatingType={handleHeatingType}
          handleReset={handleReset}
        />
      </React.Fragment>
    );
  }
}
