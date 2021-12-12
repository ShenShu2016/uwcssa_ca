import { Route, Switch } from "react-router-dom";

import ArticlesPreview from "./Article/ArticlesPreview";
import { Box } from "@mui/system";
import EditArticle from "./Article/EditArticle";
import Footer from "../Footer";
import PostArticle from "./Article/PostArticle";
import PostDepartment from "./UwcssaJob/PostDepartment";
import PostEvent from "../../components/Event/PostEvent";
import PostUwcssaJob from "./UwcssaJob/PostUwcssaJob";
import React from "react";
import Staff from "./Staff";
import UwcssaJobsPreview from "./UwcssaJob/UwcssaJobsPreview";

export default function StaffRouter() {
  return (
    <Box>
      <Switch>
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/staff/article" component={ArticlesPreview} />
        <Route exact path="/staff/uwcssaJob" component={UwcssaJobsPreview} />
        <Route
          exact
          path="/staff/article/postArticle"
          component={PostArticle}
        />
        <Route
          exact
          path="/staff/article/editArticle/:articleID"
          component={EditArticle}
        />
        <Route
          exact
          path="/staff/uwcssaJob/postUwcssaJob"
          component={PostUwcssaJob}
        />
        <Route exact path="/staff/event/postEvent" component={PostEvent} />
        <Route
          exact
          path="/staff/uwcssaJob/postDepartment"
          component={PostDepartment}
        />
      </Switch>
      <Footer />
    </Box>
  );
}
