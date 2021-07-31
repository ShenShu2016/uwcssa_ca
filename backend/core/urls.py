"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import path
from django.urls.conf import include
from django.views.generic.base import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('rest-auth/', include('rest_auth.urls')),

    path('rest-auth/registration/', include('rest_auth.registration.urls')),

    path(
        "favicon.ico",
        RedirectView.as_view(url=staticfiles_storage.url("favicon.ico")),
    ),  # 静态favicon地址
]

urlpatterns += path('', include('news.urls')),
urlpatterns += path('news/', include('news.urls')),
