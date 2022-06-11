/*
 * @Author: Shikai Jin
 * @Date: 2022-05-26 22:30:04
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-05-27 18:04:34
 * @FilePath: /uwcssa_ca/src/views/Logistics/components/Video/Video.tsx
 * @Description:
 *
 */

import Box from '@mui/material/Box';
import Container from 'components/Container';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import ReactPlayer from 'react-player';
import Typography from '@mui/material/Typography';

const Video = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage:
          'url(https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/105574608_2541619195939656_2339835405235735184_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Pwx2262mWqkAX98GQ-a&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-uxn1hwnk8qHlfL0jsUh54HpgwfS3npsCvgMLvLHRN2A&oe=62B7CC7E)',
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
            {/* <IconButton size={'large'}>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={50}
                height={50}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </Box>
            </IconButton> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Video;
