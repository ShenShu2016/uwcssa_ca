/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:53:32
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 18:02:38
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/components/Hero/Hero.tsx
 * @Description:
 *
 */

import { Avatar, Box, ListItemText, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import Container from 'components/Container';
import { Event } from 'redux/event/eventSlice';
import { alpha } from '@mui/material/styles';
import moment from 'moment';
import { stringAvatar } from 'components/Avatar/AvatarFunction';

const Hero = ({ event }: { event: Event }): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  // console.log('article', article);
  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      marginTop={-13}
      paddingTop={13}
      alignItems={'center'}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `url(${event.coverPageImgURL})`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.6),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              color: 'common.white',
              marginBottom: 2,
            }}
          >
            {event.title}
          </Typography>
          <Box display={'flex'} alignItems={'center'}>
            <Avatar
              src={event.user.avatarURL?.objectThumbnailURL}
              {...stringAvatar(event.user.name, {
                width: 60,
                height: 60,
                marginRight: '1rem',
              })}
            />
            <ListItemText
              sx={{ margin: 0 }}
              primary={event.user.name}
              secondary={moment(event.createdAt).format(
                'dddd, MMMM Do YYYY, h:mm:ss a',
              )} //https://momentjs.com/docs/#/displaying/format/
              primaryTypographyProps={{
                variant: 'h6',
                sx: { color: 'common.white' },
              }}
              secondaryTypographyProps={{
                sx: { color: alpha('#ffffff', 0.8) },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
