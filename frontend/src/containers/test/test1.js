import { Button, Stack, Typography } from "@mui/material";

import API from "@aws-amplify/api";
import { Link } from "react-router-dom";
import React from "react";
import { getArticle } from "../../graphql/queries";

const GetArticle = async (articleID) => {
  console.log("articleID", articleID);
  try {
    const response = await API.graphql({
      query: getArticle,
      variables: { id: articleID, filter: { active: { eq: true } } },
      authMode: "AWS_IAM",
    });
    console.log(response);

    console.log(response.data.getArticle === null);
  } catch (error) {
    console.log("error", error);
  }
};

export default function test1() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Test 1</Typography>
      <Button variant="contained" onClick={(e) => GetArticle("xczfsdfdsf")}>
        click me
      </Button>
      <Button component={Link} to="/test/googleMapsPlace">
        googleMapsPlace
      </Button>
      <Button variant="contained" component={Link} to="/test/Form">
        Form
      </Button>
      <Button variant="contained" component={Link} to="/test/FormQuestion">
        FormQuestion
      </Button>
    </Stack>
  );
}
