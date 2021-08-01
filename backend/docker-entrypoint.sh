#!/bin/bash

python manage.py makemigrations

python manage.py migrate

exec "$@"
# make sure the Line sequence is LF
# 行尾序列是LF 不然出错