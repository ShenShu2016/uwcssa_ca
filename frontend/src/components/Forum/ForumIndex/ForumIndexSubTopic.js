import {
  Box,
  ListItemText,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  Popover,
  Fade,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import React, { useEffect } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import CustomAvatar from "../../CustomMUI/CustomAvatar";
const TitleTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "blue.50",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid grey[50]",
  },
}));
export default function ForumIndexSubTopic({ forumSubTopic }) {
  const forumPost = forumSubTopic.forumPosts.items[0];
  console.log(forumPost);
  const [createDate, setCreateDate] = React.useState(false);
  // const yesterdayStart = moment().subtract(1, "d").startOf("day");
  // const yesterdayEnd = moment().subtract(1, "d").endOf("day");
  useEffect(() => {
    const yesterdayStart = moment().subtract(1, "d").startOf("day");
    const yesterdayEnd = moment().subtract(1, "d").endOf("day");
    if (moment(forumPost.createdAt).isBetween(yesterdayStart, yesterdayEnd)) {
      setCreateDate(true);
    }
  }, [forumPost.createdAt]);

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
                    <TitleTooltip
                      title={
                        <Typography color="white">
                          {forumPost.title}
                        </Typography>
                      }
                      placement="top-start"
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <Typography
                        component={Link}
                        to={`/forum/forumPost/${forumPost.id}`}
                        color="text.primary"
                        variant="subtitle1"
                        noWrap
                        sx={{
                          display: "block",
                          maxWidth: 180,
                          textDecorationLine: "none",
                          "&: hover": { color: "primary.main" },
                          overflow: "hidden",
                        }}
                      >
                        {forumPost.title}
                      </Typography>
                    </TitleTooltip>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    {"由"}
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
                        {forumPost.createdAt.slice(8, 10)}号
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
                <Typography sx={{ p: 0.8 }}>
                  我是{forumPost.owner},你是谁
                </Typography>
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
                  {forumPost.createdAt.slice(0, 10)}{"-"}
                  {forumPost.createdAt.slice(11, 16)}
                </Typography>
              </Popover>
            </Box>
          )}
        </ListItem>
      </List>
    </div>
  );
}
