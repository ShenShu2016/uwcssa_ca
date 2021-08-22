from authorization.views import FacebookLogin, GoogleLogin
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import path
from django.urls.conf import include
from django.views.generic.base import RedirectView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView, TokenVerifyView)

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    url(r'^swagger(?P<format>\.json|\.yaml)$',
        schema_view.without_ui(cache_timeout=0),
        name='schema-json'),
    path('swagger/',
         schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redoc/',
         schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),
    path('admin/', admin.site.urls),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('auth/jwttoken/',
         TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('auth/jwttoken/refresh/',
         TokenRefreshView.as_view(),
         name='token_refresh'),
    path('auth/jwttoken/verify/',
         TokenVerifyView.as_view(),
         name='token_verify'),
    path('accounts/', include('allauth.urls')),
    url(r'^', include('django.contrib.auth.urls')),
]

# social login
urlpatterns += [
    path('auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('auth/google/', GoogleLogin.as_view(), name='google_login')
]

# loacl app
urlpatterns += [
    path('news/', include('news.urls')),
]

urlpatterns += path(
    "favicon.ico",
    RedirectView.as_view(url=staticfiles_storage.url("favicon.ico")),
),  # 静态favicon地址

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
