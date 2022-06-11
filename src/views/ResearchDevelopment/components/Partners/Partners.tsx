/*
 * @Author: Shikai Jin
 * @Date: 2022-06-01 00:01:32
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-07 19:44:02
 * @FilePath: /uwcssa_ca/src/views/Developers/components/Partners/Partners.tsx
 * @Description:
 *
 */

import Box from '@mui/material/Box';
import React from 'react';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const mock = [
  'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg',
  'https://www.logo.wine/a/logo/Node.js/Node.js-Logo.wine.svg',
  'https://www.logo.wine/a/logo/TypeScript/TypeScript-Logo.wine.svg',
  'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg',
  'https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg',
];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box maxWidth={120} key={i} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              sx={{
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Partners;
