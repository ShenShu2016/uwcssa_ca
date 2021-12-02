import { Box, Pagination } from "@mui/material";
import ForumHomePostComponent from "../ForumHome/ForumHomePostComponent";
// import ForumSubTopicPagination from "./ForumSubTopicPagination";
import React, { useState } from "react";

export default function ForumSubTopicPosts({ posts, forumSubTopic }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(3);
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.items?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = posts.items?.length;
  const pageCount = Math.ceil(totalPosts / postsPerPage);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  // console.log(posts);
  return (
    <Box sx={{}}>
      <Box sx={{padding: "1rem"}}>
        <Pagination
          page={currentPage}
          count={pageCount}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Box>
      <Box sx={{ padding: "1rem", maxwidth: "100%" }}>
        {currentPosts?.map((forumPost) => {
          return (
            <ForumHomePostComponent
              forumPost={forumPost}
              key={forumPost.id}
            />
          );
        })}
      </Box>
    </Box>
  );
}
