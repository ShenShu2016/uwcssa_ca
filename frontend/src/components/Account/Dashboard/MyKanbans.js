import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Ticket from "../../Kanban/Ticket";
import { useSelector } from "react-redux";

export default function MyKanbans() {
  const { kanbanAssignee } = useSelector((state) => state.userAuth.userProfile);
  let ticketsNeedToDo =
    kanbanAssignee &&
    kanbanAssignee.items.length !== 0 &&
    kanbanAssignee.items.filter(
      (x) => x.kanbanStatus !== "DONE" && x.kanbanStatus !== "WASTED"
    );
  return (
    <Fragment>
      {kanbanAssignee && kanbanAssignee.items.length !== 0 && (
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            你的任务
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              justifyContent: "space-around",
            }}
          >
            {ticketsNeedToDo.map((ticket, idx) => {
              return <Ticket item={ticket} key={idx} />;
            })}
          </Box>
          <Button variant="contained" component={Link} to="/kanban">
            查看更多
          </Button>
        </Box>
      )}
    </Fragment>
  );
}
