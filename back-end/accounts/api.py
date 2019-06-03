from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, UserSettingSerializer
from .models import UserSettings, User

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1],
        })

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1],
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
    # queryset = UserSerializer.objects.all()
    
    def get_object(self, *args, **kwargs):
        return self.request.user

    def put(self, request, *args, **kwargs):
        oldUser = User.objects.get(pk=self.request.user.id)
        serializer = self.get_serializer(data=request.data)
        user = serializer.update(instance=oldUser, validated_data=request.data)
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
        })


class SettingAPI(generics.GenericAPIView):
    serializer_class = UserSettingSerializer
    queryset = UserSettings.objects.all()

    def put(self, request, *args, **kwargs):
        oldSettings = UserSettings.objects.get(pk=self.request.user.id)
        serializer = self.get_serializer(data=request.data)           
        settings = serializer.update(instance=oldSettings, validated_data=request.data)
        return Response({
            'settings': UserSettingSerializer(settings, context=self.get_serializer_context()).data,
        })