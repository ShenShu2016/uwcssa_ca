import {
  Box,
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";

import CustomAvatar from "../CustomMUI/CustomAvatar";
import { Link } from "react-router-dom";
import { ShareInfoDialog } from "../ShareInfo";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { useTheme } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  paper: {},
  content: {
    maxHeight: "200px",
  },
  s3image: {
    width: "162px",
    height: "162px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "112px",
      height: "112px",
      // marginTop: "2.5rem",
    },
  },
}));

function ArticleComponent({ article }) {
  const classes = useStyles();
  const theme = useTheme();
  const { id, summary, title, imgURLs, createdAt, userID, user } = article;
  const shareRef = useRef();
  const handleShareOpen = () => {
    shareRef.current.openDialog();
  };

  return (
    <div>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          maxWidth: "100%",
          margin: "1rem auto",
          padding: "1rem",
          maxHeight: "255px",
          borderRadius: "8px",
          [theme.breakpoints.down("sm")]: {
            margin: "0.5rem auto",
            padding: "0.5rem",
          },
        }}
      >
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item xs sx={{ p: 0 }}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ height: "100%" }}
            >
              <Grid item xs={"auto"} sx={{ paddingBottom: "0.5rem" }}>
                <CardActionArea
                  component={Link}
                  to={`/account/profile/${userID}`}
                >
                  <CardHeader
                    sx={{ p: 0 }}
                    avatar={
                      <CustomAvatar
                        link={false}
                        variant={"round"}
                        // sx={{ width: 25, height: 25 }}
                        user={user}
                      />
                    }
                    title={userID}
                  />
                </CardActionArea>
              </Grid>

              <CardActionArea component={Link} to={`/article/${id}`}>
                <Grid item xs={"auto"} sx={{ marginBottom: "0.5rem" }}>
                  <div style={{ maxHeight: "48px", overflow: "hidden" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: "18px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        lineHeight: "1.3em",
                        // color: "#202124",
                      }}
                    >
                      {title}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs>
                  <Box style={{ maxHeight: "80px", overflow: "hidden" }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        wordBreak: "break-word",
                        overflow: "hidden",
                      }}
                    >
                      {summary
                        ? summary
                        : "这人很懒，忘记写summary了。 你还是自己点进去看看吧！"}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={"auto"} sx={{ marginTop: "0.5rem" }}>
                  <Typography variant="overline" color="textSecondary">
                    {moment(createdAt).fromNow()}
                  </Typography>
                </Grid>
              </CardActionArea>
            </Grid>
          </Grid>
          <Grid item xs={"auto"}>
            <Stack
              direction="column"
              justifyContent="space-around"
              alignItems="flex-end"
              spacing={1}
            >
              <CardActionArea component={Link} to={`/article/${id}`}>
                <img
                  src={
                    imgURLs
                      ? imgURLs[0]
                      : "https://media-exp1.licdn.com/dms/image/C5603AQHwt3NgA8rYHw/profile-displayphoto-shrink_200_200/0/1616353723146?e=1640822400&v=beta&t=wzrF9eUlq7YnsTg-1cpH4LrYXm2oCCOHHHp0ac1hmgM"
                  }
                  alt={article.title}
                  className={classes.s3image}
                />
              </CardActionArea>
              <CardActions sx={{ p: 0 }}>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    handleShareOpen();
                  }}
                >
                  <ShareRoundedIcon />
                </IconButton>
              </CardActions>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <ShareInfoDialog
        url={`article/${id}`}
        title={article.title}
        ref={shareRef}
      />
    </div>
  );
}

export default ArticleComponent;
