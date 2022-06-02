/*
 * @Author: Shen Shu
 * @Date: 2022-05-24 23:30:45
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 23:01:52
 * @FilePath: /uwcssa_ca/amplify/backend/function/UserImageCompressHandler/src/index.js
 * @Description:
 *
 */
// AWS https://us-east-2.console.aws.amazon.com/lambda/home?region=us-east-2#/functions/UserImageCompressHandler-devts?tab=code

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3UWCSSATS_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const util = require('util');
const sharp = require('sharp');

// get reference to S3 client
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  // Read options from the event parameter.
  console.log(
    'Reading options from event:\n',
    util.inspect(event, { depth: 5 }),
  );
  const srcBucket = process.env.STORAGE_S3UWCSSATS_BUCKETNAME;
  const dstBucket = process.env.STORAGE_S3UWCSSATS_BUCKETNAME;

  // Object key may have spaces or unicode non-ASCII characters.
  const srcKey = decodeURIComponent(
    event.Records[0].dynamodb.NewImage.key.S.replace(/\+/g, ' '),
  );
  const typeMatch = srcKey.match(/\.([^.]*)$/);
  if (!typeMatch) {
    console.log('Could not determine the image type.');
    return;
  }

  const imageType = typeMatch[1].toLowerCase();
  if (!['jpeg', 'jpg', 'png', 'webp', 'svg'].includes(imageType)) {
    console.log(`Unsupported image type: ${imageType}`);
    return;
  }

  const compressedDstKey = decodeURIComponent(
    event.Records[0].dynamodb.NewImage.objectCompressedURL.S.replace(
      /\+/g,
      ' ',
    ),
  ).split('amazonaws.com/')[1];

  const thumbnailDstKey = decodeURIComponent(
    event.Records[0].dynamodb.NewImage.objectThumbnailURL.S.replace(/\+/g, ' '),
  ).split('amazonaws.com/')[1];

  try {
    const params = {
      Bucket: srcBucket,
      Key: srcKey,
    };
    var originImg = await s3.getObject(params).promise();
  } catch (error) {
    console.log(error);
    return;
  }

  const compressedWidth = event.Records[0].dynamodb.NewImage.compressedWidth.N;
  const thumbnailWidth = event.Records[0].dynamodb.NewImage.thumbnailWidth.N;

  let [compressedBuffer, thumbnailBuffer] = await Promise.all([
    sharp(originImg.Body).resize(parseInt(compressedWidth)).toBuffer(),
    sharp(originImg.Body).resize(parseInt(thumbnailWidth)).toBuffer(),
  ]);

  const compressedDstParams = {
    Bucket: dstBucket,
    Key: compressedDstKey,
    Body: compressedBuffer,
    ContentType: 'image',
  };
  const thumbnailDstPrams = {
    Bucket: dstBucket,
    Key: thumbnailDstKey,
    Body: thumbnailBuffer,
    ContentType: 'image',
  };

  let [compressedResult, thumbnailResult] = await Promise.all([
    s3.putObject(compressedDstParams).promise(),
    s3.putObject(thumbnailDstPrams).promise(),
  ]);
  console.log(
    'Successfully resized ' +
      srcBucket +
      '/' +
      srcKey +
      ' and uploaded to ' +
      dstBucket +
      '/' +
      compressedDstKey,
    compressedResult,
  );
  console.log(
    'Successfully resized ' +
      srcBucket +
      '/' +
      srcKey +
      ' and uploaded to ' +
      dstBucket +
      '/' +
      thumbnailDstKey,
    thumbnailResult,
  );
};
