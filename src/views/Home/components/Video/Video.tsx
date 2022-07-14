/*
 * @Author: Shikai Jin
 * @Date: 2022-05-26 22:30:04
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-28 17:02:29
 * @FilePath: /uwcssa_ca/src/views/Home/components/Video/Video.tsx
 * @Description:
 *
 */

import { Box, Typography } from '@mui/material';

import Container from 'components/Container';
import React from 'react';
import ReactPlayer from 'react-player';

const Video = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage:
          'url(https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/blackShadowWithBridge.jpg)',
        backgroundPosition: 'center center',
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: '#11092d',
          opacity: 0.7,
          zIndex: 1,
        },
      }}
    >
      <Container position={'relative'} zIndex={3}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant={'h4'}
              gutterBottom
              align={'center'}
              sx={{ fontWeight: 700, color: 'common.white' }}
            >
              Watch the video
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'text.secondary'}
              align={'center'}
              sx={{ color: 'common.white' }}
            >
              After 3 days all of your offers will arrive and you will have
              another 7 days to select your new company.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage:
                'url(https://assets.maccarianagency.com/backgrounds/img50.jpg)',
              backgroundPosition: 'center center',
              height: 324,
              maxWidth: 600,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=e6Tys8ZuF_k'}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: '12345',
                },
              }}
              controls
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Video;
