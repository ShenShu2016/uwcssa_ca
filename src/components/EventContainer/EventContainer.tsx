/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:37:29
 * @LastEditTime: 2022-06-25 15:08:29
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/EventContainer/EventContainer.tsx
 */

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';
import { Box, Button } from '@mui/material';
import { Event, selectAllEvents } from 'redux/event/eventSlice';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import EventJoinForm from './components/EventJoinForm';
import EventSwiperItem from './components/EventSwiperItem';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';

// import Details from './components/Detail';/

// import Image from './components/Image';

const EventContainer: React.FC = () => {
  const eventList = useAppSelector(selectAllEvents);
  const [joinDialogOpen, setJoinDialogOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<Event | null>(null);

  const handleJoinEvent = (event: Event) => {
    setEvent(event);
    setJoinDialogOpen(true);
  };

  //console.log(eventList);

  return (
    <Box p={1}>
      <EventJoinForm
        open={joinDialogOpen}
        setOpen={setJoinDialogOpen}
        event={event}
      />
      <Swiper
        pagination={true}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={100}
        modules={[Autoplay, Pagination]}
      >
        {eventList.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <EventSwiperItem event={item} handleJoinEvent={handleJoinEvent} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant="outlined"
        component={Link}
        size="small"
        sx={{ float: 'right', height: '30px', marginTop: '-25px', zIndex: 999 }}
        to={'/history-events'}
      >
        查看所有活动
      </Button>
    </Box>
  );
};

export default EventContainer;
