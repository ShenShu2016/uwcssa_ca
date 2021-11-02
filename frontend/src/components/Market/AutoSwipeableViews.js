import { Box, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   stepper: {
//     padding: "0.5rem",
//     margin: "0 auto",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     flexGrow: "1",
//     width: "70%",
//     [theme.breakpoints.down("md")]: {
//       maxWidth: "900px",
//       width: "100%",
//     },
//   },
// }));

const AutoPlaySwipeableView = autoPlay(SwipeableViews);

export default function AutoSwipeableViews({ images }) {
  // const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  // const [autoPlay, setAutoPlay] = useState(false);
  // const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // const handleSwitch = () => {
  //   setAutoPlay(!autoPlay);
  //   console.log("AutoPlay", autoPlay);
  // };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${images})`,
          filter: "blur(10px)",
          zIndex: "-1",
          width: "100%",
          height: "100vh",
          position: "absolute",
        }}
      >
        something
      </Box>
      <IconButton
        color="info"
        aria-label="upload picture"
        component="span"
        onClick={handleBack}
        sx={{
          position: "absolute",
          left: "50px",
          top: "350px",
          borderRadius: "10px",
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        color="info"
        aria-label="upload picture"
        component="span"
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "50px",
          top: "350px",
          borderRadius: "10px",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Stack
        direction="column"
        justifyContent="center"
        zIndex={1}
        maxWidth="45%"
        position="absolute"
        marginLeft="auto"
        marginRight="auto"
        left="0"
        right="0"
        text-align="center"
      >
        <AutoPlaySwipeableView
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          autoplay={autoPlay}
        >
          {images.map((step, index) => (
            <div key={step}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    flex: "1",
                    // width: "100%",
                    // backgroundImage: step,
                  }}
                  src={step}
                  alt="images"
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableView>
        <Stack
          height="50px"
          direction="row"
          spacing={2}
          justifyContent="center"
          marginLeft="auto"
          marginRight="auto"
          left="0"
          right="0"
          text-align="center"
          position="absolute"
          bottom="-60px"
        >
          <Box
            component="img"
            src={images}
            maxHeight="100%"
            maxWidth="100%"
            borderRadius="5px"
          />
          <Box
            component="img"
            src={images}
            maxHeight="100%"
            maxWidth="100%"
            borderRadius="5px"
          />
          <Box
            component="img"
            src={images}
            maxHeight="100%"
            maxWidth="100%"
            borderRadius="5px"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
