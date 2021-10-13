import React from "react";
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
  Link,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

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
  const eventPosts = [
    {
      title: "Featured post",
      date: "10/30/2021",
      category: "Movie",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/66/Aria_Of_A_Starless_Night_poster.jpg",
      imageText: "Image Text",
    },
    {
      title: "Post title",
      date: "10/30/2021",
      category: "Movie",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/66/Aria_Of_A_Starless_Night_poster.jpg",
      imageText: "Image Text",
    },
    {
      title: "Post title",
      date: "10/30/2021",
      category: "Movie",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/66/Aria_Of_A_Starless_Night_poster.jpg",
      imageText: "Image Text",
    },
    {
      title: "Post title",
      date: "10/30/2021",
      category: "Movie",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/66/Aria_Of_A_Starless_Night_poster.jpg",
      imageText: "Image Text",
    },
  ];
  return (
    <div>
      <Box className={classes.root}>
        <Container size="lg">
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
              {eventPosts.map((post) => {
                return (
                  <Grid item xs={12} md={6} key={post.title} post={post}>
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {post.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {post.date} | {post.category}
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">分享</Button>
                          <Button size="small" component={Link} to="">
                            了解更多
                          </Button>
                        </CardActions>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMedia}
                          image={post.image}
                          title={post.imageTitle}
                        />
                      </Hidden>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Box className={classes.seeMore}>
              <Button variant="outlined" component={Link} to="">
                查看更多
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
