import * as html2canvas from "html2canvas";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import QRCode from "./QRCode";
import { Zoom } from "@mui/material";

export const ShareInfoDialog = forwardRef((props, ref) => {
  const { title, url, children } = props;
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const [download, setDownload] = useState(false);
  const [loading, setLoading] = useState(false); //logging state
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
    setLoading(true);
    const captureElement = document.querySelector("#ShareImg");
    window.scrollTo(0, 0);
    //console.log(captureElement.offsetHeight);

    html2canvas(captureElement, {
      logging: true,
      letterRendering: 1,
      allowTaint: true,
      useCORS: true,
      // height: window.outerHeight + window.innerHeight,
      // windowHeight: window.outerHeight + window.innerHeight,
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
        const d = canvas.toDataURL("image/png");
        const w = window.open("about:blank", "image from canvas");
        w.document.write("<h1>如果没有下载成功 请长按保存以下图片</h1>");
        w.document.write("<img src='" + d + "' alt='from canvas'/>");
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const a = document.createElement("a");
        a.setAttribute("download", "uwcssa-qr-code.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
        setLoading(false);
      });
  };

  return (
    <Dialog open={open} ref={innerRef} onClose={handleCLose}>
      <Box id="ShareImg">
        <DialogTitle>分享</DialogTitle>
        <Divider />
        <Stack sx={{ px: 2, pt: 2, pb: 2 }} spacing={2}>
          <Tooltip
            title={`${copy === false ? "Copy Link" : "Copied!🥳"}`}
            placement="top-end"
            TransitionComponent={Zoom}
            arrow
          >
            <Button
              variant="contained"
              startIcon={<ContentCopyIcon />}
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
              点我复制链接
            </Button>
          </Tooltip>
          <Tooltip
            title={`${
              download === false ? "Download QR-Code" : "Downloaded!🥳"
            }`}
            placement="top-end"
            TransitionComponent={Zoom}
            arrow
          >
            <Button
              variant="contained"
              startIcon={<DownloadRoundedIcon />}
              id="delete3"
              onClick={(e) => {
                handleDownload(e);
                setDownload(true);
              }}
            >
              点我下载分享图片
            </Button>
          </Tooltip>
          <Box sx={{ maxWidth: "330px" }}>
            {title && (
              <Typography
                variant="h5"
                sx={{ fontWeight: "700", textAlign: "center" }}
              >
                {title}
              </Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <QRCode
              size={270}
              url={
                url ? `${window.location.origin}/${url}` : window.location.href
              }
              bgColor="white"
              fgColor="black"
              imgSizeRatio={0.2}
            />
          </Box>
          <Box sx={{ maxWidth: "330px" }} id="children">
            {children}
          </Box>
        </Stack>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Dialog>
  );
});
