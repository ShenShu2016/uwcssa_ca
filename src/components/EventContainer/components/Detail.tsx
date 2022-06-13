/*
 * @Author: 李佳修
 * @Date: 2022-06-13 09:15:49
 * @LastEditTime: 2022-06-13 17:05:17
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/Detail.tsx
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import ReactHtmlParser from 'react-html-parser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import moment from 'moment';
import Button from '@mui/material/Button';
import './index.css';
interface DetailProp {
  info: any;
}

const Details: React.FC<DetailProp> = ({ info }): JSX.Element => {

  console.log(info);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant={'h5'} fontWeight={700} gutterBottom>
          {info.title}
        </Typography>
        <Box>
          {
            info.online ?
              <Chip label='线上活动' color="primary" sx={{ mr: 1 }}/> : null
          }
          { 
            moment().isBefore(info.startDate) ?
              <Chip label='即将到来' color="primary" /> : null
          }
          { 
            moment().isBetween(info.startDate, info.endDate) ?
              <Chip label='进行中' color="success" /> : null
          }
          { 
            moment().isAfter(info.endDate) ?
              <Chip label='已结束' /> : null
          }
        </Box>
      </Box>
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <AccessTimeIcon sx={{ mr: 2 }}/>
        {`${moment(info.startDate).format('dddd, MMMM Do')} - ${moment(info.endDate).format('dddd, MMMM Do')}`}
      </Box>
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <LocationOnIcon sx={{ mr: 2 }}/>
        {'没有存地点？'}
      </Box>
      <Typography
        color="#616161"
        component={'i'}
        sx={{ mt: 1 }}
        className="detail-text"
      >
        {`description放这里description放这里description放这里description放这里，
         description放这里description放这里description放这里,description放这里description放这里description放这里description放这里，
          description放这里description放这里description放这里,description放这里description放这里description放这里description放这里，
          description放这里description放这里description放这里`}
      </Typography>
      <Box mt={1} display='flex' justifyContent='space-between'>
        <Button variant="outlined" sx={{width: '100px'}}>查看详情</Button>
        <Button variant="contained" sx={{width: '100px'}}>报名</Button>
      </Box>
    </Box>
  );
};

export default Details;
