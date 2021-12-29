import { Breadcrumbs, Button } from "@mui/material";

import { Box } from "@mui/system";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

const GetChineseName = (path) => {
  if (path === "article") {
    return "文章";
  } else if (path === "market") {
    return "商城";
  } else if (path === "event") {
    return "活动";
  } else if (path === "eventSignUp") {
    return "活动报名";
  } else if (path === "forum") {
    return "论坛";
  } else {
    return path.toLocaleUpperCase();
  }
};

export default function CustomBreadcrumbs() {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  //console.log("pathArray", pathArray);

  return (
    <Box sx={{ my: "1rem" }}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathArray.map((path, idx) => {
          //console.log(path, idx);
          //console.log(location.pathname);
          if (idx === 0) {
            return (
              <span style={{}} key={idx}>
                <Button
                  color="inherit"
                  component={Link}
                  to={`/`}
                  startIcon={<HomeRoundedIcon />}
                >
                  主页
                </Button>
              </span>
            );
          } else if (idx === pathArray.length - 1) {
            return "";
          } else {
            //console.log(location.pathname.indexOf(path));
            return (
              <span style={{}} key={idx}>
                <Button
                  color="inherit"
                  component={Link}
                  to={`${location.pathname.slice(
                    0,
                    location.pathname.indexOf(path) + path.length
                  )}`}
                >
                  {GetChineseName(path)}
                </Button>
              </span>
            );
          }
        })}
      </Breadcrumbs>
    </Box>
  );
}
