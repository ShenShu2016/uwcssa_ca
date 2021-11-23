import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import EventComments from "./EventDetail/Comment/EventComments";
import EventCommentsPost from "./EventDetail/Comment/EventCommentsPost";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SignUpRequest from "../Auth/SignUpRequireDialog";
import Storage from "@aws-amplify/storage";
import { useSelector } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import TopicIcon from "@mui/icons-material/Topic";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
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
  const [value, setValue] = useState(0);
  const { userAuth } = useSelector((state) => state);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const userInfo = useSelector((state) => state.userAuth);
  const [posterURL, setPosterURL] = useState(null);
  const [qrCodeURL, setQrCodeURL] = useState(null);
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

  useEffect(() => {
    const getPoster = async () => {
      try {
        const posterAccessURL = await Storage.get(posterImgS3Key, {
          level: "public",
          expires: 120,
          download: false,
        });
        setPosterURL(posterAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setPosterURL(null);
      }
    };
    if (posterImgS3Key) {
      // console.log(posterImgS3Key);
      getPoster();
    }
  }, [posterImgS3Key]);
  // console.log("posterURL", posterURL);
  // console.log("event", event);

  useEffect(() => {
    const getQrCode = async () => {
      try {
        const qrCodeAccessURL = await Storage.get(qrCodeImgS3Key, {
          level: "public",
          expires: 120,
          download: false,
        });
        setQrCodeURL(qrCodeAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setQrCodeURL(null);
      }
    };
    if (qrCodeImgS3Key) {
      getQrCode();
    }
  }, [qrCodeImgS3Key]);

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
          <Container size="md">
            <div>
              <Box>
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
              </Card>
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
                <Typography variant="subtitle1" component="div" color="red">
                  <b>
                    {startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
                    {startDate.slice(11, 16)} - {endDate.slice(11, 16)}
                  </b>
                </Typography>
                <Typography component="div" variant="h5" gutterBottom>
                  {title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  gutterBottom
                >
                  {location}
                </Typography>
              </Box>
            </Box>
          </Container>
          <div sx={{ width: "100%" }}>
            <Container size="md">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="活动详情" {...a11yProps(0)} />
                  <Tab label="活动讨论" {...a11yProps(1)} />
                </Tabs>
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
                              <b>Details</b>
                            </Typography>
                            {sponsor ? (
                              <Typography variant="body2" gutterBottom>
                                <FlagIcon
                                  color="action"
                                  sx={{ float: "left", marginRight: "10px" }}
                                />
                                Sponsored by {sponsor}
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
                            <Typography
                              variant="body2"
                              sx={{ marginTop: "1rem" }}
                              gutterBottom
                            >
                              {content}
                            </Typography>
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
                              <b>Participants</b>
                            </Typography>
                            {eventParticipants.items.length === 0 ? (
                              <Typography
                                variant="h6"
                                sx={{ textAlign: "center" }}
                                gutterBottom
                              >
                                0 Going
                              </Typography>
                            ) : (
                              <Typography
                                variant="h6"
                                sx={{ textAlign: "center" }}
                                gutterBottom
                              >
                                {eventParticipants.items.reduce(function (
                                  sum,
                                  items
                                ) {
                                  return sum + items.numberOfPeople;
                                },
                                0)}{" "}
                                Going
                              </Typography>
                            )}
                            {endDate > moment().format() ? (
                              <div>
                                {userInfo.isAuthenticated ? (
                                  <div>
                                    {event.eventParticipants.items.some(
                                      (item) =>
                                        item.userID === userAuth.user.username
                                    ) === false ? (
                                      <CardActions>
                                        <Button
                                          size="small"
                                          component={Link}
                                          to={`/event/${event.id}/eventSignUp`}
                                        >
                                          报名
                                        </Button>
                                      </CardActions>
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
                          </CardContent>
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
                              <b>Contact</b>
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
                                {qrCodeURL ? (
                                  <CardMedia
                                    component="img"
                                    style={{
                                      width: "auto",
                                      maxHeight: "150px",
                                    }}
                                    image={qrCodeURL}
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
                                  需要登入才能扫描哦
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
