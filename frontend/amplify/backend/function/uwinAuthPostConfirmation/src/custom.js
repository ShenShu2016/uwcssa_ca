var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context, callback) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "User" },
        username: { S: event.userName },
        email: { S: event.request.userAttributes.email },
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
    callback(null, event);
  } else {
    console.log("Error: Nothing was written to DynamoDB");
    callback(null, event);
  }
};
