from django.urls import include, path
from news.urls import router as news_router
from rest_framework import routers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


class APIRootView(APIView):
    """
    RESTFul Documentation of https://www.uwcssa.ca
    """

    def get(self, request, *args, **kwargs):
        apidocs = {
            # News app
            'Topic': request.build_absolute_uri('news/topic/'),
            'Article': request.build_absolute_uri('news/article/'),

            # rest-auth
            'User': request.build_absolute_uri('rest-auth/user/'),
            'Registration': request.build_absolute_uri('rest-auth/registration/'),
            'Login': request.build_absolute_uri('rest-auth/login/'),
            'Logout': request.build_absolute_uri('rest-auth/logout/'),
            'Password change': request.build_absolute_uri('rest-auth/password/change/'),
            'Password Reset': request.build_absolute_uri('rest-auth/password/reset/'),
            'Password Reset Confirm': request.build_absolute_uri('rest-auth/password/reset/confirm/'),

            # simple_jwt
            'Token Obtain Pair': request.build_absolute_uri('token/'),
            'Token Refresh': request.build_absolute_uri('token/refresh/'),
        }
        return Response(apidocs)


router = routers.DefaultRouter()
router.registry.extend(news_router.registry)


urlpatterns = [
    path('', APIRootView.as_view()),
    path('', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
