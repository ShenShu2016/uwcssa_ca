/*
 * @Author: Shen Shu
 * @Date: 2022-06-26 15:19:17
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 17:09:02
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/EventSwiperItem.tsx
 * @Description:
 *
 */

import React from "react";
import { Box } from "@mui/material";
import Details from "./Detail";
import Image from "./Image";
// import { Event } from 'redux/event/eventSlice';

interface EventSwiperItemProp {
  event: any;
  fromPreview?: boolean;
  handleJoinEvent: (event: any) => void;
}
function EventSwiperItem({
  event,
  fromPreview = false,
  handleJoinEvent,
}: EventSwiperItemProp) {
  return (
    <Box
      display="flex"
      flexDirection={{
        md: "row",
        xs: "column",
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
}

export default EventSwiperItem;
