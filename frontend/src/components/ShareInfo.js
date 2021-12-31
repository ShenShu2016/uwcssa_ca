import {
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QRCode from "./QRCode";
import { Zoom } from "@mui/material";

export const ShareInfoDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const [download, setDownload] = useState(false);
  const qrRef = useRef(null);
  const innerRef = useRef();
  const handleCLose = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
  }));
  const handleDownload = () => {
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "uwcssa-market-qr-code.png";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <Dialog open={open} ref={innerRef} onClose={handleCLose}>
      <DialogTitle>分享</DialogTitle>
      <Divider />
      <List sx={{ p: 5 }}>
        <ListItemText
          primary="复制链接/截图分享二维码"
          primaryTypographyProps={{
            fontSize: "12px",
            fontWeight: "light",
          }}
          inset={true}
        />

        <Tooltip
          title={`${copy === false ? "Copy Link" : "Copied!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText
              primary="点我复制链接!"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopy(true);
              }}
            />
          </ListItem>
        </Tooltip>
        <ListItem ref={qrRef}>
          <QRCode
            size={200}
            url={window.location.href}
            bgColor="white"
            fgColor="black"
            imgSizeRatio={0.2}
            imgSrc="default"
          />
        </ListItem>
        <Tooltip
          title={`${download === false ? "Download QR-Code" : "Downloaded!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText
              primary="点我下载二维码!"
              onClick={() => {
                handleDownload();
                setDownload(true);
              }}
            />
          </ListItem>
        </Tooltip>
      </List>
    </Dialog>
  );
});
