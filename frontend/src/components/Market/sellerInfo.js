import { Box, CardHeader, IconButton } from "@mui/material";

import CustomAvatar from "../CustomMUI/CustomAvatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

const SellerInfo = ({ user, createdAt, owner }) => {
  return (
    <React.Fragment>
      <Box marginY="0.5rem">
        <CardHeader
          sx={{ paddingTop: "0.5rem", paddingBottom: "1.5rem" }}
          avatar={<CustomAvatar component={true} user={user}></CustomAvatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={owner}
          subheader={`发布日期： ${createdAt.slice(0, 10)}`}
        />
      </Box>
    </React.Fragment>
  );
};
export default SellerInfo;
