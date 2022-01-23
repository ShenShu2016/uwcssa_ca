const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

exports.handler = async (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
    if (record.eventName === "INSERT") {
      console.log(record.dynamodb.NewImage.userID.S);
      console.log(record.dynamodb.NewImage.email.S);
      console.log(record.dynamodb.NewImage.numberOfPeople.N);

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [
              record.dynamodb.NewImage.email.S,
              "shushen2013@gmail.com",
            ],
          },
          Source: `"uwcssa.ca" <admin@uwcssa.ca>`,
          Message: {
            Subject: {
              Data: `你参加了巴拉巴拉请准时到达`,
            },
            Body: {
              Text: {
                Data: `不知道你要说什么之后再改把`,
              },
            },
          },
        })
        .promise();
    }
  }
  return Promise.resolve("Successfully processed DynamoDB record");
};
