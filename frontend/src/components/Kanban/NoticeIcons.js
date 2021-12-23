import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import EventIcon from "@mui/icons-material/Event";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import moment from "moment";

const renderPriorityIcon = (priority) => {
  //console.log(priority);
  if (priority) {
    if (priority === "Low") {
      return (
        <ChangeHistoryRoundedIcon
          fontSize="small"
          sx={{ transform: "rotate(-180deg)", color: "primary.main" }}
        />
      );
    } else if (priority === "Average") {
      return <ChangeHistoryRoundedIcon fontSize="small" />;
    } else if (priority === "High") {
      return (
        <ChangeHistoryRoundedIcon
          sx={{ color: "warning.main" }}
          fontSize="small"
        />
      );
    } else if (priority === "Critical") {
      return (
        <WarningRoundedIcon sx={{ color: "error.main" }} fontSize="small" />
      );
    }
  } else {
    return <ChangeHistoryRoundedIcon />;
  }
};

const renderDateIcon = (deadLine) => {
  //console.log(deadLine);
  return (
    <Fragment>
      <EventIcon />
      <Typography>
        {deadLine ? moment(deadLine).format("MMM Do YY").slice(0, 6) : "待定"}
      </Typography>
    </Fragment>
  );
};

const renderRelateTimeIcon = (deadLine) => {
  //console.log(deadLine);
  return (
    <Fragment>
      <AccessTimeRoundedIcon sx={{ mr: "5px" }} />
      {deadLine ? moment(deadLine).endOf("day").fromNow() : "待定"}
    </Fragment>
  );
};

export default function NoticeIcons({ item }) {
  //console.log(item);
  const { deadLine, priority } = item;
  return (
    <Fragment>
      <Stack spacing={0.5} direction="row">
        {renderPriorityIcon(priority)}
        {renderDateIcon(deadLine)}
        {renderRelateTimeIcon(deadLine)}
      </Stack>
    </Fragment>
  );
}
