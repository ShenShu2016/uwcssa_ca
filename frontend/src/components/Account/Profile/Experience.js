import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Create from "./Experience/Create";
import Edit from "./Experience/Edit";
import EditIcon from "@mui/icons-material/Edit";
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

  const [experience, setExperience] = useState({
    companyName: "",
    description: "",
    employmentType: "",
    id: "",
    industry: "",
    location: "",
    title: "",
  });

  const [editOpen, setEditOpen] = useState(false);
  const handleEditClickOpen = (experience) => {
    setEditOpen(true);
    setExperience(experience);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

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
          const {
            companyName,
            description,
            employmentType,
            endDate,
            id,
            industry,
            location,
            startDate,
            title,
          } = experience;
          return (
            <div key={id}>
              <CardContent>
                <div className={classes.company}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                    {title}
                  </Typography>

                  {isPermit && (
                    <IconButton
                      aria-label="edit"
                      color="info"
                      size="small"
                      onClick={(e) => handleEditClickOpen(experience)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                </div>
                <Typography variant="subtitle2" sx={{}}>
                  {companyName} {" - "} {industry} {" - "} {employmentType}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {startDate && startDate.slice(0, 4)} -{" "}
                  {endDate && endDate.slice(0, 4)}
                  <br />
                  {location}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 2 }}
                  component="span"
                  style={{ whiteSpace: "pre" }}
                >
                  {description}
                </Typography>
                <Divider />
              </CardContent>
            </div>
          );
        })}
      </Card>
      <Edit
        editOpen={editOpen}
        experience={experience}
        handleEditClose={handleEditClose}
      />
    </div>
  );
}
