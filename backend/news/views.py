from news.models import Article, Topic
from .serializers import TopicSerializer, ArticleSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.


class TopicListCreateView(ListCreateAPIView):
    serializer_class = TopicSerializer
    queryset = Topic.objects.all()

    #permission_classes = (IsAuthenticated, )

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class TopicDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = TopicSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Topic.objects.all()

    def perform_update(self, serializer):
        serializer.save(created_by=self.request.user)


class ArticleListCreateView(ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permission_classes = (IsAuthenticated, )

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user,
                        updated_by=self.request.user)


class ArticleDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Article.objects.all()

    def perform_update(self, serializer):
        serializer.save(created_by=self.request.user,
                        updated_by=self.request.user)


# Reference: https://github.com/veryacademy/YT-Django-DRF-Simple-Blog-Series-File-Uploading-Part-8/blob/master/django/blog_api/views.py
""" Concrete View Classes
# CreateAPIView
Used for create-only endpoints.
# ListAPIView
Used for read-only endpoints to represent a collection of model instances.
# RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
# DestroyAPIView
Used for delete-only endpoints for a single model instance.
# UpdateAPIView
Used for update-only endpoints for a single model instance.
# ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
# RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
# RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""
