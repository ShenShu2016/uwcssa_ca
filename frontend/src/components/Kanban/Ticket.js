import {
  Backdrop,
  Card,
  CircularProgress,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
import CircleIcon from "@mui/icons-material/Circle";
import CloseTicket from "./CloseTicket";
import CustomAvatar from "../CustomMUI/CustomAvatar";
import Edit from "./Edit";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { GetStatusColor } from "./ByStatus";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NoticeIcons from "./NoticeIcons";
import { Typography } from "@mui/material";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import moment from "moment";
import { updateKanbanDetail } from "../../redux/slice/kanbanSlice";
import { usePermit } from "../../Hooks/usePermit";

const KanbanStatus = ["IDEA", "TODO", "INPROGRESS", "DONE", "WASTED"];

export default function Ticket({ item }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { username } = useSelector((state) => state.userAuth.user);
  const {
    id,
    content,
    assignee,
    assigneeID,
    title,
    userID,
    createdAt,
    kanbanStatus,
  } = item;

  const [anchorEl, setAnchorEl] = useState(null);
  const isPermit = usePermit(null, "staff");

  const [editOpen, setEditOpen] = useState(false);
  const [closeTicketOpen, setCloseTicketOpen] = useState(false);
  const handleEditClickOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleCloseTicketClickOpen = () => {
    setCloseTicketOpen(true);
  };
  const handleCloseTicketClose = () => {
    setCloseTicketOpen(false);
  };
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeStatus = async (status) => {
    setLoading(true);
    const updateKanbanInput = {
      id: id,
      kanbanStatus: status,
      lastUpdatedID: username,
    };
    console.log("updateKanbanInput", updateKanbanInput);

    await dispatch(updateKanbanDetail({ updateKanbanInput }));
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
              disabled={!(isPermit && window.location.pathname === "/kanban")}
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
        <Box
          sx={{
            display:
              (kanbanStatus === "WASTED" || kanbanStatus === "DONE") && "none",
          }}
        >
          <Box sx={{ textAlign: "left", px: "8px", minHeight: "80px" }}>
            {content ? (
              <div sx={{ overflow: "auto" }}>
                <Typography
                  variant="body1"
                  style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
                >
                  {content}
                </Typography>
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
          <MenuItem
            onClick={() => {
              handleEditClickOpen();
              handleClose();
            }}
          >
            <ListItemIcon>
              <EditRoundedIcon />
            </ListItemIcon>
            <ListItemText>编辑</ListItemText>
          </MenuItem>

          {KanbanStatus.map((status) => {
            return (
              <Box key={status}>
                {kanbanStatus !== status && (
                  <MenuItem
                    onClick={() => {
                      handleChangeStatus(status);
                    }}
                  >
                    <ListItemIcon>
                      <CircleIcon
                        fontSize="small"
                        sx={{ color: GetStatusColor(status) }}
                      />
                    </ListItemIcon>
                    <ListItemText>移到: {status}</ListItemText>
                  </MenuItem>
                )}
              </Box>
            );
          })}
          {(kanbanStatus === "WASTED" || kanbanStatus === "DONE") && (
            <Box>
              <MenuItem
                onClick={() => {
                  handleCloseTicketClickOpen();
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <VisibilityOffRoundedIcon />
                </ListItemIcon>
                <ListItemText>隐藏不再显示</ListItemText>
              </MenuItem>
            </Box>
          )}
        </MenuList>
      </Menu>
      <Edit editOpen={editOpen} handleEditClose={handleEditClose} item={item} />
      <CloseTicket
        closeTicketOpen={closeTicketOpen}
        handleCloseTicketClose={handleCloseTicketClose}
        item={item}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
