import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/material";
import Footer from "../Footer";
import ForumIndex from "./ForumIndex";
import ForumPost from "../../components/Forum/ForumPost/ForumPost";
import ForumPostList from "../../components/Forum/ForumPost/ForumPostList";
import ForumPostUpload from "../../components/Forum/ForumPost/ForumPostUpload";
import ForumSubTopic from "../../components/Forum/ForumSubTopic/ForumSubTopic";
import ForumTopic from "./ForumTopic";
import ForumTopicCURD from "../../components/Forum/ForumTopic/ForumTopicCURD";
import React from "react";

export default function Forum() {
  return (
    <Box>
      <Switch>
        <Route exact path="/forum" component={ForumIndex} />
        <Route path="/forum/forumTopicCURD" exact component={ForumTopicCURD} />
        <Route
          path="/forum/forumTopic/:forumTopicID"
          exact
          component={ForumTopic}
        />
        <Route
          path="/forum/forumSubTopic/:forumSubTopicID"
          exact
          component={ForumSubTopic}
        />
        <Route
          path="/forum/:forumSubTopicID/发布帖子"
          exact
          component={ForumPostUpload}
        />
        <Route path="/forum/forumPostList" exact component={ForumPostList} />
        <Route
          path="/forum/forumPost/:forumPostID"
          exact
          component={ForumPost}
        />
      </Switch>
      <Footer />
    </Box>
  );
}
