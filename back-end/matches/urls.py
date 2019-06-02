from django.urls import path, include
from .api import MatchAPI, MatchFragAPI


urlpatterns = [
    path('api/matches.create', MatchAPI.as_view()),
    path('api/frags.create', MatchFragAPI.as_view()),
    path('api/frags.list', MatchFragAPI.as_view()),
]