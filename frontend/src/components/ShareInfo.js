import * as html2canvas from "html2canvas";

import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import QRCode from "./QRCode";

export const ShareInfoDialog = forwardRef((props, ref) => {
  const { title, url, children } = props;
  const [open, setOpen] = useState(false);
  const [shareImg, setShareImg] = useState();

  const [loading, setLoading] = useState(false); //logging state
  const innerRef = useRef();
  const handleCLose = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
  }));

  const handleDownload = async () => {
    setLoading((pre) => !pre);
    window.scrollTo(0, 0);
    const captureElement = document.querySelector("#ShareImg");
    console.log(captureElement);
    await new Promise((resolve) => {
      html2canvas(captureElement, {
        logging: true,
        letterRendering: 1,
        allowTaint: true,
        useCORS: true,
      })
        .then((canvas) => {
          canvas.style.display = "none";
          document.body.appendChild(canvas);
          return canvas;
        })
        .then((canvas) => {
          const d = canvas.toDataURL("image/png");
          setShareImg(d);
          console.log(d);
          canvas.remove();
          setLoading(false);
          resolve();
          console.log("还没结束");
        });
    });
    console.log("完全结束啦");
  };

  return (
    <Dialog open={open} ref={innerRef} onClose={handleCLose}>
      <DialogTitle>分享</DialogTitle>
      <Divider />
      {shareImg ? (
        <div>
          <Box sx={{ textAlign: "center", py: 1 }}>
            <Typography variant="h5">长按保存以下图片</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <img src={shareImg} alt="from canvas" style={{ width: "100%" }} />
          </Box>
        </div>
      ) : (
        <div>
          <Button
            fullWidth
            variant="contained"
            startIcon={<DownloadRoundedIcon />}
            id="delete3"
            onClick={() => {
              handleDownload();
            }}
          >
            点我下载分享图片
          </Button>
          <Typography variant="h5">分享预览：</Typography>
          <Paper
            sx={{ m: 2 }}
            elevation={20}
            onClick={() => {
              handleDownload();
            }}
          >
            <Box id="ShareImg">
              <DialogTitle>分享</DialogTitle>
              <Divider />
              <Stack sx={{ px: 2, pt: 2, pb: 2 }} spacing={2}>
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
                    size={250}
                    url={
                      url
                        ? `${window.location.origin}/${url}`
                        : window.location.href
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
          </Paper>
        </div>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Dialog>
  );
});
