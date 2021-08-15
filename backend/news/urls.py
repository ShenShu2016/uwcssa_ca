from django.urls import path
from news.views import ArticleListView, ArticleDetailView, ArticleCreateView, TopicListView, TopicDetailView, TopicCreateView

urlpatterns = [
    path('topic_list/', TopicListView.as_view()),
    path('topic_create/', TopicCreateView.as_view()),
    path('topic/<int:pk>/', TopicDetailView.as_view()),
    path('article_list/', ArticleListView.as_view()),
    path('article_create/', ArticleCreateView.as_view()),
    path('article/<int:pk>/', ArticleDetailView.as_view())
]
