import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const drawerBleeding = 32;

const useStyle = makeStyles((theme) => ({
  puller: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      // width: 6,
      // height: 30,
      // backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
      // borderRadius: 3,
      position: "absolute",
      right: 12,
      top: "calc(50% - 15px)",
    },
  },
  styledBox: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      backgroundColor: theme.palette.mode === "light" ? "green" : grey[800],
    },
  },
}));

export default function SwipeableDrawerInfo({
  children,
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
          width: `calc(100% - ${drawerBleeding}px)`,
          overflow: "visible",
        },
      }}
    >
      <Box
        className={classes.styledBox}
        sx={{
          position: "absolute",
          right: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          bottom: 0,
          top: 0,
        }}
      >
        <Box className={classes.puller}>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
      <Box height="100%" width="100%">
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
