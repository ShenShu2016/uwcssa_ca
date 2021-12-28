import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import ArticlesPreview from "./Article/ArticlesPreview";
// import EventGrid from "../../components/Event/EventDataGrid";
import EventTable from "../../components/Event/EventTable";
import PostArticle from "./Article/PostArticle";
import PostDepartment from "./UwcssaJob/PostDepartment";
import PostEvent from "../../components/Event/PostEvent";
// import PostEvent from "../../components/Event/PostEvent";
import PostUwcssaJob from "./UwcssaJob/PostUwcssaJob";
import PropTypes from "prop-types";
import UwcssaJobsPreview from "./UwcssaJob/UwcssaJobsPreview";
import { useTheme } from "@emotion/react";

// import SwipeableViews from "react-swipeable-views";

// function TabPanel(props) {
//   const { children, value, index } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && <Box>{children}</Box>}
//     </div>
//   );
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Staff() {
  const [value, setValue] = useState(0);
  // const [liveComponent, setLiveComponent] = useState("Main");
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  return (
    <Container maxWidth="xl" sx={{ p: 0 }}>
      {/* <Box sx={{ bgcolor: 'background.paper', width: 500 }}> */}

      <Tabs
        position="static"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="管理首页" {...a11yProps(0)} />
        <Tab label="活动" {...a11yProps(1)} />
        <Tab label="活动策划" {...a11yProps(2)} />
        <Tab label="职位招聘" {...a11yProps(3)} />
        <Tab label="部门管理" {...a11yProps(4)} />
        <Tab label="新闻发布" {...a11yProps(5)} />
      </Tabs>

      {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        <ArticlesPreview />
        <UwcssaJobsPreview />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box>
          <EventTable />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box>
          <PostEvent />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Box>
          <PostUwcssaJob />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <Box>
          <PostDepartment />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <Box>
          <PostArticle />
        </Box>
      </TabPanel>
      {/* </SwipeableViews> */}
      {/* </Box> */}
    </Container>

    // // {/* <Grid container>
    //   // <Grid item xs={2} sx={{ maxWidth: 200 }}>
    //   //   <Box role="presentation">
    //   //     <List sx={{ marginTop: 3 }}>
    //   //       <div>
    //   //         <ListItemButton
    //   //           sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
    //   //           onClick={() => {
    //   //             setValue(0);
    //   //             setLiveComponent("Main");
    //   //           }}
    //   //           selected={liveComponent === "Main"}
    //   //         >
    //   //           <ListItemText primary="管理首页" />
    //   //         </ListItemButton>
    //           {/* <ListItemButton
    //             sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
    //             onClick={() => {
    //               setValue(1);
    //               setLiveComponent("PostEvent");
    //             }}
    //             selected={liveComponent === "PostEvent"}
    //           >
    //             <ListItemText primary="活动策划" />
    //           </ListItemButton>
    //           <ListItemButton
    //             sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
    //             onClick={() => {
    //               setValue(1);
    //               setLiveComponent("EventTable");
    //             }}
    //             selected={liveComponent === "EventTable"}
    //           >
    //             <ListItemText primary="活动" />
    //           </ListItemButton>
    //           <ListItemButton
    //             sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
    //             onClick={() => {
    //               setValue(2);
    //               setLiveComponent("PostUwcssaJob");
    //             }}
    //             selected={liveComponent === "PostUwcssaJob"}
    //           >
    //             <ListItemText primary="职位招聘" />
    //           </ListItemButton>
    //           <ListItemButton
    //             sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
    //             onClick={() => {
    //               setValue(3);
    //               setLiveComponent("PostDepartment");
    //             }}
    //             selected={liveComponent === "PostDepartment"}
    //           >
    //             <ListItemText primary="部门管理" />
    //           </ListItemButton>
    //           <ListItemButton
    //             sx={{ textAlign: "center", marginTop: 2, color: "steelblue" }}
    //             onClick={() => {
    //               setValue(4);
    //               setLiveComponent("PostArticle");
    //             }}
    //             selected={liveComponent === "PostArticle"}
    //           >
    //             <ListItemText primary="新闻发布" />
    //           </ListItemButton>
    //         </div>
    //       </List>
    //     </Box>
    //   </Grid>
    //   <Grid item xs={10}>
    //     <TabPanel value={value} index={0}>
    //       <ArticlesPreview />
    //       <UwcssaJobsPreview />
    //     </TabPanel>
    //     <TabPanel value={value} index={1}>
    //       <EventTable />
    //     </TabPanel>
    //     {/* <TabPanel value={value} index={1}>
    //       <PostEvent />
    //     </TabPanel> */}
    // //     <TabPanel value={value} index={2}>
    // //       <PostUwcssaJob />
    // //     </TabPanel>
    // //     <TabPanel value={value} index={3}>
    // //       <PostDepartment />
    // //     </TabPanel>
    // //     <TabPanel value={value} index={4}>
    // //       <PostArticle />
    // //     </TabPanel>
    // //   </Grid>*/}
    // // </Grid> */}
  );
}
