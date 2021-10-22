import {
  Avatar,
  Box,
  Button,
  Grid,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

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
const ForumPostComments = ({ forumPost }) => {
  const classes = useStyles();
  console.log(forumPost.forumPostComments);
  const forumPostCommentsData = forumPost.forumPostComments.items;
  const sortForumPostCommentsData = forumPostCommentsData.sort((a, b) => (a.createdAt > b.createdAt) ? 1:-1).reverse();
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {Object.keys(forumPost).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div>
          {sortForumPostCommentsData.map((comment) => {
            const { id, content, createdAt, like, unlike, owner } = comment;

            return (
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
                      <Button size="small" color="primary">
                        回复
                      </Button>
                    </CardActions>
                  </Grid>
                  <Grid item xs={"auto"}>
                    <IconButton
                      aria-label="settings"
                      className={classes.moreVertIcon}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ForumPostComments;
