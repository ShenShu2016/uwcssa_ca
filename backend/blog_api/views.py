from django.http import HttpResponse, JsonResponse
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt

from blog.models import Book
from .serializers import BookSerializer

# Create your views here.

class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetail(generics.RetrieveDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# def book_list(request):
#     if request.method == 'GET'
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer(queryset, many=Trye)
#     return JsonRespon