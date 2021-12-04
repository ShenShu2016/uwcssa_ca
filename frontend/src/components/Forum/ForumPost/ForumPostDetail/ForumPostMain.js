import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useRef } from "react";

import CustomBreadcrumbs from "../../../CustomMUI/CustomBreadcrumbs";
import ForumPostCommentPost from "./ForumPostCommentPost";
import ForumPostContentComponent from "./ForumPostContentComponent";
import ForumPostUserComponent from "./ForumPostUserComponent";
import ForumPostComments from "./ForumPostComments";
import LikeButtonGroup from "../../../LikeButtonGroup";
import { useTitle } from "../../../../Hooks/useTitle";

export default function ForumPostMain({ forumPost }) {
  useTitle(forumPost.title);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView({behavior:"smooth"});
  const { id, content, imgS3Keys, createdAt, userID, tags, user } = forumPost;
  return (
    <div>
      <Box>
        <Box sx={{ padding: "2rem", maxWidth: "100%" }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {forumPost.title}
          </Typography>
          <CustomBreadcrumbs />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            // height: 220,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: "background.paper",
            color: "text.secondary",
          }}
        >
          <ForumPostUserComponent user={user} userID={userID} id={id} />
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{
              width: { xs: 280, sm: 480, md: 880 },
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
            }}
          >
            <ForumPostContentComponent
              tags={tags}
              content={content}
              imgS3Keys={imgS3Keys}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
              }}
            >
              <LikeButtonGroup item={forumPost} />
              <Box>
                <Typography
                  variant="caption"
                  component="span"
                  style={{ color: "grey" }}
                >
                  {createdAt.slice(0, 10)} {createdAt.slice(11, 16)}
                </Typography>
                <Button size="small" color="primary" onClick={executeScroll}>
                  回复 （共{forumPost.forumPostComments.items.length}回复贴）
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <ForumPostComments forumPost={forumPost} />
        <Box ref={myRef}>
          <ForumPostCommentPost forumPost={forumPost}/>
        </Box>
      </Box>
    </div>
  );
}
