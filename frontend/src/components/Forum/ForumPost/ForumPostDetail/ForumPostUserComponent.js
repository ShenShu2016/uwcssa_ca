import { Box } from "@mui/material";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import React from "react";
import ForumPostUserIDComponent from "../ForumPostUserIDComponent";
export default function ForumPostUserComponent({ user, userID, id }) {
  return (
    <Box
      sx={{
        width:{xs:230,sm:130,md:130},
        overflow:"hidden",
        m: 1,
        p: 1,
        maxHeight: { xs: 120, sm: 167 },
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        justifyContent: "space-between",
        alginItems: "center",
      }}
    >
      <Box
        sx={{
          m: { xs: 0, sm: 1 },
          width: { xs: 42, sm: 68 },
        }}
      >
        <CustomAvatar user={user} link={true} />
      </Box>

      <Box component="span" sx={{ fontSize: 14, m: 1 }}>
        <ForumPostUserIDComponent userID={userID} />
      </Box>
      {id && (
        <Box component="span" sx={{ fontSize: 14, my: 1 }}>
          (楼主）
        </Box>
      )}
      <Box component="span" sx={{ color: "primary.main", fontSize: 18, m: 1 }}>
        徽章
      </Box>
    </Box>
  );
}
