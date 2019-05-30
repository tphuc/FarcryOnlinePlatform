from rest_framework import serializers
from .models import User_Settings


class SettingSerializer(serializers.Serializer):
    class Meta:
        model = User_Settings
        fields = ('screen_quality', 'lazy_weapon', 'brightness', 'model', 'player_skin')
