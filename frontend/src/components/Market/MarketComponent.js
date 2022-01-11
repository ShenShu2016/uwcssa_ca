import {
  Box,
  CardActionArea,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import UWinBadge from "./uwinBadge";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "283px",
    margin: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
    },
  },
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
      // marginTop: "2.5rem",
    },
  },
}));

export default function MarketComponent({ item, type, darkTheme, starter }) {
  const classes = useStyles();
  const { id, name, price, imgURLs, location, createdAt, user } = item;
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
            ${price}
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
          <UWinBadge isUWin={isUWin} />
        </Box>
      </React.Fragment>
    );
  };
  const SkeletonFade = () => {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" height={118} />
      </Stack>
    );
  };
  return (
    <Paper elevation={0} className={classes.root}>
      {starter ? (
        <CardActionArea
          component={Link}
          to={`/market/${type}/${id}`}
          sx={{
            backgroundColor: darkTheme ? "#121212" : "#f5f5f5",
          }}
        >
          <img src={imgURLs[0]} alt={name} className={classes.s3image} />
          <Box my={"8px"}>{displayInfo()}</Box>
        </CardActionArea>
      ) : (
        <SkeletonFade />
      )}
    </Paper>
  );
}
