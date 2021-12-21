import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchKanbans, selectAllKanbans } from "../redux/slice/kanbanSlice";
import { useDispatch, useSelector } from "react-redux";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Create from "../components/Kanban/Create";
import Footer from "./Footer";
import Ticket from "../components/Kanban/Ticket";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../Hooks/usePermit";
import { useTitle } from "../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    margin: "4rem auto",
    maxWidth: "1536px",
    color: "#0D1F48",
  },
  tickets: {
    marginBlock: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
  },
}));

export default function Kanban() {
  useTitle("Kanban");
  const classes = useStyles();
  const dispatch = useDispatch();
  const [createOpen, setCreateOpen] = useState(false);
  const isPermit = usePermit(null, "admin");
  const kanbans = useSelector(selectAllKanbans);
  useEffect(() => {
    dispatch(fetchKanbans());
  }, [dispatch]);

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  return (
    <div>
      <Box>
        <div className={classes.root}>
          <Typography variant="h3" className={classes.title}>
            Kanban
          </Typography>
          {isPermit && (
            <Button
              variant="contained"
              sx={{ my: "1rem", borderRadius: "10px" }}
              size="large"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => {
                setCreateOpen(!createOpen);
              }}
            >
              添加Kanban
            </Button>
          )}
          <div className={classes.tickets}>
            {kanbans.map((ticket, idx) => {
              return <Ticket item={ticket} key={idx} />;
            })}
          </div>
        </div>
        <Footer />
      </Box>
      <Create createOpen={createOpen} handleCreateClose={handleCreateClose} />
    </div>
  );
}
