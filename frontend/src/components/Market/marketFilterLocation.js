import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import GoogleMaps from "../GoogleMap/GoogleMapsPlace";
// import GoogleMap from "../GoogleMap/GoogleMap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PropTypes from "prop-types";
import { marketItemFilterUpdate } from "./useMarketItemFilter";
import { useDispatch } from "react-redux";

// import { styled } from "@mui/material/styles";

function ConfirmationDialogRaw(props) {
  const {
    type = "plain",
    onClose,
    value: valueProp,
    open,
    onOK,
    // setAddressInfo,
    setSearchRadius,
    ...other
  } = props;
  const [newLocationRadius, setNewLocationRadius] = useState(5);

  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   height: "250px",
  //   backgroundColor: "#787878",
  //   marginBottom: "1rem",
  // }));

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    type === "plain" ? onOK(`距离温莎大学 ${newLocationRadius}km`) : onOK();
  };

  const handleRadiusChange = (e) => {
    setNewLocationRadius(e.target.value);
    setSearchRadius(e.target.value);
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxHeight: 650,
        },
      }}
      maxWidth="xs"
      open={open}
      onClose={handleCancel}
      {...other}
    >
      <DialogTitle>位置</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="caption">以温莎大学为中心</Typography>
        </Box>
        <GoogleMaps label="温莎大学" disabled />
        <TextField
          sx={{ marginBottom: "1rem" }}
          id="input-with-icon-textfield"
          label="半径 [km]"
          value={newLocationRadius}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationSearchingIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          onChange={handleRadiusChange}
          variant="outlined"
        />
        {/* <Item>
          <GoogleMap
            defaultZoom={11}
            center={windsor}
            circleRadius={newLocationRadius * 1000}
          />
        </Item> */}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          关闭
        </Button>
        <Button onClick={() => handleOk()}>确认</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function MarketFIlterLocation({ type = "plain", marketType }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("位置");
  const [searchRadius, setSearchRadius] = React.useState(0);
  const dispatch = useDispatch();

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleOK = (newValue) => {
    setOpen(false);
    marketItemFilterUpdate({ searchRadius, marketType }, dispatch);
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
  if (type === "plain") {
    return (
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
        <List component="div" role="group">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="ringtone-menu"
            aria-label="phone ringtone"
            onClick={handleClickListItem}
          >
            <ListItemText primary="当前搜索区域" secondary={value} />
          </ListItem>
          <ConfirmationDialogRaw
            // setAddressInfo={setAddressInfo}
            setSearchRadius={setSearchRadius}
            id="ringtone-menu"
            keepMounted
            open={open}
            onOK={handleOK}
            onClose={handleClose}
            value={value}
          />
        </List>
      </Box>
    );
  } else if (type === "button") {
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          startIcon={<LocationOnIcon />}
          onClick={handleClickListItem}
        >
          {value}
        </Button>
        <ConfirmationDialogRaw
          // setAddressInfo={setAddressInfo}
          type={type}
          setSearchRadius={setSearchRadius}
          id="ringtone-menu"
          keepMounted
          open={open}
          onOK={handleOK}
          onClose={handleClose}
          value={value}
        />
      </React.Fragment>
    );
  }
}
