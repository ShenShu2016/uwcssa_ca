import { Box, LinearProgress, Typography } from "@mui/material";

import ArticleCommentsComponents from "./ArticleCommentsComponents";
// import CustomAlert from "../../CustomMUI/CustomAlert";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  moreCommentsStatus: {
    width: "100%",
    margin: "auto",
  },
});

export default function ArticleComments({ article }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {article.active !== true ? (
        ""
      ) : (
        <div>
          {article.articleComments.items.map((comment, idx) => {
            return (
              <ArticleCommentsComponents
                comment={comment}
                key={idx}
                idx={idx}
              />
            );
          })}
          {/* <CustomAlert /> */}
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
