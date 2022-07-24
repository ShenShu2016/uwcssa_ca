/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:53:13
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 17:59:34
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/components/Content/Content.tsx
 * @Description:
 *
 */

import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";

import CommentGroupButton from "components/Comment/CommentOverview/components/CommentGroupButton";
import { Event } from "redux/event/eventSlice";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import TwitterIcon from "@mui/icons-material/Twitter";
import moment from "moment";
import stringAvatar from "components/Avatar/AvatarFunction";

function Content({ event }: { event: Event }): JSX.Element {
  return (
    <Box>
      <Box>
        <Box className="ck-content">{ReactHtmlParser(event.content)}</Box>
      </Box>

      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {event && event.user ? (
          <Box display="flex" alignItems="center">
            <Avatar
              style={{ width: 50, height: 50, marginRight: "1rem" }}
              src={event.user.avatarURL?.objectThumbnailURL}
              {...stringAvatar(event.user.name)}
            />
            <Box>
              <Typography fontWeight={600}>{event.user.name}</Typography>
              <Typography color="text.secondary">
                {moment(event.createdAt).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a",
                )}
              </Typography>
            </Box>
          </Box>
        ) : null}
        {event.likes?.items && event.count && (
          <CommentGroupButton likes={event.likes} count={event.count} />
        )}
        <Box display="flex" alignItems="center">
          <Typography color="text.secondary">Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
