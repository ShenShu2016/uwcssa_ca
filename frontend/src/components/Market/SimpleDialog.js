import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Tooltip } from "@mui/material";
import { Zoom } from "@mui/material";

export const SimpleDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const { contactEmail, contactPhone, contactWeChat } = props;
  const [copyPhone, setCopyPhone] = React.useState(false);
  const [copyEmail, setCopyEmail] = React.useState(false);
  const [copyWeChat, setCopyWeChat] = React.useState(false);
  const innerRef = useRef();
  const handleCLose = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
  }));
  return (
    <Dialog open={open} ref={innerRef} onClose={handleCLose}>
      <DialogTitle>卖家信息</DialogTitle>
      <List sx={{ pt: 0 }}>
        <Tooltip
          title={`${copyPhone === false ? "Copy Contact Phone" : "Copied!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <PhoneInTalkIcon />
            </ListItemIcon>
            <ListItemText
              primary={contactPhone}
              onClick={() => {
                navigator.clipboard.writeText(contactPhone);
                setCopyEmail(false);
                setCopyWeChat(false);
                setCopyPhone(true);
              }}
            />
          </ListItem>
        </Tooltip>
        <Tooltip
          title={`${copyEmail === false ? "Copy Contact Email" : "Copied!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              primary={contactEmail}
              onClick={() => {
                navigator.clipboard.writeText(contactEmail);
                setCopyEmail(true);
                setCopyWeChat(false);
                setCopyPhone(false);
              }}
            />
          </ListItem>
        </Tooltip>
        {contactWeChat ? (
          <Tooltip
            title={`${
              copyWeChat === false ? "Copy Contact WeChat" : "Copied!🥳"
            }`}
            placement="top-end"
            TransitionComponent={Zoom}
            arrow
          >
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText
                primary={contactWeChat}
                onClick={() => {
                  navigator.clipboard.writeText(contactWeChat);
                  setCopyEmail(false);
                  setCopyWeChat(true);
                  setCopyPhone(false);
                }}
              />
            </ListItem>
          </Tooltip>
        ) : null}
      </List>
    </Dialog>
  );
});
