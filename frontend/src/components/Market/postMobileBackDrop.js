import { Backdrop, Box } from "@mui/material";

import React from "react";
import inst from "./inst.svg";

export default function PostMobileBackDrop() {
  const [open, setOpen] = React.useState(true);
  return (
    <Backdrop
      open={window.innerWidth < 600 ? open : !open}
      sx={{ zIndex: 999 }}
      onClick={() => setOpen(false)}
    >
      <Box
        component="img"
        src={inst}
        sx={{
          position: "absolute",
          top: "25%",
          right: "5%",
        }}
      />
    </Backdrop>
  );
}
