import { Box, CardActionArea, Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import UWinBadge from "./uwinBadge";
// import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import moment from "moment";
// import { getImage, selectImageById } from "../../redux/slice/imageSlice";
// import { useDispatch } from "react-redux";
import useHover from "../../Hooks/useHover";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "283px",
    margin: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
    },
  },
  paper: {},
  content: {
    maxHeight: "200px",
  },
  s3image: {
    width: "283px",
    height: "283px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
      height: "173px",
      marginTop: "2.5rem",
    },
  },
}));

export default function MarketComponent({ item, type }) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const [imageURL, setImageURL] = useState(null);
  const [hoverRef, isHover] = useHover();

  const {
    id,
    name,
    // description,
    price,
    imgURLs,
    // marketItemCategory,
    // marketItemCondition,
    location,
    createdAt,
    user,
    // tags,
    // active,
    // ByCreatedAt,
  } = item;
  const isUWin =
    user.email.includes("uwindsor") || user.badges.includes("uwindsor");

  const displayInfo = () => {
    return (
      <React.Fragment>
        <Box my={"4px"}>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#505050",
              fontWeight: "600",
              lineHeight: "1.3333",
            }}
          >
            ${price} {isHover ? "🥳" : "😩"}
          </Typography>
        </Box>
        <Box my={"4px"}>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#505050",
              fontWeight: "400",
              lineHeight: "1.33333",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box my={"4px"}>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#65676B",
              fontWeight: "400",
              lineHeight: "1.2308",
            }}
          >
            {location}
          </Typography>
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#65676B",
                fontWeight: "400",
                lineHeight: "1.2308",
              }}
            >
              {moment(createdAt).fromNow()}
            </Typography>
          </Box>
          <UWinBadge onHover={isHover} isUWin={isUWin} />
        </Box>
      </React.Fragment>
    );
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <CardActionArea
        ref={hoverRef}
        component={Link}
        to={`/market/${type}/${id}`}
        sx={{
          transition: "background-color 0.7s",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <img src={imgURLs[0]} alt="" className={classes.s3image} />
        <Box my={"8px"}>{displayInfo()}</Box>
      </CardActionArea>
    </Paper>
  );
}
