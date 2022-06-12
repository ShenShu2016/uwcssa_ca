/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:37:29
 * @LastEditTime: 2022-06-12 19:48:17
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/EventContainer/EventContainer.tsx
 */

import { Box, Grid } from '@mui/material';

import Details from './components/Detail';
import Image from './components/Image';
import React from 'react';
import { useAppSelector } from 'redux/hooks';

const EventContainer: React.FC = () => {
  const eventList = useAppSelector((state) => state.event);

  console.log(eventList);

  return (
    <Box>
      <Grid container>
        {eventList && eventList.ids?.length ? (
          <>
            <Grid item xs={12}>
              <Image
                url={eventList.entities[eventList.ids[0]].coverPageImgURL}
              />
            </Grid>
            <Grid item xs={12}>
              <Details info={eventList.entities[eventList.ids[0]]} />
            </Grid>
          </>
        ) : null}
      </Grid>
    </Box>
  );
};

export default EventContainer;
