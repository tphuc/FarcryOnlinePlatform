from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UsersSerializer
from .models import Users

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()