/*
 * @Author: Shen Shu
 * @Date: 2022-07-21 23:02:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 15:53:55
 * @FilePath: /uwcssa_ca/src/admin/Event/EventManagement/EventManagement.tsx
 * @Description:
 *
 */

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { fetchEventList, selectAllEvents } from "redux/event/eventSlice";
import { getAuthState, getOwnerUserName } from "redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function EventManagement() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const events = useAppSelector(selectAllEvents); // redux 有这种用法

  const { fetchEventListStatus } = useAppSelector((state) => state.event);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  useEffect(() => {
    if (fetchEventListStatus === "idle") {
      dispatch(fetchEventList({ isAuth, ownerUsername }));
    }
  }, [isAuth, fetchEventListStatus, dispatch, ownerUsername]);

  return (
    <Container>
      <Grid container spacing={isMd ? 4 : 2} direction="column" padding={4}>
        {events.map((item, index) => (
          <Grid
            item
            xs={12}
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <CardMedia
                title={item.title}
                image={
                  item.coverPageImgURL ||
                  "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user/BackGround/6d328ddc-08d7-4f7d-8527-2173349796a7.jpg"
                }
                sx={{
                  height: { xs: 240, sm: "auto" },
                  width: { xs: 1, sm: 300 },
                }}
              />
              <CardContent sx={{ width: { xs: "100%", sm: "60%" } }}>
                <Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    className="event-list-text"
                  >
                    {item.coverPageDescription}
                  </Typography>
                </Box>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button component={Link} to={`/admin/event-edit/${item.id}`}>
                    编辑
                  </Button>
                  <Button component={Link} to={`/event/${item.id}`}>
                    查看详情
                  </Button>
                  <Button
                    component={Link}
                    to={`/admin/event/EventParticipant/${item.id}/${item.form.id}`}
                  >
                    报名情况
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EventManagement;
