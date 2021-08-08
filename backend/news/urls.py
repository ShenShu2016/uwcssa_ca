from django.urls import path
from news.views import ArticleListCreateView, ArticleDetailView, TopicListCreateView, TopicDetailView

urlpatterns = [
    path('topic/', TopicListCreateView.as_view()),
    path('topic/<int:pk>/', TopicDetailView.as_view()),
    path('article/', ArticleListCreateView.as_view()),
    path('article/<int:pk>/', ArticleDetailView.as_view())
]
