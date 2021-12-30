import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import QRCode from "../QRCode";
import loadingFile from "./loading.gif";
import { red } from "@mui/material/colors";

export const Loading = (status = null) => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress < 99 && buffer < 99) {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      } else if (progress >= 99 || buffer >= 99) {
        setProgress(99);
        setBuffer(99);
      }
      // if (status === "succeeded") {
      //   setProgress(100);
      //   console.log("Started!!!!!!!!!", status);
      // }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        height: "500px",
        width: "700px",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Box
        position="relative"
        height="250px"
        width="250px"
        sx={{
          marginBottom: "5rem",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Box
          component="img"
          src={loadingFile}
          alt="Loading"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "inline-flex",
            bottom: 0,
            right: 0,
          }}
        >
          <CircularProgress
            size={50}
            sx={{
              color: red[100],
            }}
          />{" "}
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          position: "absolute",
          top: "85%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Loading...
      </Typography>
      <Box sx={{ color: red[200], mb: "10rem" }}>
        <LinearProgress
          sx={{ bottom: "-150px" }}
          color="inherit"
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
      <QRCode
        size={200}
        url="https://google.com"
        bgColor="white"
        imgSrc="default"
        fgColor="black"
        imgSizeRatio={0.2}
      />
    </Box>
  );
};
