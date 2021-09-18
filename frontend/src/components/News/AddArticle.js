import React, { useState } from "react";

import { createArticle } from "../../graphql/mutations";
import { v4 as uuid } from "uuid";

import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";

import { IconButton, TextField } from "@material-ui/core";

import PublishIcon from "@material-ui/icons/Publish";

export default function AddArticle() {
  const [articleData, setArticleData] = useState({});
  const [imgData, setImgData] = useState();

  const uploadArticle = async () => {
    //Upload the article
    console.log("articleData", articleData);
    const { title, content } = articleData;

    const { key } = await Storage.put(`${uuid()}.png`, imgData, {
      contentType: "image/png",
    });

    const createArticleInput = {
      title,
      content,
      imagePath: key,
      like: 0,
      unlike: 0,
    };
    await API.graphql(
      graphqlOperation(createArticle, { input: createArticleInput })
    );
  };

  return (
    <div className="newArticle">
      <TextField
        label="Title"
        value={articleData.title}
        onChange={(e) =>
          setArticleData({ ...articleData, title: e.target.value })
        }
      />
      <TextField
        label="Content"
        value={articleData.content}
        onChange={(e) =>
          setArticleData({ ...articleData, content: e.target.value })
        }
      />
      <input
        type="file"
        accept="image/png"
        onChange={(e) => setImgData(e.target.files[0])}
      />
      <IconButton onClick={uploadArticle}>
        <PublishIcon />
      </IconButton>
    </div>
  );
}
