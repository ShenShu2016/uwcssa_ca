SECRET_KEY = 'django-insecure-1o$08h&&#!z#0%=%h2f84tf-#hjo%gudu^abv_veh4ab5g&)4z'
ALLOWED_HOSTS = [
    '198.211.99.20',
    'localhost',
    '127.0.0.1',
    "0.0.0.0",
]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}
