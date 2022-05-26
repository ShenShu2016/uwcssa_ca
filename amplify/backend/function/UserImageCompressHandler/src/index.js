/*
 * @Author: Shen Shu
 * @Date: 2022-05-24 23:30:45
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-25 16:13:54
 * @FilePath: /uwcssa_ca/frontend/amplify/backend/function/UserImageCompressHandler/src/index.js
 * @Description:
 *
 */

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

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
  // Object key may have spaces or unicode non-ASCII characters.
  const srcKey = decodeURIComponent(
    event.Records[0].dynamodb.NewImage.key.S.replace(/\+/g, ' '),
  );
  console.log('srcKey', srcKey);
  const dstBucket = srcBucket;
  console.log('dstBucket', dstBucket);
  const dstKey = srcKey.split('.')[0] + '-compressed' + '.webp';
  console.log('dstKey', dstKey);
  // Infer the image type from the file suffix.
  const typeMatch = srcKey.match(/\.([^.]*)$/);
  if (!typeMatch) {
    console.log('Could not determine the image type.');
    return;
  }

  // Check that the image type is supported
  const imageType = typeMatch[1].toLowerCase();
  if (!['jpeg', 'jpg', 'png', 'webp', 'svg'].includes(imageType)) {
    console.log(`Unsupported image type: ${imageType}`);
    return;
  }

  // Download the image from the S3 source bucket.
  try {
    const params = {
      Bucket: srcBucket,
      Key: srcKey,
    };
    var origimage = await s3.getObject(params).promise();
  } catch (error) {
    console.log(error);
    return;
  }
  // set thumbnail width. Resize will set the height automatically to maintain aspect ratio.
  const width = 700;
  // Use the sharp module to resize the image and save in a buffer.
  try {
    var buffer = await sharp(origimage.Body)
      .resize(width)
      .webp({ effort: 0 })
      .toBuffer();
  } catch (error) {
    console.log(error);
    return;
  }
  // Upload the thumbnail image to the destination bucket
  try {
    const destparams = {
      Bucket: dstBucket,
      Key: dstKey,
      Body: buffer,
      ContentType: 'image',
    };

    const putResult = await s3.putObject(destparams).promise();
  } catch (error) {
    console.log(error);
    return;
  }
  console.log(
    'Successfully resized ' +
      srcBucket +
      '/' +
      srcKey +
      ' and uploaded to ' +
      dstBucket +
      '/' +
      dstKey,
  );

  try {
    var buffer2 = await sharp(origimage.Body)
      .resize(200)
      .webp({ effort: 0 })
      .toBuffer();
  } catch (error) {
    console.log(error);
    return;
  }

  // Upload the thumbnail image to the destination bucket
  try {
    const destparams = {
      Bucket: dstBucket,
      Key: srcKey.split('.')[0] + '-thumbnail' + '.webp',
      Body: buffer2,
      ContentType: 'image',
    };

    const putResult = await s3.putObject(destparams).promise();
  } catch (error) {
    console.log(error);
    return;
  }
  console.log(
    'Successfully resized ' +
      srcBucket +
      '/' +
      srcKey +
      ' and uploaded to ' +
      dstBucket +
      '/' +
      dstKey,
  );
};
