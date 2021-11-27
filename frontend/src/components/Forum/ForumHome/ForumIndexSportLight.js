import {
    Button,
    Paper,
    Box,
    Typography,
    MobileStepper,
  } from "@mui/material";
//   import { Link } from "react-router-dom";
  import { useTheme } from "@mui/styles";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
  import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
  import React from "react";
//   import { useDispatch, useSelector } from "react-redux";
  import SwipeableViews from "react-swipeable-views";
  import { autoPlay } from "react-swipeable-views-utils";


const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default function ForumIndexMain() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
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
return(
    <Box sx={{
        textAlign:"center",
        mt:4,
    }}>
    <Box
      sx={{ fontWeight: 400, marginTop: "0.8rem", marginBottom: "1rem" }}
    >
      <Typography variant="h6">SPORTLIGHT</Typography>
    </Box>

    <Box sx={{ maxWidth: 1080, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography variant="subtitle2">
          <Button variant="text" target="_top" color="primary" href={`#`}>
            {images[activeStep].label}
            <ArrowForwardIcon />
          </Button>
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 1080,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            下一张
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            上一张
          </Button>
        }
      />
    </Box>
  </Box>
);

}