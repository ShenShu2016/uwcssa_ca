import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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
      left: 5,
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
      SwipeAreaProps={{
        style: { height: "85%", transform: "translate(0,-50%)", top: "50%" },
      }}
      onOpen={setOpen}
      swipeAreaWidth={2 * drawerBleeding}
      disableSwipeToOpen={false}
      disableBackdropTransition={true}
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
          left: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          bottom: 0,
          top: 0,
        }}
      >
        <Box className={classes.puller}>
          <ArrowBackIosNewIcon />
        </Box>
      </Box>
      <Box height="100%" width="100%">
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
