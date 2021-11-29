import { Box, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  removeSelectedForumTopic,
  selectedForumTopic,
} from "../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import ForumRightSide from "../../components/Forum/ForumRightSide";
import ForumTopicMain from "../../components/Forum/ForumTopic/ForumTopicMain";
// import OpenIconSpeedDial from "../../components//Forum/OpenIconSpeedDial";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

export default function ForumTopic() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { forumTopicID } = useParams();
  const [starter, setStarter] = useState(false);
  //console.log(forumTopicID);
  useEffect(() => {
    if (forumTopicID && forumTopicID !== "") {
      dispatch(selectedForumTopic(forumTopicID));
    }
    return () => dispatch(removeSelectedForumTopic());
  }, [forumTopicID, dispatch]);
  const forumTopic = useSelector((state) => state.forum.selected.forumTopic);
  // console.log(forumTopic);
  useEffect(() => {
    if (
      forumTopic === undefined ||
      forumTopic === null ||
      forumTopic.length === 0
    ) {
      setStarter(false);
    } else {
      if (forumTopic.forumSubTopics === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }

      if (forumTopic.description === "not-found") {
        history.push("/not-found");
      }
    }
  }, [forumTopic, history]);
  console.log(starter);
  console.log(forumTopic);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          maxWidth: "100%",
          paddingInline: { xs: 0, sm: "1rem" },
          flexDirection: { xs: "column", sm: "row" },
          bgcolor: "grey.50",
        }}
      >
        {starter === false ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <Box sx={{ width: { md: 1080 } }}>
            <Box sx={{ padding: "2rem", maxWidth: "100%" }}>
              <CustomBreadcrumbs />
            </Box>
            <Box sx={{ mt: 1, width: "100%" }}>
              <ForumTopicMain forumTopic={forumTopic} />
            </Box>
          </Box>
        )}
        <Box>
          <ForumRightSide />
        </Box>
      </Box>
    </div>
  );
}
