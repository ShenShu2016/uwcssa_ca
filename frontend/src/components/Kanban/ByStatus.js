import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import Ticket from "./Ticket";

export const GetStatusColor = (status) => {
  if (status === "IDEA") {
    return "primary.light";
  } else if (status === "TODO") {
    return "warning.light";
  } else if (status === "INPROGRESS") {
    return "error.light";
  } else if (status === "DONE") {
    return "success.light";
  } else if (status === "WASTED") {
    return "secondary.light";
  }
};

export default function ByStatus({ status, kanbansByDepartment }) {
  let kanbansByStatus = kanbansByDepartment.filter(
    (x) => x.kanbanStatus === status
  );
  //console.log("kanbansByStatus", kanbansByStatus);
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <CardHeader sx={{ bgcolor: GetStatusColor(status), py: "3px" }} />
      <Paper sx={{ textAlign: "center", py: "0.5rem" }}>
        <Typography variant="h6">{status}</Typography>
      </Paper>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          {kanbansByStatus.map((ticket, idx) => {
            return <Ticket item={ticket} key={idx} />;
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}
