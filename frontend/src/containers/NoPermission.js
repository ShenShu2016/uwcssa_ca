import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

export default function NoPermission() {
  return (
    <div>
      <Typography variant="h1">看来你没有权限</Typography>
      <Button variant="contained" component={Link} to="/">
        点击返回主页
      </Button>
    </div>
  );
}
