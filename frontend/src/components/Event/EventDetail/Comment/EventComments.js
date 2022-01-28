import { Box, LinearProgress, Typography } from "@mui/material";

import EventCommentsComponents from "./EventCommentsComponents";
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

export default function EventComments({ event }) {
  const classes = useStyles();
  console.log(event.eventComments.items);
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {event.active !== true ? (
        ""
      ) : (
        <div>
          {event.eventComments.items.map((comment, idx) => {
            return (
              <EventCommentsComponents
                comment={comment}
                idx={idx}
                key={comment.id}
              />
            );
          })}
        </div>
      )}
      <Box className="moreCommentsStatus">
        {event.eventComments.commentsNextToken ? (
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
