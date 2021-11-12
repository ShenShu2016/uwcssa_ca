import { Box, Grid, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";

import ArticlesPreview from "./Article/ArticlesPreview";
import EventGrid from "../../components/Event/EventDataGrid";
import PostArticle from "./Article/PostArticle";
import PostDepartment from "./UwcssaJob/PostDepartment";
// import PostEvent from "../../components/Event/PostEvent";
import PostUwcssaJob from "./UwcssaJob/PostUwcssaJob";
import PropTypes from "prop-types";
import UwcssaJobsPreview from "./UwcssaJob/UwcssaJobsPreview";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Staff() {
  const [value, setValue] = useState(0);
  const [liveComponent, setLiveComponent] = useState("Main");

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Box role="presentation">
            <List sx={{ marginTop: 3 }}>
              <div>
                <ListItemButton
                  sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
                  onClick={() => {
                    setValue(0);
                    setLiveComponent("Main");
                  }}
                  selected={liveComponent === "Main"}
                >
                  <ListItemText primary="管理首页" />
                </ListItemButton>
                {/* <ListItemButton
                  sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
                  onClick={() => {
                    setValue(1);
                    setLiveComponent("PostEvent");
                  }}
                  selected={liveComponent === "PostEvent"}
                >
                  <ListItemText primary="活动策划" />
                </ListItemButton> */}
                <ListItemButton
                  sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
                  onClick={() => {
                    setValue(1);
                    setLiveComponent("EventGrid");
                  }}
                  selected={liveComponent === "EventGrid"}
                >
                  <ListItemText primary="UWCSSA 活动" />
                </ListItemButton>
                <ListItemButton
                  sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
                  onClick={() => {
                    setValue(2);
                    setLiveComponent("PostUwcssaJob");
                  }}
                  selected={liveComponent === "PostUwcssaJob"}
                >
                  <ListItemText primary="职位招聘" />
                </ListItemButton>
                <ListItemButton
                  sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
                  onClick={() => {
                    setValue(3);
                    setLiveComponent("PostDepartment");
                  }}
                  selected={liveComponent === "PostDepartment"}
                >
                  <ListItemText primary="部门管理" />
                </ListItemButton>
                <ListItemButton
                  sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
                  onClick={() => {
                    setValue(4);
                    setLiveComponent("PostArticle");
                  }}
                  selected={liveComponent === "PostArticle"}
                >
                  <ListItemText primary="新闻发布" />
                </ListItemButton>
              </div>
            </List>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <TabPanel value={value} index={0}>
            <ArticlesPreview />
            <UwcssaJobsPreview />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EventGrid />
          </TabPanel>
          {/* <TabPanel value={value} index={1}>
            <PostEvent />
          </TabPanel> */}
          <TabPanel value={value} index={2}>
            <PostUwcssaJob />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PostDepartment />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <PostArticle />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
