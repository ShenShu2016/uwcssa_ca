import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ForumPostContentComponent from "../ForumPostDetail/ForumPostContentComponent";
//import ForumPostSubCommentPost from "../ForumPostSubComment/ForumPostSubCommentPost";
import ForumPostSubComments from "../ForumPostSubComment/ForumPostSubComments";
import ForumPostUserComponent from "../ForumPostDetail/ForumPostUserComponent";
import LikeButtonGroup from "../../../LikeButtonGroup";

export default function ForumPostCommentMain({ comment, idx }) {
  const [isReplying, setIsReplying] = useState(false);
  const replySwitch = () => setIsReplying((isReplying) => !isReplying);
  const { id, content, createdAt, userID, user, forumPostSubComments } =
    comment;
  const imgS3Keys = 0;
  return (
    <div>
      {comment ? (
        <Box key={id}>
          <Box
            sx={{
              display: "flex",
              height: "auto",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              // height: 220,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
            }}
          >
            <ForumPostUserComponent user={user} userID={userID} />
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                width:{ xs: 300, sm: 420, md: 880 },
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <ForumPostContentComponent
                //   tags={tags}
                content={content}
                imgS3Keys={imgS3Keys}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                  }}
                >
                  <LikeButtonGroup item={comment} />
                  <Box>
                    {!isReplying ? (
                      <Box>
                        <Typography
                          variant="caption"
                          component="span"
                          style={{ color: "grey" }}
                        >
                          {createdAt.slice(0, 10)} {createdAt.slice(11, 16)}
                        </Typography>
                        <Button
                          size="small"
                          color="primary"
                          variant="text"
                          endIcon={<ArrowDropDownRoundedIcon />}
                          onClick={replySwitch}
                        >
                          回复（{forumPostSubComments.items.length}）
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        <Typography
                          variant="caption"
                          component="span"
                          style={{ color: "grey" }}
                        >
                          {createdAt.slice(0, 10)} {createdAt.slice(11, 16)}
                        </Typography>
                        <Button
                          size="small"
                          variant="text"
                          endIcon={<ArrowDropUpRoundedIcon />}
                          color="primary"
                          onClick={replySwitch}
                        >
                          收起回复
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
                {isReplying && (
                  <Box>
                    <ForumPostSubComments
                      comment={comment}
                      isReplying={isReplying}
                      idx={idx}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
