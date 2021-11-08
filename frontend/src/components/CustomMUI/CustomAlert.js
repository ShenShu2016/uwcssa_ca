import { Alert, Snackbar } from "@mui/material";

import React from "react";

export default function CustomAlert({
  isAlertOpen,
  handleAlertClose,
  message,
}) {
  return (
    <Snackbar
      //   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={isAlertOpen}
      autoHideDuration={3000}
      onClose={handleAlertClose}
    >
      <Alert
        onClose={handleAlertClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
