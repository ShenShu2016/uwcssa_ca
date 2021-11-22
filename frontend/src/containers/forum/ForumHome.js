import { Box } from "@mui/material";
import ForumAdSide from "../../components/Forum/ForumAdSide";
import ForumIndexMain from "../../components/Forum/ForumIndex/ForumIndexMain";
// import OpenIconSpeedDial from "../../components/Forum/OpenIconSpeedDial";
import React from "react";
import { useTitle } from "../../Hooks/useTitle";

export default function ForumHome() {
  useTitle("UWCSSA论坛");
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          maxWidth: "100%",
          paddingInline: { xs: 0, sm: "1rem" },
          flexDirection: { xs: "column", sm: "row" },
          bgcolor: "grey.50",
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            width: "100%",
          }}
        >
          <ForumIndexMain />
        </Box>
        <Box
          sx={{
            width: 220,
          }}
        >
          <ForumAdSide />
        </Box>
        {/* <Box
          sx={{
            width: 110,
            alginItems: "center",
          }}
        >
          <OpenIconSpeedDial />
        </Box> */}
      </Box>
    </div>
  );
}
