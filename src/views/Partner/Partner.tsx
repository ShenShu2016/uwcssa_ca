/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:50:20
 * @FilePath: /uwcssa_ca/src/views/Partner/Partner.tsx
 * @Description:
 *
 */
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const mock = [
  "https://assets.maccarianagency.com/svg/logos/airbnb-original.svg",
  "https://assets.maccarianagency.com/svg/logos/amazon-original.svg",
  "https://assets.maccarianagency.com/svg/logos/fitbit-original.svg",
  "https://assets.maccarianagency.com/svg/logos/netflix-original.svg",
  "https://assets.maccarianagency.com/svg/logos/google-original.svg",
  "https://assets.maccarianagency.com/svg/logos/paypal-original.svg",
  "https://assets.maccarianagency.com/svg/logos/hubspot-original.svg",
  "https://assets.maccarianagency.com/svg/logos/mapbox-original.svg",
  "https://assets.maccarianagency.com/svg/logos/slack-original.svg",
];

function Partner(): JSX.Element {
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
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item) => (
          <Box maxWidth={120} key={item} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
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

export default Partner;
