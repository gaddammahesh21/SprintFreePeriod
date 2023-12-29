import smtplib, ssl
import os


port = 465
smtp_server = "smtp.gmail.com"
USERNAME = os.environ.get('USER_EMAIL')
PASSWORD = os.environ.get('USER_PASSWORD')
RECIPIENTS = os.environ.get('RECIPIENTS_LIST')
MESSAGE = """\
Subject: GitHub Email Report 
"""
context = ssl.create_default_context
with smtplib.SMTP_SSL(smtp_server,port,context=context) as server:
    server.login(USERNAME,PASSWORD)
    server.sendmail(USERNAME,RECIPIENTS,MESSAGE)
