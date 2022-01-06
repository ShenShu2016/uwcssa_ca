import { Box, Typography } from "@mui/material";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const drawerBleeding = 56;

const useStyle = makeStyles((theme) => ({
  puller: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: 30,
      height: 6,
      backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
      borderRadius: 3,
      position: "absolute",
      top: 8,
      left: "calc(50% - 15px)",
    },
  },
  styledBox: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
    },
  },
}));

export default function SwipeableDrawerInfo({
  children,
  title,
  position,
  open,
  setOpen,
  setClose,
}) {
  const classes = useStyle();
  return (
    <SwipeableDrawer
      anchor={position}
      open={open}
      onClose={setClose}
      onOpen={setOpen}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          height: `calc(80% - ${drawerBleeding}px)`,
          overflow: "visible",
        },
      }}
    >
      <Box
        className={classes.styledBox}
        sx={{
          position: "absolute",
          top: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          right: 0,
          left: 0,
        }}
      >
        <Box className={classes.puller} />
        <Typography sx={{ p: 2, color: "text.secondary" }}>{title}</Typography>
      </Box>
      <Box height="100%" width="100%">
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
