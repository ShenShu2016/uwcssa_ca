import { makeStyles } from "@mui/styles";

export const marketItemStyle = makeStyles((theme) => ({
  root: {},
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    // overflowY: "scroll",
    overflow: "hidden",
    position: "relative",
    //   backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  contain: {
    width: "100%",
    overflow: "hidden",
    height: "calc(100vh - 64px)",
    //   bgcolor: "black",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  titleInput: {
    marginBlock: "2rem",
  },
  paper: {
    paddingLeft: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    //   backgroundColor: "black",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    overflow: "hidden",
    marginRight: "5px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  img: {
    padding: "2rem",
    height: "100%",
    width: "calc(100% - 360px)",
    position: "relative",
    overflowY: "auto",
    float: "left",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
      width: "100%",
      height: "100%",
    },
  },
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
  },
  items: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  imgPaper1: {
    alignContent: "center",
    marginBottom: "1rem",
    padding: "2rem",
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  imgPaper2: {
    alignContent: "center",
    marginBottom: "1rem",
    padding: "2rem",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      padding: "1rem",
    },
  },
  special: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  specialNot: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  specialBox: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
}));
