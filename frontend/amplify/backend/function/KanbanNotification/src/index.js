const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });
var documentClient = new aws.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  for (const record of event.Records) {
    console.log(JSON.stringify(record, null, 2));
    if (record.eventName === "INSERT" || record.eventName === "MODIFY") {
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
              Data: `UWCSSA 任务提醒 ${record.dynamodb.NewImage.title.S} ${record.dynamodb.NewImage.kanbanStatus.S}`,
            },
            Body: {
              Text: {
                Data: `${record.dynamodb.NewImage.userID.S} ${
                  record.eventName === "INSERT"
                    ? "给你添加的新的任务"
                    : "给您更新了任务信息"
                }.\n截止日期是 ${
                  record.dynamodb.NewImage.deadLine
                    ? record.dynamodb.NewImage.deadLine.S
                    : "待定"
                }\n\n${
                  record.dynamodb.NewImage.content.S
                }\n\nShen Shu\n 有任何问题请发邮件至 你老大给你换内容啦`,
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
