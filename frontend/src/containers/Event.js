import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Typography,
  Container,
  Chip,
  Grid,
  Card,
  CardContent,
  Hidden,
  CardMedia,
  Button,
  Paper,
  MobileStepper,
  useTheme,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Breadcrumbs,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../redux/actions/eventActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginBottom: "2rem",
    marginTop: "3rem",
  },
  title: {
    textAlign: "center",
    minWidth: "40%",
    maxWidth: "100%",
    paddingTop: "1rem",
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
    border: "solid",
    borderRadius: 40,
    height: "100%",
    paddingBottom: "2rem",
  },
  timeTag: {
    marginBottom: "1rem",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "420px",
    },
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
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
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const userInfo = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEvents());
  }, [dispatch]);

  const { events } = useSelector((state) => state.allEvents);

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
          <Box className={classes.list}>
            <Typography variant="h4" className={classes.title}>
              近期活动
            </Typography>
            <Box className={classes.timeTag}>
              <Chip
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
              />
            </Box>
            <Grid container spacing={4} padding="1rem">
              {events.map((event) => {
                return (
                  <Grid item xs={12} md={6} key={event.title}>
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {event.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {event.startDate} | {event.topic.name} |{" "}
                            {event.location} | {event.status}
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            {event.content}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {userInfo.isAuthenticated ? (
                            <Button
                              size="small"
                              component={Link}
                              to={`/event/${event.id}/eventSignUp`}
                            >
                              报名
                            </Button>
                          ) : (
                            <SignUpRequest />
                          )}
                          <Button size="small" component={Link} to="" disabled>
                            了解更多
                          </Button>
                        </CardActions>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMedia}
                          image={event.poster}
                        />
                      </Hidden>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Box className={classes.seeMore}>
              <Button variant="outlined" component={Link} to="" disabled>
                查看更多
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignUpRequest = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        报名
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Oops！"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            需要登录才能报名哦~ 如果你还没有账户，你可以现在就注册一个（免费）。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to="/SignUp">
            注册
          </Button>
          <Button component={Link} to="/signIn">
            登入
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
