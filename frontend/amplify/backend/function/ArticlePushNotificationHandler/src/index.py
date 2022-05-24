"""
Author: Shen Shu
Date: 2022-05-23 21:08:12
LastEditors: Shen Shu
LastEditTime: 2022-05-23 21:08:29
FilePath: /uwcssa_ca/frontend/amplify/backend/function/ArticlePushNotificationHandler/src/index.py
Description: 

"""

import json


def handler(event, context):
    print("received event:")
    print(event)

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps("Hello from your new Amplify Python lambda!"),
    }
