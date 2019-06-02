from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Matches, MatchFrags


class MatchSerializers(serializers.ModelSerializer):
    match_frags = serializers.SlugRelatedField(many=True, read_only=True, slug_field='id')

    class Meta:
        model = Matches
        fields = ('id', 'start_time', 'end_time', 'match_frags')

    def create(self, validated_data):
        match = Matches.objects.create(start_time=validated_data['start_time'], end_time=validated_data['end_time'])
        return match


class MatchFragSerializers(serializers.ModelSerializer):
    class Meta:
        model = MatchFrags
        fields = ('id', 'killer', 'victim', 'weapon_code', 'frag_time', 'match')

    def create(self, validated_data):
        match_frag = MatchFrags.objects.create(**validated_data)
        return match_frag


    