import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";

import { Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { TextField } from "@material-ui/core";
import { createMarketCategory } from "../../../../graphql/mutations";

export default function AddMarketCategory() {
  const [MarketCategoryData, setMarketCategoryData] = useState({ name: "" });

  const uploadMarketCategory = async () => {
    console.log("typeData", MarketCategoryData);
    const { name } = MarketCategoryData;
    const createMarketCategoryInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createMarketCategory, {
        input: createMarketCategoryInput,
      })
    );
  };

  return (
    <div className="newType">
      <TextField
        label="Type"
        value={MarketCategoryData.name}
        onChange={(e) =>
          setMarketCategoryData({ ...MarketCategoryData, name: e.target.value })
        }
      />
      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadMarketCategory}
        color="primary"
      >
        上传新的marketType
      </Button>
    </div>
  );
}
