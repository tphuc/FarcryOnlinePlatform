from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Matches, MatchFrags


class MatchSerializers(serializers.ModelSerializer):
    class Meta:
        model = Matches
        fields = ('start_time', 'end_time')

    def create(self, validated_data):
        match = Matches.objects.create()
        return match


class MatchFragSerializers(serializers.ModelSerializer):
    class Meta:
        model = MatchFrags
        fields = ('killer', 'victim', 'weapon_code', 'frag_time', 'match')

    def create(self, validated_data):
        match_frag = MatchFrags.objects.create()
        match_frag.killer = User.objects.get(username=validated_data['killer'])
        match_frag.victim = User.objects.get(username=validated_data['victim'])
        match_frag.weapon_code = validated_data['weapon_code']
        match_frag.match = Match.objects.get(id=validated_data['match_id'])
        return match_frag