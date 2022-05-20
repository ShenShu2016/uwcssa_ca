/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:21:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-19 23:59:17
 * @FilePath: /uwcssa_ca/frontend/amplify/backend/function/uwcssatsPostConfirmation/src/custom.js
 * @Description:
 *
 */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  let date = new Date();
  console.log('event', event);
  if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {
    let User = {
      Item: {
        __typename: { S: 'User' },
        id: { S: event.userName },
        email: { S: event.request.userAttributes.email },
        userName: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        owner: { S: event.userName },
      },
      TableName: process.env.User_Table,
    };
    let UserProfile = {
      Item: {
        __typename: { S: 'UserProfile' },
        id: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        owner: { S: event.userName },
      },
      TableName: process.env.UserProfile_Table,
    };

    try {
      await ddb.putItem(User).promise();
      console.log('User添加到DynamoDB 成功！');
      await ddb.putItem(UserProfile).promise();
      console.log('UserProfile添加到DynamoDB 成功！');
    } catch (error) {
      console.log(error);
    }
  }
  return event;
};
