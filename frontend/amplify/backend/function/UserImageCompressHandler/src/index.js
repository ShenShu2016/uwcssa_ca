/*
 * @Author: Shen Shu
 * @Date: 2022-05-24 23:30:45
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-24 23:30:50
 * @FilePath: /uwcssa_ca/frontend/amplify/backend/function/UserImageCompressHandler/src/index.js
 * @Description:
 *
 */

/* eslint-disable no-undef */

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3UWCSSATS_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
