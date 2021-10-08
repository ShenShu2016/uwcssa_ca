import Box from "@material-ui/core/Box";
import { Button, Grid, Paper } from "@material-ui/core";
import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles,useTheme } from "@material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';
const useStyles = makeStyles((theme) => ({

    root: {
        background:"#fff",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",

    },
    mainContent:{
        padding: "2rem",
        maxwidth:"100%",
    },
    quickLink:{
        marginTop:"4rem",
        color: "primary",
    },
    title:{
        fontWeight:400,
        marginTop:"0.8rem",
        marginBottom:"1rem",
    },
    sportlight:{
        textAlign:"center",
        marginTop:"4rem",
    },

    })
)
//测试初始图片，后期可更换
const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const ForumLeftSide= () =>  {
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

    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Box className={classes.mainContent}>
                    <Box className={classes.title}>
                        <Typography variant="h5">
                            UWCSSA 论坛
                        </Typography>
                    </Box>
                    {/* forum type link */}
                    <Box className={classes.quickLink} >
                        {/* 后期动态改变 type: FourmTopic */}
                        <Grid container spacing={8}>
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    学习帮助
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>    
                            </Grid>
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    娱乐
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>   
                            </Grid>
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    大学和大学课程
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>   
                            </Grid>
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    生活
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>   
                            </Grid>
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    职业和工作
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>   
                            </Grid> 
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    住房
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>   
                            </Grid> 
                            <Grid item xs={1.5} sm={1.5} md={1.8} lg={1.8}>
                                <Typography variant="subtitle2">
                                    <Button
                                        variant="text"
                                        target="_top"
                                        color="primary"
                                        href={`#`}
                                    >
                                    商城
                                    <ArrowForwardIcon/>
                                    </Button> 
                                </Typography>   
                            </Grid>   
                        </Grid>
                    </Box>
                    {/* forum sportlight slide */}
                    <Box className={classes.sportlight}>
                        <Box className={classes.title}>
                            <Typography variant="h6">
                                SPORTLIGHT
                            </Typography>
                        </Box>
                        
                        <Box sx={{ maxWidth: 1080, flexGrow: 1 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'background.default',
                                }}
                            >
                            <Typography variant="subtitle2">
                                <Button
                                    variant="text"
                                    target="_top"
                                    color="primary"
                                    href={`#`}
                                >
                                {images[activeStep].label}
                                <ArrowForwardIcon/>
                                </Button> 
                            </Typography> 
                        
                            </Paper>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
                                        display: 'block',
                                        maxWidth: 1080,
                                        overflow: 'hidden',
                                        width: '100%',
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
                                    {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                    ) : (
                                    <KeyboardArrowRight />
                                    )}
                                </Button>
                                }
                                backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
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

                    
                </Box>
        </div>
    )
}



export default ForumLeftSide

