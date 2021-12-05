import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import grey from "@mui/material/colors/grey";
import ForumPostSubCommentPost from "../ForumPostSubComment/ForumPostSubCommentPost";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import { Link } from "react-router-dom";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function ForumPostSubComments({ comment, isReplying, idx }) {
  const [expanded, setExpanded] = useState(false);
  const [replyToUserID, setReplyToUserID] = useState(comment.owner);
 
  const replySet = (id) => {
    setReplyToUserID(id);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Box>
        <Typography sx={{ paddingBlock: "3rem 1rem" }}>评论：</Typography>
        {comment.forumPostSubComments.items.length === 0 ? (
          <div>暂无回复</div>
        ) : (
          <div>
            <Accordion
              expanded={!isReplying}
              onChange={handleChange(!expanded)}
            >
              <AccordionDetails>
                {comment.forumPostSubComments.items?.map((subComment) => {
                  const {
                    id,
                    content,
                    createdAt,
                    userID,
                    user,
                    replyToUserID,
                    // replyTo,
                  } = subComment;
                  return (
                    <Grid
                      container
                      spacing={0}
                      justifyContent="space-between"
                      key={id}
                    >
                      <Grid item xs={"auto"}>
                        <CardHeader
                          component={Link}
                          to={`/account/profile/${userID}`}
                          sx={{ p: 0, textDecoration: "none" }}
                          avatar={
                            <CustomAvatar
                              link={false}
                              user={user}
                              sx={{ width: 24, height: 24 }}
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs>
                        <Box sx={{ display: "flex", mb: 0.5 }}>
                          <Typography
                            mr={1}
                            // variant="subtitle2"
                            sx={{ fontSize: "13px", color: grey[900] }}
                          >
                            {userID} 回复 {replyToUserID}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "#606060" }}
                          >
                            {/* {moment(createdAt).fromNow()} */}
                            {createdAt.slice(0, 10)} {createdAt.slice(11, 19)}
                          </Typography>
                        </Box>
                        <Box sx={{ my: 0 }}>
                          <Typography
                            variant="body2"
                            component="span"
                            style={{
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word",
                              color: grey[900],
                              fontSize: 14,
                            }}
                          >
                            {content}
                          </Typography>
                        </Box>
                        <CardActions sx={{ p: 0 }}>
                          {/* <LikeButtonGroup item={subComment} /> */}
                          <Button size="small" color="primary" onClick={()=>replySet(userID)}>
                            回复
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </Box>
      <Box>
        <ForumPostSubCommentPost
          comment={comment}
          isReplying={isReplying}
          replyToUserID ={replyToUserID}
          idx={idx}
        />
      </Box>
    </div>
  );
}
