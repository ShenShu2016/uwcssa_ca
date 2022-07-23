/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 22:19:19
 * @FilePath: /uwcssa_ca/src/views/ArticleCover/components/Hero/Hero.tsx
 * @Description:
 *
 */

import { Avatar, Box, ListItemText, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { Article } from "redux/article/articleSlice";
import Container from "components/Container";
import { alpha } from "@mui/material/styles";
import moment from "moment";
import { stringAvatar } from "components/Avatar/AvatarFunction";

function Hero({ article }: { article: Article }): JSX.Element {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  // console.log('article', article);
  return (
    <Box
      className="jarallax"
      data-jarallax
      data-speed="0.2"
      position="relative"
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display="flex"
      marginTop={-13}
      paddingTop={13}
      alignItems="center"
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className="jarallax-img"
        sx={{
          position: "absolute",
          objectFit: "cover",
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: "object-fit: cover;",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${article.coverPageImgURL})`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha("#161c2d", 0.6),
          zIndex: 1,
        }}
      />
      <Container position="relative" zIndex={2}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              color: "common.white",
              marginBottom: 2,
            }}
          >
            {article.title}
          </Typography>
          <Box display="flex" alignItems="center">
            <Avatar
              src={article.user.avatarURL?.objectThumbnailURL}
              {...stringAvatar(article.user.name, {
                width: 60,
                height: 60,
                marginRight: "1rem",
              })}
            />
            <ListItemText
              sx={{ margin: 0 }}
              primary={article.user.name}
              secondary={moment(article.createdAt).format(
                "dddd, MMMM Do YYYY, h:mm:ss a",
              )} // https://momentjs.com/docs/#/displaying/format/
              primaryTypographyProps={{
                variant: "h6",
                sx: { color: "common.white" },
              }}
              secondaryTypographyProps={{
                sx: { color: alpha("#ffffff", 0.8) },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
