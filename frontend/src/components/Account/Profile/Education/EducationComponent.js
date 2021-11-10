import React from "react";

export default function EducationComponent() {
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
    </div>
  );
}
