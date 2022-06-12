/*
 * @Author: 李佳修
 * @Date: 2022-06-10 17:37:29
 * @LastEditTime: 2022-06-10 17:55:09
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/EventContainer.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from './components/Image';
import Details from './components/Detail';
const EventContainer: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12}>
          <Image />
        </Grid>
        <Grid item xs={12}>
          <Details />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventContainer;