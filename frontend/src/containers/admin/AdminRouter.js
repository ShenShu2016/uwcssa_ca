import { Route, Switch } from "react-router-dom";

import Admin from "./pages/Admin";
import { Box } from "@mui/system";
import Footer from "../Footer";
import FoundingMemberRouter from "./FoundingMember/FoundingMemberRouter";
import React from "react";
import UwcssaMemberRouter from "./UwcssaMember/UwcssaMemberRouter";
import BottomNav from "../BottomNav";

export default function AdminRouter() {
  return (
    <Box>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/foundingMember" component={FoundingMemberRouter} />
        <Route path="/admin/uwcssaMember" component={UwcssaMemberRouter} />
        {/* <Route exact path="/staff" component={Staff} />
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
        /> */}
      </Switch>
      <Footer />
      <BottomNav />
    </Box>
  );
}
