import {
  Avatar,
  Box,
  Button,
  Grid,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
  // Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ForumPostComment from "../ForumPostSubComment/ForumPostComment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  cardContent: {},
  main: {},
});
function stringToColor(string) {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.slice(0, 1)}`,
  };
}

export default function ForumPostCommentComponent({ comment }) {
  const classes = useStyles();
  const [isReplying, setIsReplying] = useState(false);
  const replySwitch = () => setIsReplying((isReplying) => !isReplying);
  const { id, content, createdAt, like, unlike, owner } = comment;

  return (
    <div>
      <Box key={id} mb={2} className={classes.main}>
        <Grid container spacing={0} justifyContent="space-between">
          <Grid item xs={"auto"}>
            <CardHeader
              component={Link}
              to={`/account/profile/${owner}`}
              sx={{ p: 0, textDecoration: "none" }}
              avatar={<Avatar {...stringAvatar(owner.toUpperCase())} />}
            />
          </Grid>
          <Grid item xs>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography
                mr={1}
                variant="subtitle2"
                sx={{ fontSize: "13px", color: "#030303" }}
              >
                {owner}
              </Typography>
              <Typography variant="caption" sx={{ color: "#606060" }}>
                {createdAt.slice(0, 10)} {createdAt.slice(11, 19)}
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
              {isReplying && <ForumPostComment comment={comment} />}
            </Box>
            <CardActions sx={{ p: 0 }}>
              <Button
                size="small"
                color="primary"
                startIcon={<ThumbUpAltOutlinedIcon />}
                sx={{ p: 0 }}
                style={{ width: "22px" }}
              >
                {like.length}
              </Button>
              <Button
                size="small"
                color="primary"
                startIcon={<ThumbDownAltOutlinedIcon />}
              >
                {unlike.length}
              </Button>
              {isReplying ? (
              <Button size="small" color="primary" onClick={replySwitch}>
              收起评论
            </Button>
              ):(
              <Button size="small" color="primary" onClick={replySwitch}>
                评论({comment.forumPostSubComments.length})
              </Button>
              )}
              {/* <Button size="small" color="primary" onClick={replySwitch}>
                回复
              </Button> */}
              {/* {isReplying && <ForumPostComment comment={comment} />} */}
            </CardActions>
          </Grid>
          <Grid item xs={"auto"}>
            <IconButton aria-label="settings" className={classes.moreVertIcon}>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}
