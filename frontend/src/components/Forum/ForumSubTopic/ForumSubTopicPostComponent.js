import {
  CardActionArea,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";

export default function ForumSubTopicPostComponent({ forumPost }) {
  console.log("forumPost", forumPost);
  const {
    id,
    title,
    content,
    // imgS3Keys,
    createdAt,
    userID,
    user,
    forumSubTopic,
  } = forumPost;
  return (
    <div>
      <Paper
        elevation={0}
        variant="outlined"
        // square
        sx={{
          maxWidth: "100%",
          // margin: "1rem auto",
          padding: "1rem",
          maxHeight: "255px",
          // borderRadius: "8px",
          // border: "1px solid #dfe1e5",
        }}
      >
        <Grid container spacing={0} sx={{ height: "100%" }}>
          <Grid item xs sx={{ p: 0 }}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ height: "100%" }}
            >
              <Grid item xs={"auto"} sx={{ paddingBottom: "0.5rem" }}>
                <CardActionArea
                  component={Link}
                  to={`/account/profile/${userID}`}
                >
                  <CardHeader
                    sx={{ p: 0 }}
                    avatar={
                      <CustomAvatar
                        link={false}
                        // variant={"square"}
                        sx={{
                          width: { xs: 24, sm: 36 },
                          height: { xs: 24, sm: 36 },
                        }}
                        user={user}
                      />
                    }
                    title={userID}
                  />
                </CardActionArea>
              </Grid>
              <CardActionArea
                component={Link}
                to={`/forum/${forumSubTopic.forumTopicID}/${forumSubTopic.id}/${id}`}
              >
                <Grid item xs={"auto"} sx={{ marginBottom: "0.5rem" }}>
                  <div style={{ maxHeight: "48px", overflow: "hidden" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: "18px",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        lineHeight: "1.3em",
                        color: "#202124",
                      }}
                    >
                      {title}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs>
                  <div style={{ maxHeight: "80px", overflow: "hidden" }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        wordBreak: "break-word",
                        overflow: "hidden",
                      }}
                    >
                      {content}
                    </Typography>
                  </div>
                </Grid>
              </CardActionArea>
              <Grid item xs={"auto"} sx={{ marginTop: "0.5rem" }}>
                <Typography variant="overline" color="textSecondary">
                  {moment(createdAt).fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={"auto"}>
              <div>
                {imgS3Keys[0] &&
                <CardActionArea>
                  <img src={imageURL} alt="" className={classes.s3image} />
                </CardActionArea>
                }
              </div>
            </Grid> */}
        </Grid>
      </Paper>
    </div>
  );
}
