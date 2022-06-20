/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:26:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-20 00:31:16
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
} from '@mui/material';
import {
  Content,
  Hero,
  SidebarEvents,
  SidebarNewsletter,
  SimilarStories,
} from './components';
import React, { useEffect, useState } from 'react';
import { fetchEvent, selectEventById } from 'redux/event/eventSlice';
import { getAuthState, getOwnerUserName } from 'redux/auth/authSlice';
import {
  insertAllComments,
  removeAllComments,
  selectAllComments,
} from 'redux/comment/commentSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import CommentOverview from 'components/Comment/CommentOverview';
import EventJoinForm from 'components/EventContainer/components/EventJoinForm';
import { useParams } from 'react-router-dom';

function EventDetail() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [joinDialogOpen, setJoinDialogOpen] = useState<boolean>(false);
  const isAuth = useAppSelector(getAuthState);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { eventId } = useParams();
  const event = useAppSelector((state) => selectEventById(state, eventId));
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
        dispatch(insertAllComments(response.payload.comments.items)); //这种方法不太好
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
        <Container style={{ padding: '12px 16px' }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              {event?.eventParticipants?.items[0]?.owner === ownerUsername ? (
                <Typography variant="h3">你已经报名</Typography>
              ) : (
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  onClick={() => setJoinDialogOpen(true)}
                >
                  点击此处报名
                </Button>
              )}
            </Grid>
            <Grid item xs={12} md={8}>
              {event && <Content event={event} />}
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={2}>
                  <SidebarEvents />
                </Box>
              ) : null}
              {!isAuth && <SidebarNewsletter />}
            </Grid>
          </Grid>
          {comments && event?.count && (
            <CommentOverview count={event.count} comments={comments} />
          )}
        </Container>
        <Box
          component={'svg'}
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
          ></path>
        </Box>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <SimilarStories />
          </Container>
          <Box
            component={'svg'}
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
            ></path>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EventDetail;
