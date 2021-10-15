import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";

import { Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { TextField } from "@material-ui/core";
import { createMarketType } from "../../../../graphql/mutations";

export default function AddMarketType() {
  const [MarketTypeData, setMarketTypeData] = useState({ name: "" });

  const uploadMarketType = async () => {
    console.log("typeData", MarketTypeData);
    const { name } = MarketTypeData;
    const createMarketTypeInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createMarketType, { input: createMarketTypeInput })
    );
  };

  return (
    <div className="newType">
      <TextField
        label="Type"
        value={MarketTypeData.name}
        onChange={(e) =>
          setMarketTypeData({ ...MarketTypeData, name: e.target.value })
        }
      />
      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadMarketType}
        color="primary"
      >
        上传新的marketType
      </Button>
    </div>
  );
}
