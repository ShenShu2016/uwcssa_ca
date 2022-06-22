/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box } from '@mui/material';
import Details from './Detail';
import Image from './Image';
// import { Event } from 'redux/event/eventSlice';

interface EventSwiperItemProp {
    event: any;
    fromPreview?: boolean;
    handleJoinEvent: (event: any) => void
}

const EventSwiperItem: React.FC<EventSwiperItemProp> = ({ event, fromPreview=false, handleJoinEvent }) => {
  return (
    <Box
      display="flex"
      flexDirection={{
        md: 'row',
        xs: 'column',
      }}
      mb={4}
    >
      <Box flex={1}>
        <Image url={event.coverPageImgURL} />
      </Box>
      <Box flex={2}>
        <Details
          info={event}
          fromPreview={fromPreview}
          onJoin={() => handleJoinEvent(event)}
        />
      </Box>
    </Box>
  );
};

export default EventSwiperItem;