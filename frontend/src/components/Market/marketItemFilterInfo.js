import {
  Box,
  Button,
  Chip,
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
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Controller } from "react-hook-form";
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
import { filterClear } from "../../redux/slice/marketSlice";
import { marketItemOptions } from "./marketItemOptions";
import { marketItemStyle } from "./marketItemCss";
import { marketRentalOptions } from "./marketRentalOptions";
import { marketVehicleOptions } from "./marketVehicleOptions";
import { sortOptions } from "./marketItemFilter";

const FilterContent = (props) => {
  const { darkTheme, type, control, handleSearch, handleReset } = props;
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
        <Typography variant="h6" fontWeight="bold">
          过滤器
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ position: "absolute", right: 0 }}
        >
          <Box className={classes.special}>
            <Button variant="outlined" onClick={handleSearch}>
              搜索
            </Button>
          </Box>

          <Button variant="outlined" onClick={handleReset}>
            重置
          </Button>
        </Stack>
      </Box>
      <Box className={classes.special}>
        <MarketFIlterLocation marketType={type} />
      </Box>
      <Controller
        name="sortKey"
        control={control}
        render={({ field: { onChange, value } }) => (
          <MarketForm
            title="Sort by"
            value={value}
            options={sortOptions}
            onChange={(e) => onChange(e)}
          />
        )}
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
        <Controller
          name="min"
          control={control}
          render={({ field: { onChange, value } }) => (
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
              value={value}
              className={classes.titleInput}
              onChange={(e) => onChange(e)}
            />
          )}
        />
        <Controller
          name="max"
          control={control}
          render={({ field: { onChange, value } }) => (
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
              value={value}
              className={classes.titleInput}
              onChange={(e) => onChange(e)}
            />
          )}
        />
      </Stack>
      {type === "Item" ? (
        <React.Fragment>
          <Box mb="1rem">
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              类别
            </Typography>
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Category"
                  value={typeof value === "object" ? value : ""}
                  options={marketItemCategoryList}
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>
          <Box mb="1rem">
            <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
              使用程度
            </Typography>
            <Controller
              name="condition"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Condition"
                  value={typeof value === "object" ? value : ""}
                  options={marketItemConditionList}
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>
        </React.Fragment>
      ) : null}
      {type === "Vehicle" ? (
        <React.Fragment>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            车型
          </Typography>
          <Controller
            name="vehicleType"
            control={control}
            render={({ field: { onChange, value } }) => (
              <MarketForm
                title="Vehicle Type"
                value={typeof value === "object" ? value : ""}
                options={marketVehicleTypeList}
                onChange={(e) => onChange(e)}
                multiple
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              />
            )}
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
            <Controller
              name="minYear"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ maxWidth: "100%" }}
                  label="Min Year"
                  variant="outlined"
                  type="number"
                  helperText="eg. 2012"
                  value={value}
                  className={classes.titleInput}
                  onChange={(e) => onChange(e)}
                />
              )}
            />
            <Controller
              name="maxYear"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ maxWidth: "100%" }}
                  label="Max Year"
                  variant="outlined"
                  type="number"
                  helperText="eg. 2021"
                  value={value}
                  className={classes.titleInput}
                  onChange={(e) => onChange(e)}
                />
              )}
            />
          </Stack>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            品牌
          </Typography>
          <Box mb="1rem">
            <Controller
              name="make"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Make"
                  disabled={true}
                  value={typeof value === "object" ? value : ""} // Need to generate corresponding list
                  options={marketVehicleTypeList} //
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            型号
          </Typography>
          <Box mb="1rem">
            <Controller
              name="model"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Model"
                  disabled={true}
                  value={typeof value === "object" ? value : ""} // Need to generate corresponding list
                  options={marketVehicleTypeList} //
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>
        </React.Fragment>
      ) : null}
      {type === "Rental" ? (
        <React.Fragment>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            出租/出售
          </Typography>
          <Box mb="1rem">
            <Controller
              name="marketRentalSaleRent"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Home for Rent or Sale"
                  value={typeof value === "object" ? value : ""}
                  options={marketRentalSaleRent}
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>
          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            房源类别
          </Typography>
          <Box mb="1rem">
            <Controller
              name="propertyType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Property Type"
                  value={typeof value === "object" ? value : ""}
                  options={propertyType}
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            空调
          </Typography>
          <Box mb="1rem">
            <Controller
              name="airConditioningType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="AC Type"
                  value={typeof value === "object" ? value : ""}
                  options={airConditionType}
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
            />
          </Box>

          <Typography variant="h6" marginBottom="1rem" fontWeight="bold">
            供暖
          </Typography>
          <Box mb="1rem">
            <Controller
              name="heatingType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MarketForm
                  title="Heating Type"
                  value={typeof value === "object" ? value : ""}
                  options={heatingType}
                  onChange={(e) => onChange(e)}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                />
              )}
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
    control,
    handleSearch,
    handleReset,
    ...other
  } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    handleSearch();
    onClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 600 } }}
      maxWidth="xs"
      onClose={() => onClose()}
      open={open}
      {...other}
    >
      <DialogTitle>分类</DialogTitle>
      <DialogContent dividers>
        <FilterContent
          darkTheme={darkTheme}
          type={type}
          control={control}
          handleSearch={handleSearch}
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
  control,
  type,
  form = "plain",
  handleSearch,
  handleReset,
}) {
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => state.general);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Filter");

  const filterReset = () => {
    dispatch(filterClear());
  };

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
                  onClick={filterReset}
                >
                  商城
                </Button>
              </span>
              {type === "Item" ? (
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    startIcon={<AddShoppingCartIcon />}
                    color="inherit"
                    component={Link}
                    to="/market/item"
                    onClick={filterReset}
                  >
                    二手商品
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
                    onClick={filterReset}
                  >
                    汽车
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
                    onClick={filterReset}
                  >
                    租房
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
                    onClick={filterReset}
                  >
                    宠物
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
                    onClick={filterReset}
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
              to={`/market/create/${type.toLowerCase()}`}
              onClick={filterReset}
            >
              新增商品
            </Button>
            <Divider />
          </Box>
          <Box
            width="100%"
            maxHeight="70%"
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
              control={control}
              handleSearch={handleSearch}
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
          control={control}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          type={type}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      </React.Fragment>
    );
  }
}
