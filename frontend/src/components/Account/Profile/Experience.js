import { Box, Card, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Create from "./Experience/Create";
import ExperienceListing from "./Experience/ExperienceListing";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../../../Hooks/usePermit";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    marginBlock: "1rem",
  },
  card: {
    paddingInline: "1rem",
    paddingTop: "1rem",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    marginLeft: "1rem",
  },
  company: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Experience({ user, userAuth, ownerID }) {
  const classes = useStyles();
  const isPermit = usePermit(ownerID, "admin");

  const [createOpen, setCreateOpen] = useState(false);
  const handleCreateClickOpen = () => {
    setCreateOpen(true);
  };
  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Box className={classes.title}>
          <Typography variant="h6" sx={{ m: 1, fontWeight: "600" }}>
            工作经验
          </Typography>
          {isPermit && (
            <IconButton
              aria-label="create"
              onClick={handleCreateClickOpen}
              size="large"
              color="info"
            >
              <AddIcon />
            </IconButton>
          )}
        </Box>
        {isPermit && (
          <Create
            createOpen={createOpen}
            handleCreateClose={handleCreateClose}
            username={user.username}
          />
        )}
        {user.userExperiences.items.map((experience, idx) => {
          return (
            <div key={idx}>
              <ExperienceListing
                experience={experience}
                idx={idx}
                ownerID={ownerID}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}
