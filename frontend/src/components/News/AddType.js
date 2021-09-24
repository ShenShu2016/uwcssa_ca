import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";

import { IconButton } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { TextField } from "@material-ui/core";
import { createType } from "../../graphql/mutations";

export default function AddType() {
  const [typeData, setTypeData] = useState({ name: "" });

  const uploadType = async () => {
    //Upload the type
    console.log("typeData", typeData);
    const { name } = typeData;
    const createTypeInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(graphqlOperation(createType, { input: createTypeInput }));
  };

  return (
    <div className="newType">
      <TextField
        label="Type"
        value={typeData.name}
        onChange={(e) => setTypeData({ ...typeData, name: e.target.value })}
      />
      <IconButton onClick={uploadType}>
        <PublishIcon />
      </IconButton>
    </div>
  );
}
