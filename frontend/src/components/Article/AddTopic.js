import { API, graphqlOperation } from "aws-amplify";
import { IconButton, TextField } from "@material-ui/core";
import React, { useState } from "react";

import PublishIcon from "@material-ui/icons/Publish";
import { createTopic } from "../../graphql/mutations";

export default function AddTopic() {
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    //Upload the topic
    console.log("topicData", topicData);
    const { name } = topicData;
    const createTopicInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
  };

  return (
    <div className="newTopic">
      <TextField
        label="Topic"
        value={topicData.name}
        onChange={(e) => setTopicData({ ...topicData, name: e.target.value })}
      />
      <IconButton onClick={uploadTopic}>
        <PublishIcon />
      </IconButton>
    </div>
  );
}
