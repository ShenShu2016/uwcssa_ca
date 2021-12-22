import {
  Card,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import React, { Fragment, useState } from "react";

import { Box } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
import CustomAvatar from "../CustomMUI/CustomAvatar";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoticeIcons from "./NoticeIcons";
import { Typography } from "@mui/material";

export default function Ticket({ item }) {
  const { content, assignee, assigneeID, title, deadLine, userID } = item;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ my: "1rem" }}>
      <Card sx={{ width: 250 }}>
        <CardHeader
          sx={{ py: 0, px: "0.5rem", bgcolor: "warning.main" }}
          title={
            <Fragment>
              <Typography variant="subtitle1" sx={{ float: "left" }}>
                {assigneeID.length > 30
                  ? `${assigneeID.slice(0, 30)}...`
                  : assigneeID}
              </Typography>
            </Fragment>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardHeader
          sx={{ py: 1, px: "0.5rem" }}
          title={
            <Fragment>
              <Box sx={{ float: "right" }}>
                <CustomAvatar user={assignee} link={true} />
              </Box>
            </Fragment>
          }
          avatar={
            <Fragment>
              <Box sx={{ width: "178px", textAlign: "left" }}>
                <Typography variant="subtitle1">{title}</Typography>
              </Box>
            </Fragment>
          }
        />
        <Divider variant="light" />
        <Box sx={{ textAlign: "left", px: "8px" }}>
          <NoticeIcons item={item} />
        </Box>
        <Divider variant="light" />
        <Box sx={{ textAlign: "left", px: "8px" }}>
          <Typography variant="h6">
            {deadLine ? `Due: ${deadLine.slice(0, 10)}` : "Due: 未定"}
          </Typography>
          {content ? (
            <div sx={{ overflow: "auto" }}>
              <MUIRichTextEditor
                defaultValue={content}
                readOnly={true}
                toolbar={false}
              />
            </div>
          ) : (
            "这人很懒什么都没写"
          )}
        </Box>
        <Divider variant="light" />
        <Box sx={{ textAlign: "left", px: "8px" }}>发布者: {userID}</Box>
      </Card>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ width: 320, maxWidth: "100%" }}
      >
        <MenuList>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <EditRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
