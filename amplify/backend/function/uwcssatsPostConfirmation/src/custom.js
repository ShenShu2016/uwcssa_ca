/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:21:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-12 19:23:50
 * @FilePath: /uwcssa_ca/amplify/backend/function/uwcssatsPostConfirmation/src/custom.js
 * @Description:
 *
 */
// AWS https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/uwcssatsPostConfirmation-devts?tab=code

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

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
    let userProfileCountParams = {
      Key: { id: { S: 'UserProfileTable' } },
      TableName: process.env.Count_Table,
    };
    const result = await dynamodb.getItem(userProfileCountParams).promise();
    console.log(result);
    let newRankCount = parseInt(result.Item.count.N) + 1;

    let UserProfile = {
      Item: {
        __typename: { S: 'UserProfile' },
        id: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        active: { S: 'T' },
        rank: { N: newRankCount.toString() },
        uWindsorEmail: {
          S: event.request.userAttributes.email
            .toLowerCase()
            .includes('@uwindsor.ca')
            ? event.request.userAttributes.email.toLowerCase()
            : undefined,
        },
        windsorStudent: {
          BOOL: event.request.userAttributes.email
            .toLowerCase()
            .includes('@uwindsor.ca'),
        },
        emailSubscription: { BOOL: true },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        owner: { S: event.userName },
      },
      TableName: process.env.UserProfile_Table,
    };

    let params2 = {
      TableName: process.env.Count_Table, //dynamodb table name
      Key: {
        id: { S: result.Item.id.S },
      },
      UpdateExpression: 'set #count = :count, #updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':count': { N: newRankCount.toString() },
        ':updatedAt': { S: new Date().toISOString() },
      },
      ExpressionAttributeNames: {
        '#count': 'count',
        '#updatedAt': 'updatedAt',
      },
      ReturnValues: 'UPDATED_NEW',
    };

    try {
      await Promise.all([
        dynamodb.updateItem(params2).promise(),
        dynamodb.putItem(User).promise(),
        dynamodb.putItem(UserProfile).promise(),
      ]);

      console.log('UserProfile count update 成功   ' + newRankCount);
      console.log('User添加到DynamoDB 成功！');
      console.log('UserProfile添加到DynamoDB 成功！');
    } catch (error) {
      console.log(error);
    }
  }
  return event;
};
