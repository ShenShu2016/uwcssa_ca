import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CustomAvatar from "../CustomMUI/CustomAvatar";
import IconButton from "@mui/material/IconButton";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

export default function Ticket({ item }) {
  const { content, assignee, title, deadLine } = item;

  return (
    <Box>
      <Card sx={{ width: 250, height: "350px" }}>
        <CardHeader
          avatar={<CustomAvatar user={assignee} link={true} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={deadLine && `Due date: ${deadLine}`}
        />
        <CardContent>
          {content ? (
            <Box sx={{ my: 2, overflow: "auto", textAlign: "left" }}>
              <MUIRichTextEditor
                defaultValue={content}
                readOnly={true}
                toolbar={false}
              />
            </Box>
          ) : (
            "这人很懒什么都没写"
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
