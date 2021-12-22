import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import FoundingMemberPreview from "./pages/FoundingMemberPreview";
import PostEditFoundingMemberMember from "./pages/PostFoundingMember";
import React from "react";
import BottomNav from "../../BottomNav";

export default function FoundingMemberRouter() {
  return (
    <Box>
      <Switch>
        <Route
          exact
          path="/admin/foundingMember/"
          component={FoundingMemberPreview}
        />
        <Route
          exact
          path="/admin/foundingMember/create"
          component={PostEditFoundingMemberMember}
        />
      </Switch>
    </Box>
  );
}
