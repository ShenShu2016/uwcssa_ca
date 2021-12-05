import { Box, Button, Divider, Typography, Paper, Stack } from "@mui/material";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CustomBreadcrumbs from "../../../CustomMUI/CustomBreadcrumbs";
import ForumPostUserIDComponent from "../ForumPostUserIDComponent";
import ForumTimeComponent from "../../ForumTimeComponent";
import ForumPostCommentPost from "./ForumPostCommentPost";
import ForumPostContentComponent from "./ForumPostContentComponent";
import ForumPostUserComponent from "./ForumPostUserComponent";
import ForumPostComments from "./ForumPostComments";
import LikeButtonGroup from "../../../LikeButtonGroup";
import { useTitle } from "../../../../Hooks/useTitle";

export default function ForumPostMain({ forumPost }) {
  useTitle(forumPost.title);
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  const { id, content, imgS3Keys, createdAt, userID, tags, user } = forumPost;
  return (
    <div>
      <Box
        sx={{
          // width: { xs: 375, sm: 480, md: 880, lg: 1080 },
        }}
      >
        <Box>
          <CustomBreadcrumbs />
        </Box>
        <Box>
          <Paper
            sx={{
              padding: "1rem",
              mb: 2,
              width: { xs: 320, sm: 480, md: 880, lg: 1080 },
            }}
          >
            <Stack direction="column" divider={<Divider flexItem />}>
              <Typography
                variant="h5"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  fontWeight: 500,
                  wordBreak: "break-word",
                  // color: "grey",
                }}
              >
                {forumPost.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 1, width: { xs: 320, sm: 460, md: 860, lg: 1060 } }}
              >
                <Stack direction="row">
                  由<ForumPostUserIDComponent userID={userID} />,
                  <ForumTimeComponent time={createdAt} />在
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    component={Link}
                    to={`/forum/${forumPost.forumSubTopic.forumTopicID}/${forumPost.forumSubTopic.id}`}
                    sx={{
                      textDecorationLine: "none",
                      "&: hover": { color: "primary.main" },
                    }}
                  >
                    {forumPost.forumSubTopic.name}
                  </Typography>
                </Stack>
                <Box sx={{}}>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    // onClick={executeScroll}
                  >
                    分享
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={executeScroll}
                  >
                    回帖
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            width: { xs: 320, sm: 480, md: 880, lg: 1080 },
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
              width: {xs:280, sm: 480, md: 880, lg: 1080 },
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
          <ForumPostCommentPost forumPost={forumPost} />
        </Box>
      </Box>
    </div>
  );
}
