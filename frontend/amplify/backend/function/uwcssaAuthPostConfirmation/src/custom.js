var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();
const ses = new aws.SES({ region: "us-east-1" });
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
        firstName: undefined,
        lastName: undefined,
        intro: undefined,
        major: undefined,
        avatarImgURL: undefined,
        backGroundImgURL: undefined,
        linkedIn: undefined,
        github: undefined,
        badges: {
          L: [
            event.request.userAttributes.email
              .toLowerCase()
              .includes("@uwindsor.ca")
              ? { S: "uwindsor" }
              : undefined,
            { S: "top100" },
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
    try {
      await ses.sendEmail({
        Destination: {
          ToAddresses: "shushen2013@gmail.com",
        },
        Source: `"uwcssa.ca" <admin@uwcssa.ca>`,
        Message: {
          Subject: {
            Data: `UWCSSA 新用户注册`,
          },
          Body: {
            Text: {
              Data: `${params}/n/n`,
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
    console.log("Success: Everything executed correctly");
  } else {
    console.log("Error: Nothing was written to DynamoDB");
  }
};
