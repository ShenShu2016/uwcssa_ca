/*
Regard to Amplify cli if a function has layer, then the variable in
lambda will be remove once the github repository

*/

const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });
const momentTimezone = require("moment-timezone");
var documentClient = new aws.DynamoDB.DocumentClient();

function getUSERTABLE() {
  if (process.env.ENV === "develop") {
    return "User-ooc7vvqq6jgrbhbybwrqn7njxy-develop";
  } else if (process.env.ENV === "master") {
    return "User-6hj4ht7unzduphcdran4ogs2za-master";
  }
}

function getToAddress(response) {
  if (process.env.ENV === "develop") {
    return [response.Item.email, "shushen2013@gmail.com"];
  } else if (process.env.ENV === "master") {
    return [
      response.Item.email,
      "liao11m@uwindsor.ca",
      "shushen2013@gmail.com",
    ];
  }
}

exports.handler = async (event) => {
  for (const record of event.Records) {
    console.log(JSON.stringify(record, null, 2));
    if (
      (record.eventName === "INSERT" || record.eventName === "MODIFY") &&
      record.dynamodb.NewImage.active.BOOL === true
    ) {
      console.log(record.dynamodb.NewImage.assigneeID.S);
      const assigneeID = record.dynamodb.NewImage.assigneeID.S;
      var params = {
        TableName: getUSERTABLE(),
        Key: {
          id: assigneeID,
        },
      };
      const response = await documentClient.get(params).promise();
      try {
        const emailResponse = await ses
          .sendEmail({
            Destination: {
              ToAddresses: getToAddress(response),
            },
            Source: `"uwcssa.ca" <admin@uwcssa.ca>`,
            Message: {
              Subject: {
                Data: `UWCSSA 任务提醒 ${record.dynamodb.NewImage.title.S} ${record.dynamodb.NewImage.kanbanStatus.S}`,
              },
              Body: {
                Text: {
                  Data: `${
                    record.eventName === "INSERT"
                      ? record.dynamodb.NewImage.userID.S
                      : record.dynamodb.NewImage.lastUpdatedID.S
                  }:\t ${
                    record.eventName === "INSERT"
                      ? "给你添加的新的任务"
                      : "给您更新了任务信息"
                  }.\n截止日期是: ${
                    record.dynamodb.NewImage.deadLine
                      ? `${momentTimezone(record.dynamodb.NewImage.deadLine.S)
                          .tz("America/New_York")
                          .format("LLLL")}\n距离截止日期:\t ${momentTimezone(
                          record.dynamodb.NewImage.deadLine.S
                        ).fromNow()}`
                      : "待定"
                  }\n\n${
                    record.dynamodb.NewImage.content.S
                  }\n\n点击 https://uwcssa.ca/kanban 查看\n\nShen Shu\n有任何问题请发邮件至: uwincssa.it@gmail.com`,
                },
              },
            },
          })
          .promise();
        console.log(
          "EMAIL发送结束",
          "发送给",
          getToAddress(response),
          emailResponse
        );
      } catch (error) {
        await ses
          .sendEmail({
            Destination: {
              ToAddresses: "shushen2013@gmail.com",
            },
            Source: `"uwcssa.ca" <admin@uwcssa.ca>`,
            Message: {
              Subject: {
                Data: `KanbanLambda failure`,
              },
              Body: {
                Text: {
                  Data: `${JSON.stringify(record, null, 2)}/n/n${JSON.stringify(
                    error,
                    null,
                    2
                  )}`,
                },
              },
            },
          })
          .promise();
      }
    }
  }
  return { status: "done" };
};
