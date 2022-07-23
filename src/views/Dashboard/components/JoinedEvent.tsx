/*
 * @Author: 李佳修
 * @Date: 2022-06-23 12:00:05
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 15:02:54
 * @FilePath: /uwcssa_ca/src/views/Dashboard/components/JoinedEvent.tsx
 * @Description:
 *
 */

import { Box, Card, Typography } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { getOwnerUserName } from "redux/auth/authSlice";
import moment from "moment";
import { selectAllEvents } from "redux/event/eventSlice";
import { useAppSelector } from "redux/hooks";
import { useNavigate } from "react-router-dom";

const JoinedEvent: React.FC = () => {
  const eventList = useAppSelector(selectAllEvents);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const navigate = useNavigate();

  const filteredEvent = eventList.filter((item) => {
    item.eventParticipants &&
      item.eventParticipants?.items?.findIndex((item) => {
        item.owner === ownerUsername;
      }) !== -1;
  });
  // console.log(filteredEvent);
  return (
    <Box
      sx={{
        maxHeight: "50vh",
        overflow: "auto",
      }}
    >
      {filteredEvent.map((item) => (
        <Card
          sx={{
            p: 1,
            display: "flex",
            mt: 1,
            justifyContent: "space-between",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#eeeeee",
            },
          }}
          //   to={`/event/${info.id}`}
          onClick={() => navigate(`/event/${item.id}`)}
          key={item.id}
        >
          <Box>
            <Typography fontSize={18} fontWeight={600}>
              {item.title}
            </Typography>
            <Box
              sx={{
                mt: 1,
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon sx={{ mr: 1 }} />
              {`${moment(item.startDate).format("dddd, MMMM Do")} - ${moment(
                item.endDate,
              ).format("dddd, MMMM Do")}`}
            </Box>
            <Box
              sx={{
                mt: 1,
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{ mr: 1 }} />
              {item.eventLocation?.name}
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              "& img": {
                width: "100%",
                height: "130px",
                objectFit: "cover",
                borderRadius: "8px",
              },
            }}
          >
            <img src={item.coverPageImgURL} alt="event poster" />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default JoinedEvent;
