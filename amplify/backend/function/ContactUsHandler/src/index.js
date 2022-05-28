// AWS https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/ContactUsHandler-devts?tab=code

/* eslint-disable no-undef */

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