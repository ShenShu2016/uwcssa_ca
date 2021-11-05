/* Amplify Params - DO NOT EDIT
	API_SHUSHEN_GRAPHQLAPIENDPOINTOUTPUT
	API_SHUSHEN_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach((record) => {
    console.log("record.eventName", record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
    let date = new Date();
    var id = record.dynamodb.NewImage.forumPostID["S"];
    let params = {
      TableName: "ForumPost-ooc7vvqq6jgrbhbybwrqn7njxy-develop", //dynamodb table name
      Key: {
        id: id,
      },
      UpdateExpression: "set lastReplyAt = :l",
      ExpressionAttributeValues: {
        ":l": date.toISOString(),
      },
      ReturnValues: "UPDATED_NEW",
    };
    console.log("params", params);
    console.log("Updating the item...");
    docClient.update(params, function (err, data) {
      if (err) {
        console.error(
          "Unable to update item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
      }
    });
  });
};
