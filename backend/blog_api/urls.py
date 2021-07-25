from django.urls import path
from .views import BookList, BookDetail

app_name = 'blog_api'

urlpatterns = [
    path('<int:pk>', BookDetail.as_view(), name="detailcreate"),
    path('', BookList.as_view(), name='listcreate'),
]

