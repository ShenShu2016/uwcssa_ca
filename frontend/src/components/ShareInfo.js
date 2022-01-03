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
  const handleDownload = (e) => {
    e.preventDefault();
    const captureElement = document.querySelector("#qr-code");
    window.scrollTo(0, 0);
    html2canvas(captureElement, {
      useCORS: true,
      allowTaint: true,
      height: window.outerHeight + window.innerHeight,
      windowHeight: window.outerHeight + window.innerHeight,
      ignoreElements: (element) => {
        if (
          element.id === "delete1" ||
          element.id === "delete2" ||
          element.id === "delete3"
        ) {
          return true;
        }
      },
    })
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
  };

  return (
    <Dialog open={open} ref={innerRef} onClose={handleCLose} id="qr-code">
      <Box>
        <DialogTitle>分享</DialogTitle>
        <Divider />
        <Stack sx={{ px: 5, pt: 2, pb: 5 }}>
          <ListItemText
            id="delete1"
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
          <Tooltip
            title={`${
              download === false ? "Download QR-Code" : "Downloaded!🥳"
            }`}
            placement="top-end"
            TransitionComponent={Zoom}
            arrow
          >
            <ListItem
              button
              id="delete3"
              onClick={(e) => {
                handleDownload(e);
                setDownload(true);
              }}
            >
              <ListItemIcon>
                <ContentCopyIcon />
              </ListItemIcon>
              <ListItemText primary="点我下载二维码!" />
            </ListItem>
          </Tooltip>
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
              imgSrc="default"
            />
          </ListItem>
          <Box sx={{ maxWidth: "270px" }}>{children}</Box>
        </Stack>
      </Box>
    </Dialog>
  );
});
