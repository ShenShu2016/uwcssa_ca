from rest_framework import viewsets
from news.models import News, Topic
from .serializers import TopicSerializer, NewsSerializer
# Create your views here.


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()  # 指定查询结果集
    serializer_class = TopicSerializer  # 指定序列化器


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
