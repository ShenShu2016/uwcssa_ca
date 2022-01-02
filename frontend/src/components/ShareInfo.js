import * as html2canvas from "html2canvas";

import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
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
  const { title, url, children } = props;
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const [download, setDownload] = useState(false);
  const innerRef = useRef();
  const handleCLose = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
  }));
  const handleDownload = () => {
    let delete1 = document.getElementById("delete1");
    let delete2 = document.getElementById("delete2");
    let delete3 = document.getElementById("delete3");
    delete1.parentNode.removeChild(delete1);
    delete2.parentNode.removeChild(delete2);
    delete3.parentNode.removeChild(delete3);
    const captureElement = document.querySelector("#qr-code");

    html2canvas(captureElement)
      .then((canvas) => {
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        return canvas;
      })
      .then((canvas) => {
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const a = document.createElement("a");
        a.setAttribute("download", "uwcssa-qr-code.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
      });

    const parent1 = document.getElementById("parent1");
    const parent2 = document.getElementById("parent2");
    const parent3 = document.getElementById("parent3");
    parent1.appendChild(delete1);
    parent2.appendChild(delete2);
    parent3.appendChild(delete3);
  };

  return (
    <Dialog open={open} ref={innerRef} onClose={handleCLose}>
      <Box id="qr-code">
        <DialogTitle>分享</DialogTitle>
        <Divider />
        <Stack sx={{ px: 5, pt: 2, pb: 5 }} >
          <Box id="parent1">
            <ListItemText
              id="delete1"
              primary="复制链接/截图分享二维码"
              primaryTypographyProps={{
                fontSize: "12px",
                fontWeight: "light",
              }}
              inset={true}
            />
          </Box>
          <Box id="parent2">
            <Tooltip
              title={`${copy === false ? "Copy Link" : "Copied!🥳"}`}
              placement="top-end"
              TransitionComponent={Zoom}
              arrow
            >
              <ListItem
                button
                id="delete2"
                onClick={() => {
                  navigator.clipboard.writeText(
                    url
                      ? `${window.location.origin}/${url}`
                      : window.location.href
                  );
                  setCopy(true);
                }}
              >
                <ListItemIcon>
                  <ContentCopyIcon />
                </ListItemIcon>
                <ListItemText primary="点我复制链接!" />
              </ListItem>
            </Tooltip>
            <Box id="parent3">
              <Tooltip
                title={`${
                  download === false ? "Download QR-Code" : "Downloaded!🥳"
                }`}
                placement="top-end"
                TransitionComponent={Zoom}
                arrow
                id="parent3"
              >
                <ListItem
                  button
                  id="delete3"
                  onClick={() => {
                    handleDownload();
                    setDownload(true);
                  }}
                >
                  <ListItemIcon>
                    <ContentCopyIcon />
                  </ListItemIcon>
                  <ListItemText primary="点我下载二维码!" />
                </ListItem>
              </Tooltip>
            </Box>
          </Box>
          <ListItem sx={{ maxWidth: "270px" }}>
            {title && (
              <ListItemText
                primary={title}
                primaryTypographyProps={{
                  // fontSize: "12px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              />
            )}
          </ListItem>
          <ListItem>
            <QRCode
              size={200}
              url={
                url ? `${window.location.origin}/${url}` : window.location.href
              }
              bgColor="white"
              fgColor="black"
              imgSizeRatio={0.2}
            />
          </ListItem>
          <Box sx={{ maxWidth: "270px" }}>{children}</Box>
        </Stack>
      </Box>
    </Dialog>
  );
});
