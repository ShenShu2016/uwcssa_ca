import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import Footer from "../../Footer";
import FoundingTeamPreview from "./pages/FoundingTeamPreview";
import PostEditFoundingTeamMember from "./pages/PostEditFoundingTeamMember";
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
          path="/admin/foundingTeam/add"
          component={PostEditFoundingTeamMember}
        />
      </Switch>
      <Footer />
    </Box>
  );
}
