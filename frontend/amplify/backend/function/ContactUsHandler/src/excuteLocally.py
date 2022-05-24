"""
Author: Shen Shu
Date: 2022-05-23 19:46:06
LastEditors: Shen Shu
LastEditTime: 2022-05-23 20:02:59
FilePath: /uwcssa_ca/frontend/amplify/backend/function/ContactUsHandler/src/excuteLocally.py
Description: 

"""


import os

from dotenv import load_dotenv
from index import handler

event = {
    "Records": [
        {
            "eventID": "7dccd6ebdf6a75f07e82c1ea31e04573",
            "eventName": "INSERT",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "us-east-2",
            "dynamodb": {
                "ApproximateCreationDateTime": 1653279414.0,
                "Keys": {"id": {"S": "43bed9bd-067a-415b-9fed-fa00f83a1a62"}},
                "NewImage": {
                    "owner": {"S": "6a0cba8e-aa9f-4991-b6df-5f4a7b73cf61"},
                    "createdAt": {"S": "2022-05-23T04:16:53.613Z"},
                    "phone": {"S": "6478710781"},
                    "__typename": {"S": "ContactUs"},
                    "fullName": {"S": "sdfsd "},
                    "id": {"S": "43bed9bd-067a-415b-9fed-fa00f83a1a62"},
                    "message": {"S": "4d56s4f56ds4f65s45fa64 65f4 sda6 f"},
                    "email": {"S": "shushengacademy@gmail.com"},
                    "updatedAt": {"S": "2022-05-23T04:16:53.613Z"},
                },
                "SequenceNumber": "14236400000000000560585594",
                "SizeBytes": 302,
                "StreamViewType": "NEW_AND_OLD_IMAGES",
            },
            "eventSourceARN": "arn:aws:dynamodb:us-east-2:537666141782:table/ContactUs-4r2t6l2uprdgjhmoocpazejjcq-devts/stream/2022-05-20T03:38:37.566",
        }
    ]
}

# print(event)


if __name__ == "__main__":
    load_dotenv()

    os.environ["awsAccessKeyId"] = os.getenv("awsAccessKeyId")
    os.environ["awsSecretAccessKey"] = os.getenv("awsSecretAccessKey")

    handler(event=event, context=None)

    # print(event["Records"][0]["dynamodb"]["NewImage"]["fullName"]["S"])
    # print(event["Records"][0]["dynamodb"]["NewImage"]["message"]["S"])
    # print(event["Records"][0]["dynamodb"]["NewImage"]["email"]["S"])
    # print(event["Records"][0]["dynamodb"]["NewImage"]["phone"]["S"])
