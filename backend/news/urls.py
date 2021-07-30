from django.urls import include, path
from rest_framework import routers
from news import views


router = routers.DefaultRouter()
router.register(r'news/topic', views.TopicViewSet)
router.register(r'news/news', viewset=views.NewsViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.News, name='News')
]
