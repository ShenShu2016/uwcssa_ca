const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });
var documentClient = new aws.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  for (const record of event.Records) {
    console.log(JSON.stringify(record, null, 2));
    if (record.eventName === "INSERT") {
      console.log(record.dynamodb.NewImage.assigneeID.S);
      const assigneeID = record.dynamodb.NewImage.assigneeID.S;
      var params = {
        TableName: process.env.USERTABLE,
        Key: {
          id: assigneeID,
        },
      };
      const response = await documentClient.get(params).promise();
      const emailResponse = await ses
        .sendEmail({
          Destination: {
            ToAddresses: [response.Item.email],
          },
          Source: "admin@uwcssa.ca",
          Message: {
            Subject: {
              Data: `UWCSSA Kanban 通知: ${record.dynamodb.NewImage.title.S}`,
            },
            Body: {
              Text: {
                Data: `${
                  record.dynamodb.NewImage.userID.S
                } 给你添加的新的任务. 截止日期是 ${
                  record.dynamodb.NewImage.deadLine
                    ? record.dynamodb.NewImage.deadLine.S
                    : "待定"
                }`,
              },
            },
          },
        })
        .promise();
      console.log("EMAIL发送结束", emailResponse);
    }
  }
  return { status: "done" };
};
