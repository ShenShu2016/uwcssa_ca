/*
 * @Author: Shen Shu
 * @Date: 2022-06-07 20:25:03
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-08 18:15:45
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
  const Count_Table = process.env.Count_Table;
  if (record.eventName !== 'INSERT' && record.eventName !== 'REMOVE') {
    return Promise.resolve('not an insert or remove event');
  }
  if (
    (record.dynamodb.NewImage?.__typename.S === 'Like' &&
      record.dynamodb.NewImage?.commentLikesId?.S) ||
    (record.dynamodb.OldImage?.__typename.S === 'Like' &&
      record.dynamodb.OldImage?.commentLikesId?.S)
  ) {
    console.log('这里是like,并且是 comment的');
    let params;
    if (record.eventName === 'INSERT') {
      params = {
        Key: { id: { S: record.dynamodb.NewImage.likeCountId.S } },
        TableName: Count_Table,
      };
    } else if (record.eventName === 'REMOVE') {
      params = {
        Key: { id: { S: record.dynamodb.OldImage.likeCountId.S } },
        TableName: Count_Table,
      };
    }
    const response = await dynamodb.getItem(params).promise();
    console.log(response);
    console.log(response.Item.like.N);

    // let date = new Date();
    let newLikeCount;
    if (record.eventName === 'INSERT') {
      newLikeCount = parseInt(response.Item.like.N) + 1;
    } else if (record.eventName === 'REMOVE') {
      newLikeCount = parseInt(response.Item.like.N) - 1;
    }
    console.log(newLikeCount);
    let params2 = {
      TableName: Count_Table, //dynamodb table name
      Key: {
        id: { S: response.Item.id.S },
      },
      UpdateExpression: 'set #like = :like, #updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':like': { N: newLikeCount.toString() },
        ':updatedAt': { S: new Date().toISOString() },
      },
      ExpressionAttributeNames: {
        '#like': 'like',
        '#updatedAt': 'updatedAt',
      },
      ReturnValues: 'UPDATED_NEW',
    };
    const response2 = await dynamodb.updateItem(params2).promise();
    console.log(response2);
  } else if (
    (record.dynamodb.NewImage?.__typename.S === 'Like' &&
      record.dynamodb.NewImage?.articleLikesId?.S) ||
    (record.dynamodb.OldImage?.__typename.S === 'Like' &&
      record.dynamodb.OldImage?.articleLikesId?.S)
  ) {
    console.log('这里是like,并且是 Article的');
    let params;
    if (record.eventName === 'INSERT') {
      params = {
        Key: { id: { S: record.dynamodb.NewImage.likeCountId.S } },
        TableName: Count_Table,
      };
    } else if (record.eventName === 'REMOVE') {
      params = {
        Key: { id: { S: record.dynamodb.OldImage.likeCountId.S } },
        TableName: Count_Table,
      };
    }
    const response = await dynamodb.getItem(params).promise();
    console.log(response);
    console.log(response.Item.like.N);

    // let date = new Date();
    let newLikeCount;
    if (record.eventName === 'INSERT') {
      newLikeCount = parseInt(response.Item.like.N) + 1;
    } else if (record.eventName === 'REMOVE') {
      newLikeCount = parseInt(response.Item.like.N) - 1;
    }
    console.log(newLikeCount);
    let params2 = {
      TableName: Count_Table, //dynamodb table name
      Key: {
        id: { S: response.Item.id.S },
      },
      UpdateExpression: 'set #like = :like, #updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':like': { N: newLikeCount.toString() },
        ':updatedAt': { S: new Date().toISOString() },
      },
      ExpressionAttributeNames: {
        '#like': 'like',
        '#updatedAt': 'updatedAt',
      },
      ReturnValues: 'UPDATED_NEW',
    };
    const response2 = await dynamodb.updateItem(params2).promise();
    console.log(response2);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};
