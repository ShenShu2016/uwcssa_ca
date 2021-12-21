import { Card, Divider } from "@mui/material";
import React, { Fragment } from "react";

import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import CustomAvatar from "../CustomMUI/CustomAvatar";
import IconButton from "@mui/material/IconButton";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Typography } from "@mui/material";

export default function Ticket({ item }) {
  const { content, assignee, assigneeID, title, deadLine } = item;

  return (
    <Box sx={{ my: "1rem" }}>
      <Card sx={{ width: 250 }}>
        <CardHeader
          sx={{ py: 0, px: "0.5rem", bgcolor: "warning.main" }}
          title={
            <Fragment>
              <Typography variant="subtitle1" sx={{ float: "left" }}>
                {assigneeID.length > 30
                  ? `${assigneeID.slice(0, 30)}...`
                  : assigneeID}
              </Typography>
            </Fragment>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardHeader
          sx={{ py: 1, px: "0.5rem" }}
          title={
            <Fragment>
              <Box sx={{ float: "right" }}>
                <CustomAvatar user={assignee} link={true} />
              </Box>
            </Fragment>
          }
          avatar={
            <Fragment>
              <Box sx={{ width: "178px", textAlign: "left" }}>
                <Typography variant="subtitle1">{title}</Typography>
              </Box>
            </Fragment>
          }
        />
        <Divider variant="light" />
        <Box>
          <CardContent sx={{ textAlign: "left", p: 0 }}>
            <ReportProblemIcon />
          </CardContent>
        </Box>
        <Divider variant="light" />
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
