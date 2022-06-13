/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:37:29
 * @LastEditTime: 2022-06-13 17:50:40
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/EventContainer.tsx
 */

import { Box } from '@mui/material';

import Details from './components/Detail';
import Image from './components/Image';
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const EventContainer: React.FC = () => {
  const eventList = useAppSelector((state) => state.event);

  console.log(eventList);

  return (
    <Box p={1}>
      <Swiper
        pagination={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        spaceBetween={100}
        modules={[Autoplay, Pagination]}
      >
        {eventList && eventList.ids?.map((id) =>
          ( 
            <SwiperSlide key={id}>
              <Box display='flex' mb={4}>
                <Box flex={1}>
                  <Image
                    url={eventList.entities[id].coverPageImgURL}
                  />
                </Box>
                <Box flex={2} ml={4}>
                  <Details info={eventList.entities[id]} />
                </Box>
              </Box>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  );
};

export default EventContainer;
