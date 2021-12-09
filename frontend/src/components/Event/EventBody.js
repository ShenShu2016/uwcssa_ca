import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CircularProgress,
  Container,
  // Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getImage, selectImageById } from "../../redux/reducers/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventComments from "./EventDetail/Comment/EventComments";
import EventCommentsPost from "./EventDetail/Comment/EventCommentsPost";
import FlagIcon from "@mui/icons-material/Flag";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";
import S3Image from "../S3/S3Image";
import SignUpRequest from "../Auth/SignUpRequireDialog";
import Storage from "@aws-amplify/storage";
import TopicIcon from "@mui/icons-material/Topic";
import moment from "moment";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  action: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
  },
  join: {
    height: 45,
    margin: 8,
  },
  alert: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "330px",
    },
  },
  button: {
    [theme.breakpoints.up("sm")]: {
      width: "150px",
    },
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      {/* 为什么这里要加上typography？？？？ */}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EventBody({ event }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { userAuth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const userInfo = useSelector((state) => state.userAuth);
  const [posterURL, setPosterURL] = useState(null);
  //const [qrCodeURL, setQrCodeURL] = useState(null);
  const [backGroundImgURL, setBackGroundImgURL] = useState(null);
  const {
    title,
    startDate,
    endDate,
    location,
    content,
    backGroundImgS3Key,
    posterImgS3Key,
    qrCodeImgS3Key,
    topic,
    sponsor,
    eventParticipants,
  } = event;
  const posterImgKeys = useSelector((state) =>
    selectImageById(state, posterImgS3Key)
  );
  // useEffect(() => {
  //   const getPoster = async () => {
  //     try {
  //       const posterAccessURL = await Storage.get(posterImgS3Key, {
  //         level: "public",
  //         expires: 120,
  //         download: false,
  //       });
  //       setPosterURL(posterAccessURL);
  //     } catch (error) {
  //       console.error("error accessing the Image from s3", error);
  //       setPosterURL(null);
  //     }
  //   };
  //   if (posterImgS3Key) {
  //     // console.log(posterImgS3Key);
  //     getPoster();
  //   }
  // }, [posterImgS3Key]);
  // console.log("posterURL", posterURL);
  // console.log("event", event);

  useEffect(() => {
    const getPoster = async () => {
      try {
        const response = await dispatch(
          getImage({ url: [posterImgS3Key], id: posterImgS3Key })
        );
        setPosterURL(response.payload.imgUrl);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setPosterURL(null);
      }
    };
    if (posterImgS3Key && posterImgKeys === undefined) {
      getPoster();
    } else if (posterImgS3Key && posterImgKeys !== undefined) {
      setPosterURL(Object.values(posterImgKeys.images)[0]);
    } else if (posterImgS3Key === null) {
      setPosterURL(
        "https://media-exp1.licdn.com/dms/image/C5603AQHwt3NgA8rYHw/profile-displayphoto-shrink_200_200/0/1616353723146?e=1640822400&v=beta&t=wzrF9eUlq7YnsTg-1cpH4LrYXm2oCCOHHHp0ac1hmgM"
      );
    }
  }, [posterImgS3Key, posterImgKeys, dispatch]);

  // useEffect(() => {
  //   const getQrCode = async () => {
  //     try {
  //       const qrCodeAccessURL = await Storage.get(qrCodeImgS3Key, {
  //         level: "public",
  //         expires: 120,
  //         download: false,
  //       });
  //       setQrCodeURL(qrCodeAccessURL);
  //     } catch (error) {
  //       console.error("error accessing the Image from s3", error);
  //       setQrCodeURL(null);
  //     }
  //   };
  //   if (qrCodeImgS3Key) {
  //     getQrCode();
  //   }
  // }, [qrCodeImgS3Key]);

  useEffect(() => {
    const getQrCode = async () => {
      try {
        const backGroundImgURL = await Storage.get(backGroundImgS3Key, {
          level: "public",
          expires: 120,
          download: false,
        });
        setBackGroundImgURL(backGroundImgURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setBackGroundImgURL(null);
      }
    };
    if (backGroundImgS3Key) {
      getQrCode();
    }
  }, [backGroundImgS3Key]);

  return (
    <Box>
      {event.startDate ? (
        <div>
          <Box>
            <div>
              {/* <Box>
                <CardMedia
                  style={{
                    // maxWidth: "100%",
                    opacity: 0.4,
                    height: "350px",
                    objectFit: "cover",
                    // background: `url(${backGroundImgURL})`,
                    // blurRadius: 1,
                    // backgroundSize: "contained",
                    // borderStyle: "outset",
                    // "linear-gradient(to top, rgba(255,0,0,0) 0 70%, rgba(63, 81, 181, 1) )",
                  }}
                  component="img"
                  image={backGroundImgURL}
                />
              </Box>
              <Card
                sx={{
                  maxWidth: 600,
                  minWidth: 300,
                  position: "absolute",
                  top: "310px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "2",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  sx={{
                    display: "flex",
                    objectFit: "cover",
                    height: "300px",
                  }}
                  component="img"
                  image={posterURL}
                />
              </Card> */}
              <CardActionArea
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = posterURL;
                }}
              >
                <Box
                  sx={{
                    opacity: 1, //如果背景要虚的话下面的主要图片也虚了
                    backgroundImage: `url(${backGroundImgURL})`,
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                >
                  <Box
                    component="img"
                    src={posterURL}
                    maxHeight="100%"
                    maxWidth="100%"
                    sx={{
                      opacity: 1,
                      position: "relative",
                      top: "50%",
                      left: "50%",
                      margin: "auto",
                      transform: `translate(-50%,-50%)`,
                      width: "auto",
                      height: "300px",
                    }}
                  />
                </Box>
              </CardActionArea>
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                marginBottom: "1rem",
                bgcolor: "#FFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {moment(startDate).format("YYYY") ===
                moment(endDate).format("YYYY") ? (
                  <Typography variant="h6" color="primary" gutterBottom>
                    时间：{startDate.slice(0, 4)}年{startDate.slice(5, 7)}月
                    {startDate.slice(8, 10)}号 {startDate.slice(11, 16)} -{" "}
                    {endDate.slice(5, 7)}月{endDate.slice(8, 10)}号{" "}
                    {endDate.slice(11, 16)}
                  </Typography>
                ) : (
                  <Typography variant="h6" color="primary" gutterBottom>
                    时间：{startDate.slice(0, 4)} 年{startDate.slice(5, 7)}月
                    {startDate.slice(8, 10)}号 {startDate.slice(11, 16)} -{" "}
                    {endDate.slice(0, 4)}年{endDate.slice(5, 7)}月
                    {endDate.slice(8, 10)}号 {endDate.slice(11, 16)}
                  </Typography>
                )}
                <Typography component="div" variant="h5" gutterBottom>
                  <b>{title}</b>
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="div"
                  gutterBottom
                >
                  {location}
                </Typography>
              </Box>
            </Box>
          </Box>
          <div sx={{ width: "100%" }}>
            <Container
              size="md"
              sx={{ display: "flex", flexWrap: "wrap-reverse" }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="活动详情" {...a11yProps(0)} />
                  <Tab label="活动讨论" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <Box className={classes.action}>
                {endDate > moment().format() ? (
                  <div>
                    {userInfo.isAuthenticated ? (
                      <div>
                        {event.eventParticipants.items.some(
                          (item) => item.userID === userAuth.user.username
                        ) === false ? (
                          <Box className={classes.button}>
                            <Button
                              size="large"
                              // variant="outlined"
                              fullWidth
                              sx={{
                                background:
                                  "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                "& > *": {
                                  textTransform: "none !important",
                                },
                                border: 0,
                                boxShadow:
                                  "0 3px 5px 2px rgba(33, 203, 243, .3)",
                                color: "white",
                                padding: "0 30px",
                                borderRadius: "20rem",
                              }}
                              className={classes.join}
                              variant={"contained"}
                              color={"primary"}
                              disableRipple
                              component={Link}
                              to={`/event/${event.id}/eventSignUp`}
                              startIcon={<AppRegistrationIcon />}
                            >
                              报名
                            </Button>
                          </Box>
                        ) : (
                          <Box className={classes.alert}>
                            <Alert severity="success">你已经报过名啦~🥳</Alert>
                          </Box>
                        )}
                      </div>
                    ) : (
                      <SignUpRequest />
                    )}
                  </div>
                ) : (
                  <Box className={classes.alert}>
                    <Alert severity="info">活动结束啦~🥳</Alert>
                  </Box>
                )}
              </Box>
            </Container>

            <Box sx={{ width: "100%", bgcolor: "#F9F9F9" }}>
              <TabPanel value={value} index={0}>
                {/* 这里问题挺多的，为什么在tabpanel里面不能加box？？ */}
                <Container size="md">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 6, sm: 8, md: 12 }}
                    >
                      <Grid item xs={6} sm={8} md={8}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              gutterBottom
                            >
                              <b>详情</b>
                            </Typography>
                            {sponsor ? (
                              <Typography variant="body2" gutterBottom>
                                <FlagIcon
                                  color="action"
                                  sx={{ float: "left", marginRight: "10px" }}
                                />
                                主办方/赞助方： {sponsor}
                              </Typography>
                            ) : null}
                            {location ? (
                              <Typography variant="body2" gutterBottom>
                                <LocationOnIcon
                                  color="action"
                                  sx={{ float: "left", marginRight: "10px" }}
                                />
                                {location}
                              </Typography>
                            ) : null}
                            {topic.name ? (
                              <Typography variant="body2" gutterBottom>
                                <TopicIcon
                                  color="action"
                                  sx={{
                                    float: "left",
                                    marginRight: "10px",
                                  }}
                                />
                                {topic.name}
                              </Typography>
                            ) : null}
                            {endDate > moment().format() ? (
                              <Typography variant="body2" gutterBottom>
                                <AccessTimeIcon
                                  color="action"
                                  sx={{ float: "left", marginRight: "10px" }}
                                />
                                ComingSoon
                              </Typography>
                            ) : (
                              <Typography variant="body2" gutterBottom>
                                <AccessTimeIcon
                                  color="action"
                                  sx={{ float: "left", marginRight: "10px" }}
                                />
                                InProgress
                              </Typography>
                            )}
                            <Box sx={{ my: 3 }}>
                              <Typography
                                variant="body1"
                                // sx={{ marginTop: "2rem" }}
                                component="span"
                                style={{
                                  whiteSpace: "pre-wrap",
                                  wordBreak: "break-word",
                                }}
                                gutterBottom
                              >
                                {content}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={6} sm={8} md={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              gutterBottom
                            >
                              <b>参与者</b>
                            </Typography>
                            {eventParticipants.items.length === 0 ? (
                              <Typography
                                variant="h6"
                                sx={{ textAlign: "center" }}
                                gutterBottom
                              >
                                已有0人报名
                              </Typography>
                            ) : (
                              <Typography
                                variant="h6"
                                sx={{ textAlign: "center" }}
                                gutterBottom
                              >
                                已有
                                {eventParticipants.items.reduce(function (
                                  sum,
                                  items
                                ) {
                                  return sum + items.numberOfPeople;
                                },
                                0)}
                                人报名
                              </Typography>
                            )}
                          </CardContent>
                          {/* <Divider variant="middle" />
                          <CardActions className={classes.action}>
                            {endDate > moment().format() ? (
                              <div>
                                {userInfo.isAuthenticated ? (
                                  <div>
                                    {event.eventParticipants.items.some(
                                      (item) =>
                                        item.userID === userAuth.user.username
                                    ) === false ? (
                                      <Button
                                        size="large"
                                        // variant="outlined"
                                        sx={{ borderRadius: "20rem" }}
                                        className={classes.join}
                                        variant={"contained"}
                                        color={"primary"}
                                        disableRipple
                                        component={Link}
                                        to={`/event/${event.id}/eventSignUp`}
                                        startIcon={<AppRegistrationIcon />}
                                      >
                                        报名
                                      </Button>
                                    ) : (
                                      <Typography variant="subtitle1">
                                        你已经报过名啦~🥳
                                      </Typography>
                                    )}
                                  </div>
                                ) : (
                                  <SignUpRequest />
                                )}
                              </div>
                            ) : (
                              <Typography variant="subtitle1">
                                报名结束啦~🥳
                              </Typography>
                            )}
                          </CardActions> */}
                        </Card>
                      </Grid>
                      <Grid item xs={6} sm={8} md={8}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              gutterBottom
                            >
                              <b>联系方式</b>
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              如果你对此活动有任何疑问可以扫描以下二维码
                            </Typography>
                            {userInfo.isAuthenticated ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {qrCodeImgS3Key ? (
                                  // <CardMedia
                                  //   component="img"
                                  //   style={{
                                  //     width: "auto",
                                  //     maxHeight: "150px",
                                  //   }}
                                  //   image={qrCodeURL}
                                  // />
                                  <S3Image
                                    S3Key={qrCodeImgS3Key}
                                    style={{
                                      width: "auto",
                                      maxHeight: "150px",
                                    }}
                                  />
                                ) : (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Typography variant="subtitle1">
                                      暂无二维码
                                    </Typography>
                                  </Box>
                                )}
                              </Box>
                            ) : (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Typography
                                  variant="subtitle1"
                                  sx={{ marginBottom: "3rem" }}
                                >
                                  需要登入才能扫描哦 ~
                                </Typography>
                              </Box>
                            )}
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* <Typography
                    variant="subtitle1"
                    sx={{ marginTop: "3rem" }}
                    gutterBottom
                  >
                    <b>如果你对此活动有任何疑问可以扫描以下二维码</b>
                  </Typography>

                  {userInfo.isAuthenticated ? (
                    <div>
                      {qrCodeURL ? (
                        <CardMedia
                          component="img"
                          style={{
                            width: "auto",
                            maxHeight: "150px",
                            marginBottom: "3rem",
                          }}
                          image={qrCodeURL}
                        />
                      ) : (
                        <Typography
                          variant="subtitle1"
                          sx={{ marginBottom: "3rem" }}
                        >
                          暂无二维码
                        </Typography>
                      )}
                      <CardActions>
                        <Button
                          size="small"
                          component={Link}
                          to={`/event/${event.id}/eventSignUp`}
                        >
                          报名
                        </Button>
                      </CardActions>
                    </div>
                  ) : (
                    <div>
                      <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: "3rem" }}
                      >
                        需要登入才能扫描哦
                      </Typography>
                      <CardActions>
                        <SignUpRequest />
                      </CardActions>
                    </div>
                  )} */}

                  {/* <CardActions>
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
                </CardActions> */}
                </Container>
                {/* {content}
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
              )} */}
              </TabPanel>
              <TabPanel value={value} index={1} component={"div"}>
                <Card>
                  <CardContent>
                    <EventCommentsPost event={event} />
                    <EventComments event={event} />
                  </CardContent>
                </Card>
              </TabPanel>
            </Box>
          </div>
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Box>
  );
}
