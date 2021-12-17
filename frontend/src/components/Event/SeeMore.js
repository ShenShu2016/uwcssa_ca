import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  content: {
    marginBlock: "2rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px solid",
    borderColor: "#cfd8dc",
    borderRadius: 5,
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    lineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
}));

export default function SeeMore({ content }) {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);
  const newContent = content.substring(34, content.length - 98);

  return (
    <div>
      {newContent.length < 250 ? (
        <Typography
          variant="body1"
          // sx={{ marginTop: "2rem" }}
          component="span"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
          gutterBottom
        >
          {newContent}
        </Typography>
      ) : (
        <div>
          {showMore ? (
            <Typography
              variant="body1"
              // sx={{ marginTop: "2rem" }}
              component="span"
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
              gutterBottom
            >
              {newContent}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              component="span"
              className={classes.text}
              gutterBottom
            >
              {newContent}
            </Typography>
          )}

          <Button size="small" onClick={() => setShowMore(!showMore)}>
            {showMore ? "查看更少" : "查看更多"}
          </Button>
        </div>
      )}
    </div>
  );
}
