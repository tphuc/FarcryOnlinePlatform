from rest_framework import serializers
from .models import UserSettings


class SettingSerializer(serializers.Serializer):
    class Meta:
        model = UserSettings
        fields = ('screen_quality', 'lazy_weapon', 'brightness', 'model', 'player_skin')
