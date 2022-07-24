/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:26:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 15:44:27
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/EventDetail.tsx
 * @Description:
 *
 */

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchEvent, selectEventById } from "redux/event/eventSlice";
import { getAuthState, getOwnerUserName } from "redux/auth/authSlice";
import {
  insertAllComments,
  removeAllComments,
  selectAllComments,
} from "redux/comment/commentSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import EventJoinForm from "components/EventContainer/components/EventJoinForm";
import CommentOverview from "components/Comment/CommentOverview/CommentOverview";
import Hero from "./components/Hero/Hero";
import SidebarEvents from "./components/SidebarEvents/SidebarEvents";
import SidebarNewsletter from "./components/SidebarNewsletter/SidebarNewsletter";
import Content from "./components/Content/Content";
import SimilarStories from "./components/SimilarStories/SimilarStories";

interface EventDetailProp {
  fromPreview?: boolean;
  previewEvent?: any;
  prevenJoinClick?: () => void;
}

type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];
const libraries: Libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const EventDetail: React.FC<EventDetailProp> = ({
  fromPreview = false,
  previewEvent,
  prevenJoinClick,
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [joinDialogOpen, setJoinDialogOpen] = useState<boolean>(false);
  const isAuth = useAppSelector(getAuthState);
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { eventId } = fromPreview ? { eventId: null } : useParams();
  const event = fromPreview
    ? previewEvent
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useAppSelector((state) => selectEventById(state, eventId));
  const ownerUsername = useAppSelector(getOwnerUserName);
  const comments = useAppSelector(selectAllComments);

  useEffect(() => {
    const getEvent = async () => {
      if (eventId !== null) {
        const response = await dispatch(
          fetchEvent({
            eventId,
            isAuth,
            ownerUsername,
          }),
        );
        dispatch(insertAllComments(response?.payload?.comments?.items)); // 这种方法不太好
      }
    };
    getEvent();
    return () => {
      dispatch(removeAllComments());
    };
  }, [eventId]);

  return (
    <>
      <EventJoinForm
        open={joinDialogOpen}
        setOpen={setJoinDialogOpen}
        event={event}
      />
      <Box>
        {event && <Hero event={event} />}
        <Container style={{ padding: "12px 16px" }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              {isAuth ? (
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  disabled={
                    ownerUsername &&
                    event?.eventParticipants?.items[0]?.owner === ownerUsername
                  }
                  onClick={() => {
                    if (fromPreview) {
                      prevenJoinClick();
                    } else {
                      setJoinDialogOpen(true);
                    }
                  }}
                >
                  {ownerUsername &&
                  event?.eventParticipants?.items[0]?.owner === ownerUsername
                    ? "你已经报名"
                    : "点击此处报名"}
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  component={Link}
                  to="/auth/signIn"
                >
                  报名请先登录
                </Button>
              )}
            </Grid>
            {event?.eventLocation ? (
              <Grid item xs={12} md={8}>
                <LoadScript
                  googleMapsApiKey="AIzaSyCKR_7S6WE5ETziYlastsHnmKuvELeFTW4"
                  libraries={libraries}
                >
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                      lat: event.eventLocation.lat,
                      lng: event.eventLocation.lng,
                    }}
                    zoom={16}
                  >
                    <Marker
                      position={{
                        lat: event.eventLocation.lat,
                        lng: event.eventLocation.lng,
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
                <Typography
                  color="#616161"
                  sx={{ fontSize: "18px", fontWeight: 600, paddingY: 2 }}
                >
                  {`地址：${event.eventLocation.formatted_address}`}
                </Typography>
              </Grid>
            ) : null}
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={2}>
                  <SidebarEvents fromPreview={fromPreview} />
                </Box>
              ) : null}
              {!isAuth && <SidebarNewsletter />}
            </Grid>
            <Grid item xs={12} md={8}>
              {event && <Content event={event} />}
            </Grid>
          </Grid>
          {comments && event?.count && (
            <CommentOverview count={event.count} comments={comments} />
          )}
        </Container>
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          />
        </Box>
        <Box bgcolor="alternate.main" display={fromPreview ? "none" : "block"}>
          <Container>
            <SimilarStories />
          </Container>
          <Box
            component="svg"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              marginBottom: -1,
              width: 1,
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EventDetail;
