/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:37:29
 * @LastEditTime: 2022-06-10 17:55:09
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/EventContainer.tsx
 */
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from './components/Image';
import Details from './components/Detail';
import { fetchEventList } from 'redux/event/eventSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

const EventContainer: React.FC = () => {

  const eventList = useAppSelector(state => state.event);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEventList({isAuth: true}));
  }, []);

  console.log(eventList);

  return (
    <Box>
      <Grid container>
        {
          eventList && eventList.ids?.length ?
            <>
              <Grid item xs={12}>
                <Image url={eventList.entities[eventList.ids[0]].coverPageImgURL}/>
              </Grid>
              <Grid item xs={12}>
                <Details info={eventList.entities[eventList.ids[0]]}/>
              </Grid> 
            </>
            : null
        }
      </Grid>
    </Box>
  );
};

export default EventContainer;