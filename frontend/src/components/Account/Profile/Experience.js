import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Create from "./Experience/Create";
import { Divider } from "@material-ui/core";
import Edit from "./Experience/Edit";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    marginBlock: "1rem",
  },
  cardContent: {
    marginLeft: "1rem",
  },
  title: {
    display: "flex",
  },
}));
function Experience({ user, userAuth }) {
  const classes = useStyles();

  const [editOpen, setEditOpen] = useState(false);
  const handleEditClickOpen = () => {
    setEditOpen(true);
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
      <Card>
        <Typography variant="h4" sx={{ m: 2 }}>
          工作经验
          {userAuth.user.username === user.username && (
            <Button endIcon={<AddIcon />} onClick={handleCreateClickOpen} />
          )}
        </Typography>

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
              <CardContent className={classes.cardContent}>
                <div className={classes.title}>
                  <Typography variant="h5">{title}</Typography>

                  {userAuth.user.username === user.username && (
                    <Button
                      endIcon={<EditIcon />}
                      onClick={handleEditClickOpen}
                    />
                  )}
                </div>
                <Typography sx={{ mb: 1.5 }}>
                  {companyName} - {industry} - {employmentType}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {startDate && startDate.slice(0, 4)} -{" "}
                  {endDate && endDate.slice(0, 4)}
                  <br />
                  {location}
                </Typography>

                <Typography variant="body2">{description}</Typography>
                <Divider />
              </CardContent>
              <Edit
                editOpen={editOpen}
                experience={experience}
                handleEditClose={handleEditClose}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}

export default Experience;
