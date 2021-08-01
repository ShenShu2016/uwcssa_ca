#!/bin/bash
echo "Waiting for postgres..."


# sleep 10


echo "PostgreSQL started"

python manage.py makemigrations

python manage.py migrate

exec "$@"
