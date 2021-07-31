from rest_framework import viewsets
from news.models import Article, Topic
from .serializers import TopicSerializer, ArticleSerializer

from django.shortcuts import HttpResponse
# Create your views here.

from django.contrib.auth.decorators import login_required


from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticated


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()  # 指定查询结果集
    serializer_class = TopicSerializer  # 指定序列化器


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# @login_required
# def News(request):
#     return HttpResponse("<h1>Newssssss</h1>")
