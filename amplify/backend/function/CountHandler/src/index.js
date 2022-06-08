/*
 * @Author: Shen Shu
 * @Date: 2022-06-07 20:25:03
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-07 20:25:11
 * @FilePath: /uwcssa_ca/amplify/backend/function/CountHandler/src/index.js
 * @Description:
 *
 */

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
