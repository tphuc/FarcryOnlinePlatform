from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Matches


class MatchSerializers(serializers.ModelSerializer):
    class Meta:
        model = Matches
        fields = ('start_time', 'end_time')

    def create(self, validated_data):
        
