import { Route, Switch } from "react-router-dom";

import ArticlesPreview from "./Article/ArticlesPreview";
import { Box } from "@mui/system";
import PostArticle from "./Article/PostArticle";
import PostDepartment from "./UwcssaJob/PostDepartment";
import PostUwcssaJob from "./UwcssaJob/PostUwcssaJob";
import React from "react";
import Staff from "./Staff";
import UwcssaJobsPreview from "../../components/Event/EventDataGrid";
import { postEvent } from "../../redux/reducers/eventSlice";

export default function StaffRouter() {
  return (
    <Box>
      <Switch>
        <Route path="/staff" component={Staff} />
        <Route path="/staff/article" component={ArticlesPreview} />
        <Route path="/staff/uwcssaJob" component={UwcssaJobsPreview} />
        <Route path="/staff/article/postArticle" component={PostArticle} />
        <Route
          path="/staff/uwcssaJob/postUwcssaJob"
          component={PostUwcssaJob}
        />
        <Route path="/staff/event/postEvent" component={postEvent} />
        <Route
          path="/staff/uwcssaJob/postDepartment"
          component={PostDepartment}
        />
      </Switch>
    </Box>
  );
}
