import { Box } from "@mui/material";
import React from "react";
import ForumAdSide from "../../components/Forum/ForumAdSide";
import ForumIndexMain from "../../components/Forum/ForumIndex/ForumIndexMain";
import OpenIconSpeedDial from "../../components/Forum/OpenIconSpeedDial";
import { useTitle } from "../../Hooks/useTitle";

export default function ForumIndex() {
  useTitle("论坛-UWCSSA ");
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin:"auto",
          maxWidth: "1536px",
          // paddingInline:{xs:0,sm:"1rem"},
          flexDirection: {xs:"column",sm:"row"},
        }}
      >
        <Box sx={{
          maxWidth:"1200px",
          width:"100%",
        }}>
        <ForumIndexMain />
        </Box>

        <ForumAdSide />
        <Box sx={{
          width:110,
          alginItems:"center",
        }}>
        <OpenIconSpeedDial />
        </Box>
      </Box>
    </div>
  );
}
