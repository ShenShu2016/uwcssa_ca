var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event) => {
  let date = new Date();
  console.log("event", event);
  if (
    event.request.userAttributes.sub &&
    event.triggerSource !== "PostConfirmation_ConfirmForgotPassword"
  ) {
    let params = {
      Item: {
        __typename: { S: "User" },
        id: { S: event.userName },
        username: { S: event.userName },
        email: { S: event.request.userAttributes.email },
        owner: { S: event.userName },
        firstName: { S: "" },
        lastName: { S: "" },
        intro: { S: "" },
        major: { S: "" },
        avatarImgS3Key: { S: "" },
        backGroundImgS3Key: { S: "" },
        linkedIn: { S: "" },
        github: { S: "" },
        badges: {
          L: [
            event.request.userAttributes.email
              .toLowerCase()
              .includes("@uwindsor.ca")
              ? { S: "uwindsor_shield" }
              : undefined,
          ],
        },
        sortKey: { S: "SortKey" },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };

    try {
      await ddb.putItem(params).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");
  } else {
    console.log("Error: Nothing was written to DynamoDB");
  }
};
