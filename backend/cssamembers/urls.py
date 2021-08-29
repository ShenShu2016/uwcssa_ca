from django.urls import path
from cssamembers import views

urlpatterns = [
    path("", views.main, name="main"),
    # path("cssa_members/", views.cssa_members, name="cssamembers"),

]