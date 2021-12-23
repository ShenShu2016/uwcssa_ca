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
import Edit from "./Edit";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoticeIcons from "./NoticeIcons";
import { Typography } from "@mui/material";
import moment from "moment";
import { usePermit } from "../../Hooks/usePermit";

export default function Ticket({ item }) {
  const { content, assignee, assigneeID, title, userID, createdAt } = item;

  const [anchorEl, setAnchorEl] = useState(null);
  const isPermit = usePermit(null, "admin");

  const [editOpen, setEditOpen] = useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
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
            <IconButton
              aria-label="settings"
              onClick={handleClick}
              disabled={!isPermit}
            >
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
              <Box sx={{ width: "150px", textAlign: "left" }}>
                <Typography variant="body1">{title}</Typography>
              </Box>
            </Fragment>
          }
        />
        <Divider variant="light" />
        <Box sx={{ textAlign: "left", px: "8px" }}>
          <NoticeIcons item={item} />
        </Box>
        <Divider variant="light" />
        <Box sx={{ textAlign: "left", px: "8px", minHeight: "80px" }}>
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
        <Divider variant="light" />
        <Box sx={{ textAlign: "left", px: "8px" }}>
          发布时间: {moment(createdAt).format("MMM Do YY").slice(0, 6)}
        </Box>
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
            <ListItemIcon onClick={handleEditClickOpen}>
              <EditRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>编辑</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
      <Edit editOpen={editOpen} handleEditClose={handleEditClose} item={item} />
    </Box>
  );
}
