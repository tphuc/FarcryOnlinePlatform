from rest_framework import serializers
from django.contrib.auth.models import User
from .models import User_Settings

from django.contrib.auth import authenticate

# user serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')

# register/signup
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password' : {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

# login
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

# settings
class SettingSerializer(serializers.Serializer):
    class Meta:
        model = User_Settings
        fields = ('screen_quality', 'lazy_weapon', 'brightness', 'model', 'player_skin')
