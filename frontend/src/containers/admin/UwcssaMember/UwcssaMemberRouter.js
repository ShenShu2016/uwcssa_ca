import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import PostEditUwcssaMemberMember from "./pages/PostUwcssaMember";
import React from "react";
import UwcssaMemberPreview from "./pages/UwcssaMemberPreview";

export default function UwcssaMemberRouter() {
  return (
    <Box>
      <Switch>
        <Route
          exact
          path="/admin/uwcssaMember/"
          component={UwcssaMemberPreview}
        />
        <Route
          exact
          path="/admin/uwcssaMember/create"
          component={PostEditUwcssaMemberMember}
        />
      </Switch>
    </Box>
  );
}
