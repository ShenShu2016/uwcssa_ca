import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import ForumPostTitleToolTip from "../ForumPost/ForumPostTitleToolTip";
import ForumPostUserIDComponent from "../ForumPost/ForumPostUserIDComponent";
import ForumTimeComponent from "../ForumTimeComponent";
import { Link } from "react-router-dom";
import React from "react";

export default function ForumHomeSubTopic({ forumSubTopic }) {
  const forumPost = forumSubTopic.forumPosts.items[0];
  const forumPostComments = forumSubTopic.forumPosts.items.map(
    (forumPost) => forumPost.forumPostComments.items.length
  );
  let forumPostCommentCount = 0;
  forumPostComments.map((forumPostComment) => (forumPostCommentCount += forumPostComment));
  // console.log(forumSubTopic);
  return (
    <div>
      <Paper
        elevation={0}
        variant="outlined"
        square
        sx={{
          // px:1,
          mx: 1,
        }}
      >
        <List
          component="div"
          disablePadding
          sx={{
            width: "100%",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <ListItemText
              sx={{
                display: "flex",
                width: { sm: 220 },
                height: { sm: 68 },
                // alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              primary={
                <Typography
                  variant="h6"
                  color="text.primary"
                  component={Link}
                  to={`/forum/${forumSubTopic.forumTopicID}/${forumSubTopic.id}`}
                  sx={{
                    textDecorationLine: "none",
                    "&: hover": { color: "primary.main" },
                  }}
                >
                  {forumSubTopic.name}
                </Typography>
              }
              secondary={"此版块仅限注册用户使用"}
            />
            <ListItemText
              sx={{
                display: "flex",
                width: { sm: 50 },
                height: { sm: 68 },
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              primary={forumSubTopic.forumPosts.items.length}
              secondary={"总帖数"}
            />
            <ListItemText
              sx={{
                display: "flex",
                width: { sm: 50 },
                height: { sm: 68 },
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              primary={forumPostCommentCount}
              secondary={"总回复数"}
            />
            {forumPost && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // bgcolor:"black",
                  overflow: "hidden",
                  width: { sm: 250 },
                  height: { sm: 75 },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar
                    link={true}
                    user={forumPost.user}
                    sx={{
                      width: { xs: 24, sm: 36 },
                      height: { xs: 24, sm: 36 },
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <ForumPostTitleToolTip
                        forumPost={forumPost}
                        forumSubTopic={forumSubTopic}
                      />
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        {"由"}
                        <ForumPostUserIDComponent userID={forumPost.userID} />
                        {" , "}
                        <ForumTimeComponent time={forumPost.createdAt} />
                      </Box>
                    </React.Fragment>
                  }
                />
              </Box>
            )}
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}
