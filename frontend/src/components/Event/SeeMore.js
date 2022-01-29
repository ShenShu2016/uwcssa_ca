import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import MUIRichTextEditor from "mui-rte";
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
    WebkitLineClamp: 1,
    lineClamp: 1,
    WebkitBoxOrient: "vertical",
    height: "37px",
  },
}));

export default function SeeMore({ content }) {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(true);
  const newContent = content.substring(34, content.length - 98);

  return (
    <div>
      {newContent.length < 40 ? (
        <MUIRichTextEditor
          defaultValue={content}
          readOnly={true}
          toolbar={false}
        />
      ) : (
        <div>
          {showMore ? (
            <MUIRichTextEditor
              defaultValue={content}
              readOnly={true}
              toolbar={false}
            />
          ) : (
            <Box className={classes.text}>
              <MUIRichTextEditor
                defaultValue={content}
                readOnly={true}
                toolbar={false}
              />
            </Box>
          )}

          <Button size="small" onClick={() => setShowMore(!showMore)}>
            {showMore ? "查看更少" : "查看更多"}
          </Button>
        </div>
      )}
    </div>
  );
}
