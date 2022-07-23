/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 22:05:34
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 23:20:59
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/components/SimilarStories/SimilarStories.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import moment from "moment";
import { selectAllEvents } from "redux/event/eventSlice";
import { stringAvatar } from "components/Avatar/AvatarFunction";
import { useAppSelector } from "redux/hooks";

function SimilarStories(): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const events = useAppSelector(selectAllEvents);
  const randomEvents = [...Array(events.length).keys()]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((index) => events[index]);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant="h6" gutterBottom>
            Similar stories
          </Typography>
          <Typography color="text.secondary">
            Here’s what we’ve been up to recently.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {randomEvents.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Box
              component={Link}
              to={`/event/${item.id}`}
              display="block"
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display="flex"
                flexDirection="column"
                sx={{ backgroundImage: "none" }}
              >
                <CardMedia
                  image={item.coverPageImgURL}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: "relative",
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: "scale(2)",
                      height: "auto",
                      width: 1,
                      transformOrigin: "top center",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position="relative">
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.coverPageDescription}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display="flex" flexDirection="column">
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={item.user.avatarURL?.objectThumbnailURL}
                        {...stringAvatar(item.user.name, {
                          marginRight: "1rem",
                        })}
                      />
                      <Typography color="text.secondary">
                        {item.user.name}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary">
                      {moment(item.createdAt).format("DD MMM")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SimilarStories;
