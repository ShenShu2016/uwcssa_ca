import { makeStyles } from "@mui/styles";

export const marketItemStyle = makeStyles((theme) => ({
  root: {},
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    overflowY: "scroll",
    // overflow: "hidden",
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
    height: "100vh",
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
    padding: "1rem",
    //   backgroundColor: "black",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    overflow: "hidden",
    marginRight: "5px",
  },
  img: {
    padding: "2rem",
    height: "100%",
    width: "calc(100% - 360px)",
    position: "relative",
    overflowY: "auto",
    float: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
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
}));
