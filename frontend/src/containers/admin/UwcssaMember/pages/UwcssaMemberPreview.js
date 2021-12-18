import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function UwcssaMemberPreview() {
  return (
    <div>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Uwcssa Team Preview
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/admin/uwcssaMember/create"
      >
        添加成员
      </Button>
    </div>
  );
}
