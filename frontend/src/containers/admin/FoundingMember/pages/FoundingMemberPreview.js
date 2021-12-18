import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function FoundingMemberPreview() {
  return (
    <div>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Founding Team Preview
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/admin/foundingMember/create"
      >
        添加成员
      </Button>
    </div>
  );
}
