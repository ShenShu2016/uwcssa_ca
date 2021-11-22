import { Fade, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { Link } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material/styles";

const TitleTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "blue.50",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid grey[50]",
  },
}));
export default function ForumPostTitleToolTip({ forumPost }) {
  console.log(forumPost);
  return (
    <div>
      <TitleTooltip
        title={<Typography color="white">{forumPost.title}</Typography>}
        placement="top-start"
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <Typography
          component={Link}
          to={`/forum/forumPost/${forumPost.id}`}
          color="text.primary"
          variant="subtitle1"
          noWrap
          sx={{
            display: "block",
            maxWidth: 180,
            textDecorationLine: "none",
            "&: hover": { color: "primary.main" },
            overflow: "hidden",
          }}
        >
          {forumPost.title}
        </Typography>
      </TitleTooltip>
    </div>
  );
}
