#!/bin/bash

python manage.py makemigrations

python manage.py migrate

exec "$@"

# Reference: https://techblog.dorogin.com/case-of-windows-line-ending-in-bash-script-7236f056abe
# make sure the Line sequence is LF
# 行尾序列是LF 不然出错
# 行尾序列是LF 不然出错