/*
 * @Author: Shikai Jin
 * @Date: 2022-05-28 22:04:05
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 19:57:40
 * @FilePath: /uwcssa_ca/amplify/backend/function/ArticlePublishHandler/src/index.js
 * @Description:
 *
 */
// AWS https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/ArticlePublishHandler-devts?tab=code

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });
const email_template = require('./email_template');
var docClient = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION });
// eslint-disable-next-line no-undef
exports.handler = async function (event) {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (let i = 0; i < event['Records'].length; i++) {
    let record = event['Records'][i];
    if (record.eventName !== 'INSERT' && record.eventName !== 'MODIFY') {
      console.log('Event is not INSERT or MODIFY, ignore');
      continue;
    }
    if (record.dynamodb.NewImage.isPublish.BOOL === false) {
      console.log('Article is not published, ignore');
      continue;
    }
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    const tableName = process.env.UserProfile_Table;
    let dbParams = {
      TableName: tableName,
      FilterExpression: 'emailSubscription = :emailSubscription',
      ExpressionAttributeValues: {
        ':emailSubscription': true,
      },
    };
    let scanResults = [];
    let items;
    //没有处理多于50个人的情况
    do {
      items = await docClient.scan(dbParams).promise();
      items.Items.forEach((item) => scanResults.push(item));
      dbParams.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != 'undefined');

    const emailArray = scanResults
      .map((item) => {
        return item.email;
      })
      .filter((item) => item);

    console.log(emailArray);

    let noDupEmailArray = [...new Set(emailArray)];
    console.log(noDupEmailArray);

    const CHARSET = 'UTF-8';
    const HTML_EMAIL_CONTENT = email_template.articlePublishTemplate(record);
    const params = {
      Destination: {
        BccAddresses: noDupEmailArray,
      },
      Source: '"UWCSSA" <uwcssa-noreply@uwcssa.ca>',
      Message: {
        Body: {
          Html: {
            Charset: CHARSET,
            Data: HTML_EMAIL_CONTENT,
          },
        },
        Subject: {
          Charset: CHARSET,
          Data: `UWCSSA News: ${record.dynamodb.NewImage.title.S}`,
        },
      },
      ReplyToAddresses: ['uwincssa.it@gmail.com'],
    };

    const response = await ses.sendEmail(params).promise();
    console.log(response);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};
