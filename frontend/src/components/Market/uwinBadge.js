import { Box, Chip } from "@mui/material";

import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function UWinBadge({ onHover, isUWin }) {
  return (
    <Box>
      <Chip
        icon={isUWin ? <VerifiedUserIcon /> : <GppMaybeIcon />}
        color={`${isUWin ? "success" : "warning"}`}
        size="small"
        variant={`${onHover ? "filled" : "outlined"}`}
        label="UWIN"
      />
    </Box>
  );
}
