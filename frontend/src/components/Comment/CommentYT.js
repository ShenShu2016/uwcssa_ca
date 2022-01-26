import CommentList from "./Component/CommentList";
import PostComment from "./Component/PostComment";
import React from "react";

export default function CommentYT({ id }) {
  return (
    <div>
      <PostComment id={id} />
      <CommentList />
    </div>
  );
}
