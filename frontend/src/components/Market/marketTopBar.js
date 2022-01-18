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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Slide,
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
import { marketItemFilterUpdate } from "./useMarketItemFilter";
import { marketItemStyle } from "./marketItemCss";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UtilityDialog(props) {
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
      onClose={() => onClose()}
      TransitionComponent={Transition}
      open={open}
      {...other}
    >
      <DialogTitle>Utilities</DialogTitle>
      <DialogContent dividers>
        <Box
          width="100%"
          color={`${darkTheme ? "#787878" : "rgba(0, 0, 0, 0.8)"}`}
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
          <CategoryIcons darkTheme={darkTheme} />
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
      TransitionComponent={Transition}
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
        <Button onClick={handleOk}>确认</Button>
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
  darkTheme,
  // setSearchRadius,
  tagsOccurrence,
}) {
  const useStyles = marketItemStyle;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState("");
  const [clickedTags, setClickedTags] = useState([]);
  React.useEffect(() => {
    marketItemFilterUpdate({ tags: clickedTags, type: "all" }, dispatch);
  }, [dispatch, clickedTags]);
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
      {window.innerWidth >= 900 ? (
        /* ImgTopFIlter for large screen */
        <Paper elevation={3} className={classes.imgPaper1}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color={`${darkTheme ? "#787878" : "#fffff"}`}
          >
            二手商城
          </Typography>
          <Box marginTop="1rem">
            {Object.keys(tagsOccurrence)
              .slice(0, 8)
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
          </Box>
        </Paper>
      ) : (
        /* ImgTopFilter for medium screen  */
        <Paper elevation={3} className={classes.imgPaper2}>
          <Button
            endIcon={<MoreVertIcon />}
            sx={{
              fontWeight: "bold",
              color: `${darkTheme ? "#787878" : "rgba(0, 0, 0, 1)"}`,
              fontSize: "1.25rem",
              padding: 0,
            }}
            onClick={handleClickListItem}
          >
            二手商城
          </Button>
          <UtilityDialog
            id="ringtone-menu"
            keepMounted
            open={open}
            darkTheme={darkTheme}
            onClose={handleClose}
            value={value}
          />

          <Box sx={{ color: "action.active", marginTop: "0.5rem" }}>
            {Object.keys(tagsOccurrence)
              .slice(0, 8)
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
          </Box>
          <Divider sx={{ marginY: "0.5rem" }} />
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <SearchArea
              darkTheme={darkTheme}
              mode="halfWidth"
              tagsOccurrence={tagsOccurrence}
            />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              component={Link}
              to="/market/create"
            >
              发布
            </Button>
            <Button variant="outlined" onClick={handleClickListItem2}>
              分类
            </Button>
            <CategoryDialog
              id="ringtone-menu"
              keepMounted
              darkTheme={darkTheme}
              open={open2}
              onClose={handleClose2}
              value={value}
            />
            <MarketFIlterLocation
              type="button"
              // setSearchRadius={setSearchRadius}
            />
          </Stack>
        </Paper>
      )}
    </React.Fragment>
  );
}
