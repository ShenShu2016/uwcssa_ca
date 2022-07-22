/*
 * @Author: Shen Shu
 * @Date: 2022-06-24 00:43:11
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-22 16:26:36
 * @FilePath: /uwcssa_ca/src/views/Event/EventSignUpSuccessfully/EventSignUpSuccessfully.tsx
 * @Description:
 *
 */

import { Box, Button, Typography } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from 'components/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  box: {
    padding: '3rem',
  },
  title: {
    marginTop: '10rem',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
}));

export default function EventSignUpSuccessfully() {
  const classes = useStyles();
  const { eventId } = useParams();

  return (
    <Container>
      <Box className={classes.box}>
        <Typography variant="h2" align="center" gutterBottom>
          报名成功！
        </Typography>
        <Typography component="h6" align="center" className={classes.title}>
          你已成功报名参加本次活动！请加小助手微信： CSSA-Uwindsor
        </Typography>
        <Typography component="h6" align="center">
          有任何问题请随时联系我们！ uwincssa.it@gmail.com
        </Typography>
      </Box>
      <Box className={classes.icon}>
        <CheckCircleIcon sx={{ fontSize: 100, color: green[500] }} />
      </Box>
      <Box className={classes.icon}>
        <Button variant="contained" component={Link} to={`/event/${eventId}`}>
          点击返回活动页面
        </Button>
      </Box>
    </Container>
  );
}
