from django.urls import path 
from .api import SettingAPI


urlpatterns = [
    path('api/settings', SettingAPI.as_view()),
]