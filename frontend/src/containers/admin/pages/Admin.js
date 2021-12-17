import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function Admin() {
  return (
    <div>
      <Typography variant="h3">我是Admin 页面</Typography>
      <Button variant="contained" component={Link} to="/admin/FoundingTeam/add">
        添加初始团队
      </Button>
    </div>
  );
}
