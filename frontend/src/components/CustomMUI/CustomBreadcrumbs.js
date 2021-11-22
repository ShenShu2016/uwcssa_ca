import { Breadcrumbs, Button } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomBreadcrumbs() {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  //console.log("pathArray", pathArray);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {pathArray.map((path, idx) => {
          //console.log(path, idx);
          //console.log(location.pathname);
          if (idx === 0) {
            return (
              <span style={{}} key={idx}>
                <Button color="inherit" component={Link} to={`/`}>
                  UWCSSA
                </Button>
              </span>
            );
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
                  {path.toUpperCase()}
                </Button>
              </span>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
}
