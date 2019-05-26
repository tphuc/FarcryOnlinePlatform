from rest_framework import serializers
from .models import Users, User_Settings


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('username', 'password')


class User_SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Settings
        fields = (
            'username',
            'screen_quality',
            'lazy_weapon',
            'brightness',
            'model',
            'player_skin'
        )