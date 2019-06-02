from django.urls import path, include
from .api import MatchAPI, MatchFragAPI, MatchFragViewSet


urlpatterns = [
    path('api/matches.create', MatchAPI.as_view()),
    path('api/frags.create', MatchFragAPI.as_view()),
    path('api/frags.list', MatchFragViewSet.as_view({'get': 'list'})),

]