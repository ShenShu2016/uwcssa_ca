/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:21:07
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 14:37:02
 * @FilePath: /uwcssa_ca/src/views/Home/components/Hero/Hero.tsx
 * @Description:
 *
 */

import { getAuthState, getUserInfo } from "redux/auth/authSlice";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  alpha,
  useTheme,
  Button,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Container from "components/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppSelector } from "redux/hooks";

function Hero(): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthState);
  const userInfo = useAppSelector(getUserInfo);

  // eslint-disable-next-line react/no-unstable-nested-components
  function LeftSide() {
    return (
      <Box data-aos={isMd ? "fade-right" : "fade-up"}>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ fontWeight: 700 }}
          >
            A Student Community like{" "}
          </Typography>
          <Typography
            color="primary"
            component="span"
            variant="h2"
            fontWeight={700}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            No Other
          </Typography>
        </Box>
        <Box marginBottom={3}>
          <Typography variant="h6" component="p" color="text.secondary">
            加拿大学生社群
          </Typography>
        </Box>

        {isAuth ? (
          <Typography variant="h4">Welcome {userInfo.name}!</Typography>
        ) : (
          <Box>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/auth/signIn"
            >
              登录
            </Button>
            <Button
              size="large"
              style={{ marginLeft: 24 }}
              component={Link}
              to="/auth/signUp"
            >
              注册
            </Button>
            <Button
              size="large"
              style={{ marginLeft: 24 }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("dashboard")}
            >
              游客登录
            </Button>
          </Box>
        )}
      </Box>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function RightSide(): JSX.Element {
    return (
      <Box
        sx={{
          height: { xs: "auto", md: 1 },
          "& img": {
            objectFit: "cover",
          },
          "& .lazy-load-image-loaded": {
            height: 1,
            width: 1,
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          effect="blur"
          src="https://img02.en25.com/Web/UniversityofWindsor/%7Bd8f91307-a2fc-4c74-976f-746c732a1bec%7D_uwindsor-dillon-hall-drone-hero.jpg"
          height={{ xs: "auto", md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          position="relative"
          justifyContent="center"
          minHeight={{ md: 600 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display="flex"
            alignItems="center"
          >
            <Box position="absolute" zIndex={-1}>
              <Box
                component={LazyLoadImage}
                effect="blur"
                src="./assets/images/uwcssa_logo.svg"
                height={{ xs: "auto", md: 1 }}
                maxHeight={{ xs: 300, md: 1 }}
                width={1}
                maxWidth={1}
                style={{ opacity: 0.1 }}
              />
            </Box>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                    clipPath: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                    shapeOutside: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
}

export default Hero;
