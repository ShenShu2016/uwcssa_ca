import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import LikeButtonGroup from "../../LikeButtonGroup";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  cardContent: {},
  main: {},
  moreCommentsStatus: {
    width: "100%",
    margin: "auto",
  },
  moreVertIcon: {
    // display: "none",
    // "&:hover": {
    //   color: "red",
    // },
  },
});

export default function ArticleComments({ article }) {
  const classes = useStyles();
  // console.log("ArticleComments", article);
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {article.active !== true ? (
        ""
      ) : (
        <div>
          {article.articleComments.items.map((comment) => {
            const { id, content, createdAt, userID, user } = comment;

            return (
              <Box key={id} mb={2} className={classes.main}>
                <Grid container spacing={0} justifyContent="space-between">
                  <Grid item xs={"auto"}>
                    <CardHeader
                      component={Link}
                      to={`/account/profile/${userID}`}
                      sx={{ p: 0, textDecoration: "none" }}
                      avatar={<CustomAvatar link={false} user={user} />}
                    />
                  </Grid>
                  <Grid item xs>
                    <Box sx={{ display: "flex", mb: 1 }}>
                      <Typography
                        mr={1}
                        variant="subtitle2"
                        sx={{ fontSize: "13px", color: "#030303" }}
                      >
                        {userID}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#606060" }}>
                        {/* {createdAt.slice(0, 10)} {createdAt.slice(11, 19)} */}
                        {moment(createdAt).fromNow()}
                      </Typography>
                    </Box>
                    <Box sx={{ my: 1 }}>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          color: "#030303",
                        }}
                      >
                        {content}
                      </Typography>
                    </Box>
                    <CardActions sx={{ p: 0 }}>
                      <LikeButtonGroup item={comment} />
                      <Button size="small" color="primary">
                        回复
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </div>
      )}
      <Box className="moreCommentsStatus">
        {article.articleComments.commentsNextToken ? (
          <Box>
            <Typography
              variant="h5"
              color="primary"
              align="center"
              sx={{ my: 3 }}
            >
              再往下翻一翻 加载更多
            </Typography>
            <LinearProgress />
          </Box>
        ) : (
          <Typography variant="h5" align="center" sx={{ my: 3 }}>
            已经到达底部
          </Typography>
        )}
      </Box>
    </div>
  );
}
