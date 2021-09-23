import React, { useState } from "react";
import { createType } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { IconButton, TextField } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";

export default function AddType() {
  const [topicData, setTypeData] = useState({});

  const uploadType = async () => {
    //Upload the topic
    console.log("topicData", topicData);
    const { name } = topicData;
    const createTypeInput = {
      name,
      like: 0,
      unlike: 0,
    };
    await API.graphql(graphqlOperation(createType, { input: createTypeInput }));
  };

  return (
    <div className="newType">
      <TextField
        label="Name"
        value={topicData.name}
        onChange={(e) => setTypeData({ ...topicData, name: e.target.value })}
      />
      <IconButton onClick={uploadType}>
        <PublishIcon />
      </IconButton>
    </div>
  );
}
