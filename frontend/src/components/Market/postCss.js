import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const drawerBleeding = 56;

export const postStyle = makeStyles((theme) => ({
  root: {
    margin: "auto",
    height: "calc(100vh - 64px)",
  },
  titleInput: {
    marginBlock: "2rem",
  },
  content: {},
  imgKeyFromServer: {
    width: "100%",
  },
  images: {
    height: "100%",
    width: "calc(100% - 360px)",
    // bgcolor="black"
    position: "relative",
    overflow: "hidden",
    float: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
  contain: {
    width: "100%",
    overflow: "hidden",
    height: "calc(100vh - 64px)",
    bgcolor: "black",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    paddingRight: "5px",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: `calc(100% - ${drawerBleeding}px)`,
    },
  },
  previewImg: {
    width: "100px",
    height: "100px",
    position: "relative",
    backgroundColor: "rgb(0 0 0 / 20%)",
    borderRadius: "5px",
    zIndex: "1",
  },
  preview: {
    width: "calc(100% - 360px)",
    height: "calc(100vh - 64px)",
    padding: "2rem",
    float: "right",
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  previewImgRight: {
    width: "calc(100% - 350px)",
    height: "100%",
    position: "relative",
    backgroundColor: "rgb(243, 246, 249)",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "40vh",
    },
  },
  previewInfo: {
    width: "350px",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    },
  },
  drawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      backgroundColor:
        theme.palette.mode === "light"
          ? grey[100]
          : theme.palette.background.default,
    },
  },
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
  icon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  leftInfoPaper: {
    maxWidth: "100%",
    padding: "1rem",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",

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
  },
  imgContainer: {
    marginY: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem",
    width: "100%",
    height: "130px",
  },
}));
