import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InsideLeftLineTag from "./tag";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  actionArea: {
    width: 300,
    borderRadius: 16,
    maxHeight: 360,
    height: 335,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardDetails: {
    width: 300,
    // borderRadius: 16,
    // color: "transparent",
    boxShadow: "none",
    overflow: "initial",
    maxHeight: 360,
    height: 335,
    position: "relative",
    border: palette.mode === "dark" ? null : "1px solid",
    borderColor: "#cfd8dc",

    "&:hover": {
      boxShadow: "0 6px 12px 0 #757ce8",
    },
  },
  cardMedia: {
    display: "block",
    marginLeft: "auto",
    marginRight: " auto",
    width: "50%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
  },

  s3image: {
    width: "162px",
    height: "162px",
    borderRadius: "8px",
    objectFit: "cover",
    [breakpoints.down("sm")]: {
      width: "112px",
      height: "112px",
      marginTop: "2.5rem",
    },
  },
  statLabel: {
    fontSize: 12,
    color: grey[500],
    fontWeight: 500,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  content: {
    position: "relative",
    padding: 24,
    margin: "-24% 9px 0",
    backgroundColor: palette.mode === "dark" ? "#212121" : "#fff",
    borderRadius: 4,
    boxShadow:
      palette.mode === "dark"
        ? "0 1px 2px 0 rgb(128,128,128)"
        : "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
  bottom: {
    width: 300,
    height: 141,
    position: "absolute",
    backgroundColor: palette.mode === "dark" ? "#212121" : "#ffff",
    top: 194,
    left: 0,
  },
}));

export default function PastEvent({ event }) {
  const classes = useStyles();
  const {
    id,
    title,
    startDate,
    endDate,
    address,
    // content,
    posterImgURL,
    online,
  } = event;
  // const newContent = content.substring(34, content.length - 98);
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      key={event.title}
      sx={{ marginBottom: "1rem" }}
    >
      <CardActionArea
        className={classes.actionArea}
        sx={{ borderRadius: 3 }}
        component={Link}
        to={`/event/${id}`}
      >
        <Card
          className={classes.cardDetails}
          sx={{ borderRadius: 3 }}
          elevation={0}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="194"
              image={
                posterImgURL
                  ? posterImgURL
                  : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
              }
              style={{
                objectFit: "cover",
                opacity: 0.9,
                borderRadius: "16px 16px 0 0",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
              }}
            >
              <InsideLeftLineTag />
            </Box>
            <Box
              className={classes.bottom}
              sx={{ borderRadius: "0 0 16px 16px" }}
            />
            <CardContent className={classes.content}>
              <Typography
                variant="subtitle1"
                style={{
                  wordBreak: "break-word",
                  overflow: "hidden",
                }}
                gutterBottom
              >
                <b>{title}</b>
              </Typography>
              {moment(startDate).format("YYYY") ===
              moment(endDate).format("YYYY") ? (
                <Box
                  color={"grey.700"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={1}
                >
                  <CalendarTodayIcon className={classes.locationIcon} />
                  <Typography variant="subtitle2">
                    {startDate.slice(0, 4)}/{startDate.slice(5, 7)}/
                    {startDate.slice(8, 10)} {startDate.slice(11, 16)} -{" "}
                    {endDate.slice(5, 7)}/{endDate.slice(8, 10)}{" "}
                    {endDate.slice(11, 16)}
                  </Typography>
                </Box>
              ) : (
                <Box
                  color={"grey.700"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={1}
                >
                  <CalendarTodayIcon className={classes.locationIcon} />
                  <Typography variant="subtitle2">
                    {startDate.slice(0, 4)}/{startDate.slice(5, 7)}/
                    {startDate.slice(8, 10)} {startDate.slice(11, 16)} -{" "}
                    {endDate.slice(0, 4)}/{endDate.slice(5, 7)}/
                    {endDate.slice(8, 10)} {endDate.slice(11, 16)}
                  </Typography>
                </Box>
              )}
              <Typography
                variant="subtitle2"
                color="primary"
                gutterBottom
              ></Typography>
              {/* <Box style={{ maxHeight: "30px", overflow: "hidden" }}></Box> */}

              {online === true ? (
                <Box
                  sx={{ overflow: "hidden", height: "30px" }}
                  color={"grey.700"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={1}
                >
                  <Grid container wrap="nowrap" sx={{ my: 1, mx: "auto" }}>
                    <LocationOnIcon className={classes.locationIcon} />
                    <Grid item xs zeroMinWidth>
                      <Typography
                        variant="subtitle2"
                        color="text.Secondary"
                        noWrap
                      >
                        线上
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <div>
                  {address ? (
                    <Box
                      sx={{ overflow: "hidden", height: "30px" }}
                      color={"grey.700"}
                      display={"flex"}
                      alignItems={"center"}
                      mb={1}
                    >
                      <Grid container wrap="nowrap" sx={{ my: 1, mx: "auto" }}>
                        <LocationOnIcon className={classes.locationIcon} />
                        <Grid item xs zeroMinWidth>
                          <Typography
                            variant="subtitle2"
                            color="text.Secondary"
                            noWrap
                          >
                            {address.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    <Box
                      sx={{ overflow: "hidden", height: "30px" }}
                      color={"grey.700"}
                      display={"flex"}
                      alignItems={"center"}
                      mb={1}
                    >
                      <Grid container wrap="nowrap" sx={{ my: 1, mx: "auto" }}>
                        <LocationOnIcon className={classes.locationIcon} />
                        <Grid item xs zeroMinWidth>
                          <Typography
                            variant="subtitle2"
                            color="text.Secondary"
                          >
                            无
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </div>
              )}
              {/* {topic.name ? (
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                类别： {topic.name}
              </Typography>
            ) : (
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                类别： 无
              </Typography>
            )} */}

              {/* <Box sx={{ overflow: "hidden", height: "30px" }}>
                <Grid container wrap="nowrap" sx={{ my: 1, mx: "auto" }}>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {newContent}
                    </Typography>
                  </Grid>
                </Grid>
              </Box> */}
            </CardContent>
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
