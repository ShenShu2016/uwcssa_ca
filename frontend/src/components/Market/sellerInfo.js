import { Box, CardHeader, IconButton, Typography } from "@mui/material";

import CustomAvatar from "../CustomMUI/CustomAvatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

const SellerInfo = ({ user, createdAt, owner }) => {
  return (
    <React.Fragment>
      <Typography margin="1rem" marginY="0.25rem" fontWeight="600">
        Seller Infos
      </Typography>
      <Box margin="1rem">
        <CardHeader
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
