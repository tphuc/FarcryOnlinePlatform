from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UsersSerializer, User_SettingsSerializer
from .models import Users, User_Settings

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()


class User_SettingsView(viewsets.ModelViewSet):
    serializer_class = User_SettingsSerializer
    queryset = User_Settings.objects.all()