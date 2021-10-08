import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Create from "./Education/Create";
import { Divider } from "@material-ui/core";
import Edit from "./Education/Edit";
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
  school: {
    display: "flex",
  },
}));

export default function Education({ user, userAuth }) {
  const classes = useStyles();
  const [editOpen, setEditOpen] = useState(false);
  console.log(user, "user");
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
          教育经历
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

        {user.UserEducations.items.map((education) => {
          const {
            degree,
            description,
            endDate,
            fieldOfStudy,
            grade,
            id,
            school,
            startDate,
          } = education;
          return (
            <div key={id}>
              <CardContent className={classes.cardContent} key={id}>
                <div className={classes.school}>
                  <Typography variant="h5">{school}</Typography>
                  {userAuth.user.username === user.username && (
                    <Button
                      endIcon={<EditIcon />}
                      onClick={handleEditClickOpen}
                    />
                  )}
                </div>
                <Typography sx={{ mb: 1.5 }}>
                  {degree}, {fieldOfStudy}, {grade}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {startDate && startDate.slice(0, 4)} -{" "}
                  {endDate && endDate.slice(0, 4)}
                </Typography>
                <Typography variant="body2">{description}</Typography>
                <Divider />
              </CardContent>
              <Edit
                editOpen={editOpen}
                education={education}
                handleEditClose={handleEditClose}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}
