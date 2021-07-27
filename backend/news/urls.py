from django.urls import include, path
from rest_framework import routers
from news import views


router = routers.DefaultRouter()
router.register(r'topic', views.TopicViewSet)
router.register(r'news', viewset=views.NewsViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
