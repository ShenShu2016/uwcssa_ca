import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";

import React from "react";
import Ticket from "./Ticket";

export default function ByStatus({ status, kanbansByDepartment }) {
  let kanbansByStatus = kanbansByDepartment.filter(
    (x) => x.kanbanStatus === status
  );
  //console.log("kanbansByStatus", kanbansByStatus);
  return (
    <Card sx={{ height: "100%", bgcolor: "#dce0df" }}>
      <CardHeader sx={{ bgcolor: "red", py: "3px" }} />
      <Paper sx={{ textAlign: "center", py: "0.5rem" }}>
        <Typography variant="h6">{status}</Typography>
      </Paper>
      <CardContent>
        {kanbansByStatus.map((ticket, idx) => {
          return <Ticket item={ticket} key={idx} />;
        })}
      </CardContent>
    </Card>
  );
}
