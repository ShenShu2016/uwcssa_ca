import {
  Button,
  Box,
  ListItemText,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import React from "react";
import CustomAvatar from "../../CustomMUI/CustomAvatar";

export default function ForumIndexSubTopic({ forumSubTopic }) {
  const forumPost = forumSubTopic.forumPosts.items[0];
  console.log(forumPost);
  return (
    <div>
      <List
        component="div"
        disablePadding
        sx={{
          // p: 1,
          // mx: 1,
          // m:1,
          width: "100%",
          // boxShadow: 1,
          // borderRadius: 1,
          //   maxWidth: 360,
          // bgcolor: "white",
        }}
      >
        <ListItem sx={{
          display:"flex",
          alignItems:"flex-start",
          flexWrap:"wrap",
          
        }} >
          <ListItemText
            primary={
              <Button
                variant="subtitle2"
                color="primary"
                component={Link}
                to={`/forum/forumSubTopic/${forumSubTopic.id}`}
              >
                {forumSubTopic.name}
              </Button>
            }
            secondary={"此版块仅限注册用户使用"}
          />
          <ListItemText
            primary={forumSubTopic.forumPosts.items.length}
            secondary={"总帖数"}
          />
          {forumPost && (
            <Box sx={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
            }}>
              <ListItemAvatar>
                <CustomAvatar
                  link={true}
                  user={forumPost.user}
                  sx={{ 
                    width: {xs:24,sm:36}, 
                    height: {xs:24,sm:36},
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    component={Link}
                    underline="none"
                    to={`/forum/forumPost/${forumPost.id}`}
                    color="primary"

                  >
                    {forumPost.title}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    {"由"}
                    <Typography
                      // sx={{ display: "inline" }}
                      component={Link}
                      underline="none"
                      to={`/account/profile/${forumPost.owner}`}
                      color="primary"
                    >
                      {forumPost.owner},
                    </Typography>
                    {moment(forumPost.createdAt).fromNow()}
                  </React.Fragment>
                }
              />
            </Box>
          )}
        </ListItem>
      </List>
    </div>
  );
}
