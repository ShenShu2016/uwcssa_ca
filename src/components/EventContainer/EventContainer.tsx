/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:37:29
 * @LastEditTime: 2022-06-16 21:42:47
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/EventContainer/EventContainer.tsx
 */

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Button } from '@mui/material';
// import Details from './components/Detail';/
import { Event } from 'redux/event/eventSlice';
import EventJoinForm from './components/EventJoinForm';
import { Link } from 'react-router-dom';
// import Image from './components/Image';
import { useAppSelector } from 'redux/hooks';
import EventSwiperItem from './components/EventSwiperItem';

const EventContainer: React.FC = () => {
  const eventList = useAppSelector((state) => state.event);
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
        {eventList &&
          eventList.ids?.map((id) => (
            <SwiperSlide key={id}>
              <EventSwiperItem event={eventList.entities[id]} handleJoinEvent={handleJoinEvent}/>
            </SwiperSlide>
          ))}
      </Swiper>
      <Button
        variant="outlined"
        component={Link}
        size='small'
        sx={{ float: 'right', height: '30px', marginTop: '-25px', zIndex: 999 }}
        to={'/history-events'}
      >
          查看所有活动
      </Button>
    </Box>
  );
};

export default EventContainer;
