from django.urls import path, include
from .api import MatchAPI, MatchFragAPI


urlpatterns = [
    path('api/matches.create', MatchAPI.as_view()),
    path('api/frag.create', MatchFragAPI.as_view())
]