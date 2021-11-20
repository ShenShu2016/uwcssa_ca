import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CategoryIcons, SearchArea } from "./marketItemSearch";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import MarketFIlterLocation from "./marketFilterLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";
import WorkIcon from "@mui/icons-material/Work";
import { marketItemStyle } from "./marketItemCss";

function UtilityDialog(props) {
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
      <DialogTitle>Utilities</DialogTitle>
      <DialogContent dividers>
        <Box
          width="100%"
          // maxHeight="400px" overflow="auto"
        >
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
          <Divider />
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

UtilityDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

function CategoryDialog(props) {
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
      <DialogTitle>Categories</DialogTitle>
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
          Close
        </Button>
        <Button onClick={handleOk}>Okay</Button>
      </DialogActions>
    </Dialog>
  );
}

CategoryDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function MarketTopBar({
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
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState("");

  //   let tags = [];
  //   trueMarketItems
  //     .filter((a) => a.tags !== null)
  //     .forEach((item) => {
  //       item.tags.map((subitem) => tags.push(subitem));
  //     });
  //   const countTags = (arr) =>
  //     arr.reduce((obj, e) => {
  //       obj[e] = (obj[e] || 0) + 1;
  //       return obj;
  //     }, {});
  //   const occurrence = countTags(tags);
  //   const sortedOccurrence = Object.keys(occurrence).sort(
  //     (a, b) => occurrence[b] - occurrence[a]
  //   );

  const handleClickListItem = () => {
    setOpen(true);
  };
  const handleClickListItem2 = () => {
    setOpen2(true);
  };
  const handleClose2 = (newValue) => {
    setOpen2(false);

    if (newValue) {
      setValue(newValue);
    }
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
          辐射4
        </Typography>
      </Paper>
      {/* ImgTopFilter for medium screen  */}
      <Paper elevation={3} className={classes.imgPaper2}>
        <Button
          endIcon={<MoreVertIcon />}
          sx={{
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 1)",
            fontSize: "1.25rem",
            padding: 0,
          }}
          onClick={handleClickListItem}
        >
          Market
        </Button>
        <UtilityDialog
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
        <SearchArea />
        <Divider sx={{ marginY: "1rem" }} />
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <Button startIcon={<AddIcon />} component={Link} to="/market/create">
            Add
          </Button>
          <Button onClick={handleClickListItem2}>Categories</Button>
          <CategoryDialog
            id="ringtone-menu"
            keepMounted
            open={open2}
            onClose={handleClose2}
            value={value}
          />
          <MarketFIlterLocation type="button" />

          {/* <FilterInfo
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
          /> */}
        </Stack>
      </Paper>
    </React.Fragment>
  );
}
