/*
 * @Author: Shen Shu
 * @Date: 2022-06-26 15:19:17
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:42:05
 * @FilePath: /uwcssa_ca/src/views/Event/EventList/EventList.tsx
 * @Description:
 *
 */
import React, { useState, useEffect } from "react";
import Container from "components/Container";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Card } from "@mui/material";

import { useAppSelector, useAppDispatch } from "redux/hooks";
import EventSwiperItem from "components/EventContainer/components/EventSwiperItem";
import EventJoinForm from "components/EventContainer/components/EventJoinForm";
import { fetchEventList } from "redux/event/eventSlice";
import moment from "moment";
import { getOwnerUserName, getAuthState } from "redux/auth/authSlice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { fetchEventListStatus } = useAppSelector((state) => state.event);
  const isAuth = useAppSelector(getAuthState); // 看一下Auth的选项他有可能会返回null 或者false 现在前面没有load 好user 就不让你进了，所以有可能不需要 ！==null的判断了
  const ownerUsername = useAppSelector(getOwnerUserName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchEventListStatus === "idle") {
      dispatch(fetchEventList({ isAuth, ownerUsername }));
    }
  }, [dispatch, fetchEventListStatus, isAuth, ownerUsername]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { md: 3, xs: 0 } }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function EventList(): JSX.Element {
  const eventList = useAppSelector((state) => state.event);
  const [value, setValue] = useState(0);
  const [joinDialogOpen, setJoinDialogOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<Event | null>(null);
  const ownerUsername = useAppSelector(getOwnerUserName);

  const joinedEvent = eventList?.ids
    ? eventList.ids.filter(
        (id) =>
          eventList.entities[id].eventParticipants?.items?.findIndex(
            (item) => item.owner === ownerUsername,
          ) !== -1,
      )
    : [];

  const processingEvent = eventList?.ids
    ? eventList.ids.filter((id) =>
        moment().isBetween(
          eventList.entities[id].startDate,
          eventList.entities[id].endDate,
        ),
      )
    : [];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleJoinEvent = () => {
    setEvent(event);
    setJoinDialogOpen(true);
  };
  return (
    <Container paddingY={4}>
      <EventJoinForm
        open={joinDialogOpen}
        setOpen={setJoinDialogOpen}
        event={event}
      />
      <Box minHeight="50vh">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="我的活动" {...a11yProps(0)} />
          <Tab label="进行中的活动" {...a11yProps(1)} />
          <Tab label="全部活动" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {joinedEvent &&
            joinedEvent.map((id, index) => (
              <Card
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
                key={id}
                sx={{ mt: 2, p: 2 }}
              >
                <EventSwiperItem
                  event={eventList.entities[id]}
                  handleJoinEvent={handleJoinEvent}
                />
              </Card>
            ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {processingEvent &&
            processingEvent.map((id, index) => (
              <Card
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
                key={id}
                sx={{ mt: 2, p: 2 }}
              >
                <EventSwiperItem
                  event={eventList.entities[id]}
                  handleJoinEvent={handleJoinEvent}
                />
              </Card>
            ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {eventList &&
            eventList.ids?.map((id, index) => (
              <Card
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
                key={id}
                sx={{ mt: 2, p: 2 }}
              >
                <EventSwiperItem
                  event={eventList.entities[id]}
                  handleJoinEvent={handleJoinEvent}
                />
              </Card>
            ))}
        </TabPanel>
      </Box>
    </Container>
  );
}

export default EventList;
