import React from "react";
import {
  Box,
  Button,
  Grid,
  CardActions,
  CardHeader,
  IconButton,
  // LinearProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import moment from "moment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});
export default function ForumPostCommentSubComments({subComments, subCommentsNextToken}){
  const classes = useStyles();
  console.log(subComments);
  
  return(
    <div>
      <Box>
        {subComments.map((subComment) =>{
          const { id, content, createdAt, userID, user } = subComment;
          return (
            <Box key={id} mb={2} className={classes.main}>
        <Grid container spacing={0} justifyContent="space-between">
          <Grid item xs={"auto"}>
          <CardHeader
              component={Link}
              to={`/account/profile/${userID}`}
              sx={{ p: 0, textDecoration: "none" }}
              avatar={<CustomAvatar link={false} user={user} />}
            />
          </Grid>
          <Grid item xs>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography
                mr={1}
                variant="subtitle2"
                sx={{ fontSize: "13px", color: "#030303" }}
              >
               {userID}
              </Typography>
              <Typography variant="caption" sx={{ color: "#606060" }}>
              {moment(createdAt).fromNow()}
              </Typography>
            </Box>
            <Box sx={{ my: 1 }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  color: "#030303",
                }}
              >
                {content}
              </Typography>
            </Box>
            <CardActions sx={{ p: 0 }}>
              <Button
                size="small"
                color="primary"
                startIcon={<ThumbUpAltOutlinedIcon />}
                sx={{ p: 0 }}
                style={{ width: "22px" }}
              >
                {/* {like.length} */}
              </Button>
              <Button
                size="small"
                color="primary"
                startIcon={<ThumbDownAltOutlinedIcon />}
              >
                {/* {unlike.length} */}
              </Button>
              <Button size="small" color="primary">
                回复
              </Button>
            </CardActions>
          </Grid>
          <Grid item xs={"auto"}>
            <IconButton aria-label="settings" className={classes.moreVertIcon}>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
          )
          })}
      </Box>
      {/* <Box className="moreCommentsStatus">
        {subCommentsNextToken ? (
          <Box>
            <Typography
              variant="h5"
              color="primary"
              align="center"
              sx={{ my: 3 }}
            >
              再往下翻一翻 加载更多
            </Typography>
            <LinearProgress />
          </Box>
        ) : (
          <Typography variant="h5" align="center" sx={{ my: 3 }}>
            已经到达底部
          </Typography>
        )}
      </Box> */}

    </div>
  );

}