import { Box, Stack } from "@mui/material";
import React, { useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   contain: {
//     height: "100%",
//     width: "calc(100% - 360px)",
//     // bgcolor="black"
//     position: "relative",
//     overflow: "hidden",
//     float: "left",
//     [theme.breakpoints.down("md")]: {
//       width: "100%",
//       height: "50vh",
//     },
//   },
// }));

export default function SwipeViews({ images }) {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  console.log("maxSteps", maxSteps);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    // <Box className={classes.contain}>
    <Box width="100%" height="100%" position="relative" overflow="hidden">
      <Box
        sx={{
          backgroundImage: `url(${images[activeStep]})`,
          filter: "blur(10px)",
          zIndex: "-1",
          width: "100%",
          height: "100%",
          transform: "scale(1.1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        something
      </Box>
      {maxSteps <= 1 ? null : (
        <Box
          sx={{
            bgcolor: "white",
            left: "90px",
            zIndex: "2",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "25px",
          }}
        >
          <IconButton
            color="info"
            aria-label="upload picture"
            component="span"
            disabled={activeStep === 0 ? true : false}
            onClick={() => handleBack()}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>
      )}
      {maxSteps <= 1 ? null : (
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "25px",
            right: "40px",
            zIndex: "2",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <IconButton
            color="info"
            aria-label="upload picture"
            component="span"
            disabled={activeStep === maxSteps - 1 ? true : false}
            onClick={() => handleNext()}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}

      <Box
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          // bgcolor: "blue",
          top: "0",
          left: "0",
          right: "0",
          bottom: "60px",
          zIndex: "1",
          position: "absolute",
          margin: "auto",
        }}
      >
        <Box
          component="img"
          src={images[activeStep]}
          maxHeight="100%"
          maxWidth="100%"
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            margin: "auto",
            transform: `translate(-50%,-50%)`,
            width: "auto",
            height: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          height: "60px",
          // bgcolor: "red",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "1",
          position: "absolute",
          margin: "auto",
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          margin="10px"
          zIndex="5"
          justifyContent="center"
        >
          {images.map((img, imgKey) => {
            return (
              <Box
                key={imgKey}
                component="img"
                src={img}
                height="40px"
                width="40px"
                borderRadius="5px"
                sx={imgKey === activeStep ? null : { filter: "blur(1px)" }}
                onClick={() => setActiveStep(imgKey)}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
