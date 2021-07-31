from rest_framework import routers
from news import views


router = routers.DefaultRouter()
router.register(r'news/topic', views.TopicViewSet)
router.register(r'news/article', views.ArticleViewSet)
