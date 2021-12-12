/* Amplify Params - DO NOT EDIT
	API_UWCSSA_GRAPHQLAPIENDPOINTOUTPUT
	API_UWCSSA_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = (event) => {
  //eslint-disable-line
  let date = new Date();
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(async (record) => {
    if (record.dynamodb.NewImage) {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log("DynamoDB Record: %j", record.dynamodb);
      console.log(
        "record.dynamodb.NewImage.__typename",
        record.dynamodb.NewImage.__typename
      );
      console.log("record.eventSourceARN", record.eventSourceARN);
      let params = {
        Item: {
          __typename: { S: "UserMutationLog" },
          id: { S: record.eventID },
          eventName: { S: record.eventName },
          typename: record.dynamodb.NewImage.__typename,
          eventSourceARN: { S: record.eventSourceARN },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
          sortKey: { S: "SortKey" },
          record: { S: JSON.stringify(record, null, 2) },
          userID: record.dynamodb.NewImage.userID
            ? record.dynamodb.NewImage.userID
            : record.dynamodb.NewImage.username,
        },
        TableName: process.env.USERMUTATIONLOGTABLE,
      };
      console.log("params", params);
      try {
        await ddb.putItem(params).promise();
        console.log("userlog 创建成功啦！！！！！！！！！");
      } catch (err) {
        console.log("userlog 创建失败", err);
      }
      console.log("Success: Everything executed correctly");
    }
  });
};
