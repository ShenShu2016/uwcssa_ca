/*
 * @Author: Shikai Jin
 * @Date: 2022-06-01 00:01:32
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 17:39:57
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/components/Partners/Partners.tsx
 * @Description:
 *
 */

import { Box, useMediaQuery, useTheme } from "@mui/material";

import React from "react";
import Slider from "react-slick";

const mock = [
  "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg",
  // 'https://www.logo.wine/a/logo/Node.js/Node.js-Logo.wine.svg',
  "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
  "https://www.logo.wine/a/logo/TypeScript/TypeScript-Logo.wine.svg",

  // 'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg',
  "https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg",

  "https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png",
  "https://i.pinimg.com/originals/66/ec/d4/66ecd45c7b6a7a76cd3c2c1e16b14ea0.png",
  "https://www.freelogovectors.net/wp-content/uploads/2018/12/react-logo.png",
];

function Partners(): JSX.Element {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
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
    with: "100%",
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box key={i} sx={{ height: "90px", width: "100%" }}>
            <Box
              component="img"
              height={1}
              src={item}
              alt="..."
              sx={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Partners;
