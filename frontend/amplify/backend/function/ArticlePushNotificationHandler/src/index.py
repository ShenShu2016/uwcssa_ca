"""
Author: Shikai Jin
Date: 2022-05-24 20:41:55
LastEditors: Shikai Jin
LastEditTime: 2022-05-24 22:29:29
FilePath: /uwcssa_ca/frontend/amplify/backend/function/ArticlePushNotificationHandler/src/index.py
Description: 

"""
"""
Author: Shen Shu
Date: 2022-05-23 21:08:12
LastEditors: Shen Shu
LastEditTime: 2022-05-23 21:08:29
FilePath: /uwcssa_ca/frontend/amplify/backend/function/ArticlePushNotificationHandler/src/index.py
Description: 

"""

import json
import boto3


def handler(event, context):
    print("received event:")
    print(event)
    ses_client = boto3.client("ses", region_name="us-east-1")
    CHARSET = "UTF-8"

    HTML_EMAIL_CONTENT = f"""
    <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style>
		* {{
			box-sizing: border-box;
		}}

		body {{
			margin: 0;
			padding: 0;
		}}

		a[x-apple-data-detectors] {{
			color: inherit !important;
			text-decoration: inherit !important;
		}}

		#MessageViewBody a {{
			color: inherit;
			text-decoration: none;
		}}

		p {{
			line-height: inherit
		}}

		.desktop_hide,
		.desktop_hide table {{
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}}

		@media (max-width:660px) {{
			.row-content {{
				width: 100% !important;
			}}

			.image_block img.big {{
				width: auto !important;
			}}

			.column .border,
			.mobile_hide {{
				display: none;
			}}

			table {{
				table-layout: fixed !important;
			}}

			.stack .column {{
				width: 100%;
				display: block;
			}}

			.mobile_hide {{
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}}

			.desktop_hide,
			.desktop_hide table {{
				display: table !important;
				max-height: none !important;
			}}
		}}
	</style>
</head>

<body style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #445daa; color: #000000; width: 640px;" width="640">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="divider_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td>
																<div align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #445DAA;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;" width="640">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/808948_792838/Free_Sample.jpg" style="display: block; height: auto; border: 0; width: 195px; max-width: 100%;" width="195"></div>
															</td>
														</tr>
													</table>
													<table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="text-align:center;width:100%;padding-top:30px;">
																<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">{event['Records'][0]['dynamodb']['NewImage']['title']['S']}</span></h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px;" width="640">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #ffffff; border-top: 0px solid #0068A5; padding-top: 0px; padding-bottom: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block" width="100%" border="0" cellpadding="30" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td>
																<div align="center" style="line-height:10px"><img class="big" src={event['Records'][0]['dynamodb']['NewImage']['coverPageImgURL']['S']} style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;" width="640"></div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:30px;padding-left:35px;padding-right:35px;padding-top:30px;">
																<div style="color:#393d47;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;">
																	<p style="margin: 0; margin-bottom: 16px;">{event['Records'][0]['dynamodb']['NewImage']['content']['S']}</p>
																	<p style="margin: 0; margin-bottom: 16px;">&nbsp;</p>
																	<p style="margin: 0;">&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td>
																<div align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://uwcssa.ca/article" style="height:44px;width:78px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#445daa" fillcolor="#445daa"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://uwcssa.ca/article" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#445daa;border-radius:4px;width:auto;border-top:1px solid #445daa;font-weight:400;border-right:1px solid #445daa;border-bottom:1px solid #445daa;border-left:1px solid #445daa;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:5px;padding-right:5px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">更多资讯</span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="padding-top:50px;">
																<div align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #445daa; color: #000000; width: 640px;" width="640">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="divider_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td>
																<div align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #445DAA;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="social_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td>
																<table class="social-table" width="108px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/uwincssa/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
																		<td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/uwindsor_cssa/?hl=en" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
																		<td style="padding:0 2px 0 2px;"><a href="https://www.wechat.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/wechat@2x.png" width="32" height="32" alt="Wechat" title="Wechat" style="display: block; height: auto; border: 0;"></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
																<div style="font-family: sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #555555; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px;"><span style="color:#ffffff;font-size:12px;">This message is sent to you by UWCSSA.</span></p>
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px;">&nbsp;</p>
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px;"><span style="color:#ffffff;font-size:12px;">Have&nbsp;questions?</span></p>
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px;">&nbsp;</p>
																		<p style="margin: 0; font-size: 12px; text-align: left; mso-line-height-alt: 18px;"><span style="color:#ffffff;font-size:12px;">C<span style="background-color:transparent;">ontact us at<span style="color:#ffffff;"> </span></span><a href="mailto:uwincssa.it@gmail.com" target="_blank" title="uwincssa.it@gmail.com" style="text-decoration:underline;color:#ffffff;" rel="noopener">uwincssa.it@gmail.com</a></span></p>
																		<p style="margin: 0; font-size: 12px; text-align: left; mso-line-height-alt: 18px;">
                                                                        <span style="color:#ffffff;font-size:12px;">Y<span style="background-color:transparent;">ou're receiving the UWCSSA News email because you subscribed to it on<span style="color:#ffffff;"> </span></span><a href="uwcssa.ca" target="_blank" title="uwcssa.ca" style="text-decoration:underline;color:#ffffff;" rel="noopener">uwincssa.it@gmail.com</a></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
																<div align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
																<div style="font-family: sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
																		<p style="margin: 0; font-size: 14px; text-align: left;"><span style="color:#ffffff;font-size:12px;">UWCSSA Copyright © 2022</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
        """

    response = ses_client.send_email(
        Destination={
            "ToAddresses": [
                event["Records"][0]["dynamodb"]["NewImage"]["email"]["S"],
                "shushen2013@gmail.com",
                "zoejinmessiah@gmail.com",
            ],
        },
        Message={
            "Body": {
                "Html": {
                    "Charset": CHARSET,
                    "Data": HTML_EMAIL_CONTENT,
                }
            },
            "Subject": {
                "Charset": CHARSET,
                "Data": f"""UWCSSA News: {event['Records'][0]['dynamodb']['NewImage']['title']['S']}""",
            },
        },
        Source="UWCSSA <admin@uwcssa.ca>",
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


if __name__ == "__main__":
    event = {
        "Records": [
            {
                "eventID": "f261066fc368d6b3a113119270e11c9b",
                "eventName": "INSERT",
                "eventVersion": "1.1",
                "eventSource": "aws:dynamodb",
                "awsRegion": "us-east-2",
                "dynamodb": {
                    "ApproximateCreationDateTime": 1653445622.0,
                    "Keys": {"id": {"S": "84915768-7027-4867-8ba2-370ae46ac6d1"}},
                    "NewImage": {
                        "owner": {"S": "d77b094c-93a9-40da-9274-b133ce9212d1"},
                        "createdAt": {"S": "2022-05-25T02:27:02.291Z"},
                        "coverPageDescription": {"S": "nothing to say"},
                        "__typename": {"S": "Article"},
                        "active": {"S": "T"},
                        "coverPageImgURL": {
                            "S": "https://uwcssats225941-devts.s3.us-east-2.amazonaws.com/protected/us-east-2:7572fa7c-2ecd-46ee-a5c8-ebb3ce30f60c/Article/5c98e0e1-6a9b-4c0a-a1c6-71d31e2c36ed.png"
                        },
                        "id": {"S": "84915768-7027-4867-8ba2-370ae46ac6d1"},
                        "title": {"S": "Happy Wednesday"},
                        "content": {
                            "S": '<h2><span style="background-color:hsl(0, 0%, 0%);">ab</span>cd<span class="text-huge">e</span><span class="text-huge" style="font-family:\'Trebuchet MS\', Helvetica, sans-serif;">fg</span></h2>'
                        },
                        "email": {"S": "zoejinmessiah@gmail.com"},
                        "updatedAt": {"S": "2022-05-25T02:27:02.291Z"},
                    },
                    "SequenceNumber": "23110500000000000478767577",
                    "SizeBytes": 622,
                    "StreamViewType": "NEW_AND_OLD_IMAGES",
                },
                "eventSourceARN": "arn:aws:dynamodb:us-east-2:537666141782:table/Article-4r2t6l2uprdgjhmoocpazejjcq-devts/stream/2022-05-20T03:39:41.885",
            }
        ]
    }

    handler(event=event, context=None)
