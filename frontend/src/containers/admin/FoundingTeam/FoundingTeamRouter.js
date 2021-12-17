import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import FoundingTeamPreview from "./pages/FoundingTeamPreview";
import PostEditFoundingTeamMember from "./pages/PostFoundingTeamMember";
import React from "react";

export default function FoundingTeamRouter() {
  return (
    <Box>
      <Switch>
        <Route
          exact
          path="/admin/foundingTeam/"
          component={FoundingTeamPreview}
        />
        <Route
          exact
          path="/admin/foundingTeam/create"
          component={PostEditFoundingTeamMember}
        />
      </Switch>
    </Box>
  );
}
