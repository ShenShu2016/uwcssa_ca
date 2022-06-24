/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:53:42
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-20 01:14:45
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/components/SidebarEvents/SidebarEvents.tsx
 * @Description:
 *
 */

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { fetchEventList, selectAllEvents } from 'redux/event/eventSlice';
import { getAuthState, getOwnerUserName } from 'redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useParams } from 'react-router-dom';

interface SidebarEventsProp {
  fromPreview?: boolean;
}

const SidebarEvents: React.FC<SidebarEventsProp> = ({ fromPreview=false }): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const { eventId } = useParams();
  const { fetchEventListStatus } = useAppSelector((state) => state.event);
  useEffect(() => {
    const getEvents = async () => {
      if (fetchEventListStatus === 'idle') {
        await dispatch(
          fetchEventList({
            isAuth,
            ownerUsername,
          }),
        );
      }
    };
    getEvents();
  }, [fetchEventListStatus]);
  const events = useAppSelector(selectAllEvents);
  const eventsWhereIdNotEqualToArticleId = events
    .filter((event) => event.id !== eventId)
    .slice(0, 5);
  return (
    <Box component={Card} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Upcoming updates
      </Typography>
      {
        fromPreview ?
          <Box minHeight='200px'></Box> :
          <Grid container spacing={2}>
            {eventsWhereIdNotEqualToArticleId.map((item, index) => (
              <Grid
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
                item
                xs={12}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  boxShadow={0}
                  display={'flex'}
                  flexDirection={{ xs: 'column', md: 'row' }}
                  sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
                >
                  <Box
                    sx={{
                      // width: { xs: 1, md: '50%' },
                      '& .lazy-load-image-loaded': {
                        height: 1,
                        display: 'flex !important',
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      height={'100px'}
                      width={'150px'}
                      src={item.coverPageImgURL}
                      alt="..."
                      effect="blur"
                      sx={{
                        objectFit: 'cover',
                        // maxHeight: 120,
                        borderRadius: 2,
                        filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      flex: 1,
                      padding: '0px 8px',
                      '&:last-child': { paddingBottom: 0 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography fontSize={14} fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant={'caption'}
                        color={'text.secondary'}
                        component={'i'}
                      >
                        {item.user.name} -{' '}
                        {moment(item.createdAt).format('MMMM Do YYYY, h:mm a')}
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      to={`/event/${item.id}`}
                      size={'small'}
                      sx={{
                        width: 'fit-content',
                        padding: 0,
                      }}
                    >
                  Read More
                    </Button>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
      }
    </Box>
  );
};

export default SidebarEvents;
