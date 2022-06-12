/*
 * @Author: Shikai Jin
 * @Date: 2022-05-28 22:04:05
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 19:53:32
 * @FilePath: /uwcssa_ca/amplify/backend/function/ContactUsHandler/src/index.js
 * @Description:
 *
 */
// AWS https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/ContactUsHandler-devts?tab=code

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });
const email_template = require('./email_template');

// eslint-disable-next-line no-undef
exports.handler = async function (event) {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (let i = 0; i < event['Records'].length; i++) {
    let record = event['Records'][i];
    if (record.eventName !== 'INSERT') {
      console.log(`Unexpected eventName: ${record.eventName}`);
      continue;
    }

    if (!validateEmail(record.dynamodb.NewImage.email.S)) {
      console.log(`Invalid email: ${record.dynamodb.NewImage.email.S}`);
      continue;
    }

    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    const CHARSET = 'UTF-8';
    const HTML_EMAIL_CONTENT = email_template.contactUsTemplate(record);
    const params = {
      Destination: {
        ToAddresses: [record.dynamodb.NewImage.email.S],
        BccAddresses: ['shushen2013@gmail.com', 'zoejinmessiah@gmail.com'],
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
          Data: 'UWCSSA 感谢您的提问，我们会尽快解决问题',
        },
      },
      ReplyToAddresses: ['uwincssa.it@gmail.com'],
    };

    // console.log(params);
    const response = await ses.sendEmail(params).promise();
    console.log(response);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};
