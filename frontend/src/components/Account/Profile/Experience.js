import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Create from "./Experience/Create";
import { Divider } from "@material-ui/core";
import Edit from "./Experience/Edit";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

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

export default function Experience({ user, userAuth }) {
  const classes = useStyles();
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
          {userAuth.user.username === user.username && (
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
        {userAuth.user.username === user.username && (
          <Create
            createOpen={createOpen}
            handleCreateClose={handleCreateClose}
            username={user.username}
          />
        )}
        {user.UserExperiences.items.map((experience) => {
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

                  {userAuth.user.username === user.username && (
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
                <Typography variant="body2" sx={{ mb: 2 }}>
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
