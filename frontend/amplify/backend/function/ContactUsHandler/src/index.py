'''
Author: Shen Shu
Date: 2022-05-20 16:29:06
LastEditors: Shen Shu
LastEditTime: 2022-05-20 23:52:22
FilePath: /uwcssa_ca/frontend/amplify/backend/function/ContactUsHandler/src/index.py
Description: 

'''
import json
import boto3
# https://www.learnaws.org/2020/12/18/aws-ses-boto3-guide/#how-to-send-an-email-using-ses

def handler(event, context):
  print('received event:')
  print(event)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }