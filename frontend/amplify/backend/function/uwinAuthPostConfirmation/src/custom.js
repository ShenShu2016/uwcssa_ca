var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.userName },
        username: { S: event.userName },
        __typename: { S: "User" },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        owner: { S: event.userName },
        uWindsorEmail: { S: "" },
        firstName: { S: "" },
        lastName: { S: "" },
        intro: { S: "" },
        major: { S: "" },
        avatarImgPath: { S: "" },
        backGroundImgPath: { S: "" },
        linkedin: { S: "" },
        github: { S: "" },
        tags: { L: [] },
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
