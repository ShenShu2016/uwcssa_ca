import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CustomAvatar from "../CustomMUI/CustomAvatar";
import IconButton from "@mui/material/IconButton";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { Typography } from "@mui/material";

export default function Ticket({ item }) {
  const { content, assignee, assigneeID, title, deadLine } = item;

  return (
    <Box sx={{ my: "1rem" }}>
      <Card sx={{ width: 250 }}>
        <CardHeader
          avatar={<CustomAvatar user={assignee} link={true} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={
            assigneeID.length > 14
              ? `${assigneeID.slice(0, 14)}...`
              : assigneeID
          }
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h6">
            {deadLine ? `Due: ${deadLine.slice(0, 10)}` : "Due: 未定"}
          </Typography>
          {content ? (
            <div sx={{ overflow: "auto" }}>
              <MUIRichTextEditor
                defaultValue={content}
                readOnly={true}
                toolbar={false}
              />
            </div>
          ) : (
            "这人很懒什么都没写"
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
