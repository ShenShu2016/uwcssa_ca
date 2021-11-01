import { Box, Button, MobileStepper, useTheme } from "@mui/material";
import React, { useState } from "react";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: "0.5rem",
    margin: "0 auto",
    maxHeight: "100%",
    maxWidth: "100%",
    flexGrow: "1",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "900px",
      width: "100%",
    },
  },
}));

const AutoPlaySwipeableView = autoPlay(SwipeableViews);

export default function AutoSwipeableViews({ images, autoplay }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box className={classes.stepper}>
      {/* <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            ></Paper> */}
      <AutoPlaySwipeableView
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoplay={autoplay ? autoplay : true}
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
                  width: "100%",
                }}
                src={step}
                alt="images"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableView>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        // sx={{ bgcolor: "#6a1b9a" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            下一页
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            上一页
          </Button>
        }
      />
    </Box>
  );
}
