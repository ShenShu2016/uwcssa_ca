import { Box } from "@mui/material";
import ForumRightSide from "../../components/Forum/ForumRightSide";
import ForumHomeMain from "../../components/Forum/ForumHome/ForumHomeMain";
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
            // maxWidth: "1300px",
            mt: 4,
            // width: "100%",
            width: { md: 1080,lg:1240 },
          }}
        >
          <ForumHomeMain />
        </Box>
        <Box
          sx={
            {
              // width: 220,
            }
          }
        >
          <ForumRightSide />
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
