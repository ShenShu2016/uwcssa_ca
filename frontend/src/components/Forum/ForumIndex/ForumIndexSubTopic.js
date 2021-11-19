import {
  Box,
  ListItemText,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  Popover,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import React from "react";
import CustomAvatar from "../../CustomMUI/CustomAvatar";

export default function ForumIndexSubTopic({ forumSubTopic }) {
  const forumPost = forumSubTopic.forumPosts.items[0];
  console.log(forumPost);
  const [createDate, setCreateDate] = React.useState(false);
  const yesterdayStart = moment().subtract(1, "d").startOf("day");
  const yesterdayEnd = moment().subtract(1, "d").endOf("day");
  if (moment(forumPost.createdAt).isBetween(yesterdayStart, yesterdayEnd)) {
    setCreateDate(true);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElDate, setAnchorElDate] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpenDate = (event) => {
    setAnchorElDate(event.currentTarget);
  };

  const handlePopoverCloseDate = () => {
    setAnchorElDate(null);
  };
  const open = Boolean(anchorEl);
  const openDate = Boolean(anchorElDate);
  return (
    <div key={forumSubTopic.id}>
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
        <ListItem
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <ListItemText
            primary={
              <Typography
                variant="h6"
                color="text.primary"
                component={Link}
                to={`/forum/forumSubTopic/${forumSubTopic.id}`}
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
            primary={forumSubTopic.forumPosts.items.length}
            secondary={"总帖数"}
          />
          {forumPost && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // bgcolor:"black",
                overflow: "hidden",
                
                minWidth: { sm: 250 },
                minHeight: { sm: 75 },
                maxWidth: { sm: 250 },
                maxHeight: { sm: 75 },
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
              {/* <Box> */}
              <ListItemText
                primary={
                  <Typography
                    component={Link}
                    to={`/forum/forumPost/${forumPost.id}`}
                    color="text.primary"
                    variant="subtitle1"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    noWrap="true"
                    sx={{
                      minWidth:250,
                      maxWidth:250,
                      minHeight:72,
                      maxHeight:72,
                      textDecorationLine: "none",
                      "&: hover": { color: "primary.main" },
                      wordBreak: "break-word",
                      overflow: "hidden",
                    }}
                  >
                    {forumPost.title}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    {/* <Typography color="text.secondary" variant="body2"> */}
                    {"由"}
                    {/* </Typography> */}
                    <Typography
                      component={Link}
                      to={`/account/profile/${forumPost.owner}`}
                      color="text.secondary"
                      variant="body2"
                      aria-owns={open ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                      sx={{
                        textDecorationLine: "none",
                        display: "inline",
                        "&: hover": { color: "primary.main" },
                      }}
                    >
                      {forumPost.owner},
                    </Typography>
                    {createDate ? (
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        display="inline"
                        aria-owns={
                          openDate ? "mouse-over-popover-date" : undefined
                        }
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenDate}
                        onMouseLeave={handlePopoverCloseDate}
                      >
                        {moment(forumPost.createdAt).fromNow()}
                      </Typography>
                    ) : (
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        display="inline"
                        aria-owns={
                          openDate ? "mouse-over-popover-date" : undefined
                        }
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpenDate}
                        onMouseLeave={handlePopoverCloseDate}
                      >
                        {/* {moment(forumPost.createdAt).format("MM月DD日")} */}
                        {forumPost.createdAt.slice(5, 7)}月
                        {forumPost.createdAt.slice(8, 10)}号{" "}
                      </Typography>
                    )}
                  </React.Fragment>
                }
              />
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 0.8 }}>I use Popover.</Typography>
              </Popover>
              <Popover
                id="mouse-over-popover-date"
                sx={{
                  pointerEvents: "none",
                }}
                open={openDate}
                anchorEl={anchorElDate}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverCloseDate}
                disableRestoreFocus
              >
                <Typography sx={{ p: 0 }}>
                  {forumPost.createdAt.slice(0, 10)}
                </Typography>
              </Popover>
            </Box>
          )}
        </ListItem>
      </List>
    </div>
  );
}
