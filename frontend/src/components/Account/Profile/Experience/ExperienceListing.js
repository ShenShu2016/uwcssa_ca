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
    marginLeft: "1rem",
  },
  company: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export default function ExperienceListing({ experience, idx, ownerID }) {
  const isPermit = usePermit(ownerID, "admin");
  const classes = useStyles();
  const [editOpen, setEditOpen] = useState(false);
  const handleEditClickOpen = (experience) => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const {
    companyName,
    description,
    employmentType,
    endDate,
    industry,
    location,
    startDate,
    title,
  } = experience;
  return (
    <div>
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
        <Typography sx={{ mb: 1.5 }} variant="subtitle2" color="text.secondary">
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
      <Edit
        editOpen={editOpen}
        experience={experience}
        handleEditClose={handleEditClose}
        idx={idx}
      />
    </div>
  );
}
