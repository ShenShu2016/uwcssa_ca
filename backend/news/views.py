from rest_framework import viewsets
from news.models import News, Topic
from .serializers import TopicSerializer, NewsSerializer

from django.shortcuts import HttpResponse
# Create your views here.

from django.contrib.auth.decorators import login_required


from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticated


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()  # 指定查询结果集
    serializer_class = TopicSerializer  # 指定序列化器


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


# @login_required
def News(request):
    return HttpResponse("<h1>Newssssss</h1>")
