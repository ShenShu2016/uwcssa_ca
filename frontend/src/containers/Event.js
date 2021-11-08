import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Grid,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EventMain from "../components/Event/EventMain";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@mui/styles";
import { fetchEvents } from "../../src/redux/reducers/eventSlice";
import { useTitle } from "../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: "3rem",
  },
  title: {
    textAlign: "center",
    minWidth: "40%",
    maxWidth: "100%",
    paddingBottom: "1rem",
  },

  stepper: {
    maxWidth: "400",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  list: {
    marginTop: "5rem",

    height: "100%",
    paddingBottom: "2rem",
  },
  timeTag: {
    marginBottom: "1rem",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "425px",
    },
  },

  seeMore: {
    marginTop: "1rem",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

export default function Event() {
  useTitle("UWCSSA活动");
  const classes = useStyles();
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
  // const handleClick = () => {
  //   console.info("You clicked the Chip.");
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const { events } = useSelector((state) => state.event);

  const renderList = events.map((event) => {
    return <EventMain event={event} key={event.id} />;
  });

  return (
    <div>
      <Box className={classes.root}>
        <Container size="lg">
          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <span style={{ cursor: "not-allowed" }}>
                <Button color="inherit" component={Link} to="/">
                  主页
                </Button>
              </span>
              <Typography>{""}</Typography>
            </Breadcrumbs>
          </Box>
          <Box className={classes.title}>
            <Typography variant="h4" className={classes.title}>
              UWCSSA活动集锦
            </Typography>
          </Box>
        </Container>
        <div>
          <Box sx={{ backgroundColor: "#17202A", padding: "3rem" }}>
            <Box className={classes.stepper}>
              <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
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
                  <Typography>{images[activeStep].label}</Typography>
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
                            maxWidth: 400,
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
                      下一页
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
                      上一页
                    </Button>
                  }
                />
              </Box>
            </Box>
          </Box>
        </div>
        <Box className={classes.list}>
          <Typography variant="h4" className={classes.title}>
            近期活动
          </Typography>
          <Box className={classes.timeTag}>
            {/* <Chip
              label="今天"
              variant="outlined"
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginBlock: "0.3rem",
              }}
              onClick={handleClick}
            />
            <Chip
              label="明天"
              variant="outlined"
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginBlock: "0.3rem",
              }}
              onClick={handleClick}
            />
            <Chip
              label="这周"
              variant="outlined"
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginBlock: "0.3rem",
              }}
              onClick={handleClick}
            />
            <Chip
              label="下周"
              variant="outlined"
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginBlock: "0.3rem",
              }}
              onClick={handleClick}
            />
            <Chip
              label="下月"
              variant="outlined"
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                marginBlock: "0.3rem",
              }}
              onClick={handleClick}
            /> */}
          </Box>
        </Box>

        <div>
          <Box sx={{ bgcolor: "#EBF5FB", paddingBottom: "3rem" }}>
            <Container>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                padding="0 1rem"
              >
                {renderList}
              </Grid>

              <Box className={classes.seeMore}>
                <Button variant="outlined" component={Link} to="" disabled>
                  查看更多
                </Button>
              </Box>
            </Container>
          </Box>
        </div>
      </Box>
    </div>
  );
}
