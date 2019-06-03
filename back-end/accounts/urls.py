from django.urls import path, include 
from .api import RegisterAPI, LoginAPI, UserAPI, SettingAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/user/<int:pk>/settings', SettingAPI.as_view()),
    path('api/user/<int:pk>/profile', UserAPI.as_view())
]