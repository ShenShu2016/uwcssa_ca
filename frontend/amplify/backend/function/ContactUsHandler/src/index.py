"""
Author: Shen Shu
Date: 2022-05-23 19:46:06
LastEditors: Shen Shu
LastEditTime: 2022-05-23 20:07:42
FilePath: /uwcssa_ca/frontend/amplify/backend/function/ContactUsHandler/src/index.py
Description: 

"""

import json

import boto3

# https://www.learnaws.org/2020/12/18/aws-ses-boto3-guide/#how-to-send-an-email-using-ses


def handler(event, context):
    print("received event:")
    print(event)
    ses_client = boto3.client("ses", region_name="us-east-1")
    CHARSET = "UTF-8"

    HTML_EMAIL_CONTENT1 = f"""
        <html>
            <head></head>
            <h1 style='text-align:center'>这是您提交的信息</h1>
            <p>姓名： {event['Records'][0]['dynamodb']['NewImage']['fullName']['S']}</p>
            <p>电话： {event['Records'][0]['dynamodb']['NewImage']['phone']['S']}</p>
            <p>email: {event['Records'][0]['dynamodb']['NewImage']['email']['S']}</p>
            <p>Message: {event['Records'][0]['dynamodb']['NewImage']['message']['S']}</p>
            </body>
        </html>
    """

    response = ses_client.send_email(
        Destination={
            "ToAddresses": [
                event["Records"][0]["dynamodb"]["NewImage"]["email"]["S"],
            ],
        },
        Message={
            "Body": {
                "Html": {
                    "Charset": CHARSET,
                    "Data": HTML_EMAIL_CONTENT1,
                }
            },
            "Subject": {
                "Charset": CHARSET,
                "Data": "UWCSSA 感谢您的提问，我们会尽快解决问题",
            },
        },
        Source="Shen Shu <admin@uwcssa.ca>",
    )

    HTML_EMAIL_CONTENT2 = f"""
        <html>
            <head></head>
            <h1 style='text-align:center'>有人联系我们啦</h1>
            <p>姓名： {event['Records'][0]['dynamodb']['NewImage']['fullName']['S']}</p>
            <p>电话： {event['Records'][0]['dynamodb']['NewImage']['phone']['S']}</p>
            <p>email: {event['Records'][0]['dynamodb']['NewImage']['email']['S']}</p>
            <p>Message: {event['Records'][0]['dynamodb']['NewImage']['message']['S']}</p>
            <p>回执是否成功: {response}</p>
            </body>
        </html>
    """

    ses_client.send_email(
        Destination={
            "ToAddresses": [
                "shushen2013@gmail.com",
            ],
        },
        Message={
            "Body": {
                "Html": {
                    "Charset": CHARSET,
                    "Data": HTML_EMAIL_CONTENT2,
                }
            },
            "Subject": {
                "Charset": CHARSET,
                "Data": "UWCSSA.CA 有人联系我们",
            },
        },
        Source="Shen Shu <admin@uwcssa.ca>",
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps("Hello from your new Amplify Python lambda!"),
    }
