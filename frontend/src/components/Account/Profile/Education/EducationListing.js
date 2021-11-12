import { CardContent, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import Edit from "./Edit";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../../../../Hooks/usePermit";

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
    marginInline: "1rem",
  },
  school: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export default function EducationComponent({ education, idx, ownerID }) {
  const isPermit = usePermit(ownerID, "admin");
  const classes = useStyles();
  const [editOpen, setEditOpen] = useState(false);

  const handleEditClickOpen = (education) => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const {
    degree,
    description,
    endDate,
    fieldOfStudy,
    grade,
    school,
    startDate,
  } = education;

  return (
    <div>
      <CardContent>
        <div className={classes.school}>
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            {school}
          </Typography>
          {isPermit && (
            <IconButton
              aria-label="edit"
              color="info"
              size="small"
              onClick={(e) => handleEditClickOpen(education)}
            >
              <EditIcon />
            </IconButton>
          )}
        </div>
        <Typography variant="subtitle2" sx={{}}>
          {degree} {" - "} {fieldOfStudy} {" - "} {grade}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="subtitle2" color="text.secondary">
          {startDate && startDate.slice(0, 7)} -{" "}
          {endDate && endDate.slice(0, 7)}
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
      <Edit
        editOpen={editOpen}
        education={education}
        handleEditClose={handleEditClose}
        idx={idx}
      />
    </div>
  );
}
