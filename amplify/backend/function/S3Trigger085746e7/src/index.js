/* eslint-disable no-undef */
exports.handler = async function (event) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
};

// event: {
//     "Records": [
//         {
//             "eventVersion": "2.1",
//             "eventSource": "aws:s3",
//             "awsRegion": "us-east-2",
//             "eventTime": "2022-05-25T02:26:51.518Z",
//             "eventName": "ObjectCreated:Put",
//             "userIdentity": {
//                 "principalId": "AWS:AROAX2L3GHZLBXNK427IZ:CognitoIdentityCredentials"
//             },
//             "requestParameters": {
//                 "sourceIPAddress": "137.207.105.59"
//             },
//             "responseElements": {
//                 "x-amz-request-id": "5TY4T8P366W90ZJ8",
//                 "x-amz-id-2": "5rOofZIa+k3DfGYyl9n2TTJug1hFTBIn9H2nNCDLHAcnzXoiIpVzR0bW2vqCYAj0CYtTvMdtmnjAw6GkC7ca5o7lKNJTMcrp"
//             },
//             "s3": {
//                 "s3SchemaVersion": "1.0",
//                 "configurationId": "d903e7aa-083a-4ad2-9e1c-819566bb51bd",
//                 "bucket": {
//                     "name": "uwcssats225941-devts",
//                     "ownerIdentity": {
//                         "principalId": "A1GJWW8RTDVFU"
//                     },
//                     "arn": "arn:aws:s3:::uwcssats225941-devts"
//                 },
//                 "object": {
//                     "key": "protected/us-east-2%3A7572fa7c-2ecd-46ee-a5c8-ebb3ce30f60c/Article/5c98e0e1-6a9b-4c0a-a1c6-71d31e2c36ed.png",
//                     "size": 1854749,
//                     "eTag": "03737daabdd372d54fce772a3b74217d",
//                     "sequencer": "00628D93EB604B9697"
//                 }
//             }
//         }
//     ]
// }
