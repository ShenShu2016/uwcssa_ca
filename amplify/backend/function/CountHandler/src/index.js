/*
 * @Author: Shen Shu
 * @Date: 2022-06-07 20:25:03
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-08 00:39:01
 * @FilePath: /uwcssa_ca/amplify/backend/function/CountHandler/src/index.js
 * @Description:
 * https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/CountHandler-devts?tab=code
 */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();
exports.handler = async function (event) {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const record = event['Records'][0];
  if (record.eventName !== 'INSERT') {
    return Promise.resolve('not an insert event');
  }
  if (
    record.dynamodb.NewImage.__typename.S === 'Like' &&
    record.dynamodb.NewImage.commentLikesId?.S
  ) {
    console.log('这里是like,并且是 comment的');

    const params = {
      Key: { id: { S: record.dynamodb.NewImage.likeCountId.S } },
      TableName: 'Count-4r2t6l2uprdgjhmoocpazejjcq-devts',
    };
    const response = await dynamodb.getItem(params).promise();
    console.log(response);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};
