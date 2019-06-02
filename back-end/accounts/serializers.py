from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserSettings
from django.contrib.auth import authenticate

# user serializer
class UserSerializer(serializers.ModelSerializer):
    settings = serializers.StringRelatedField()
    match_frags_killer = SlugRelatedField(many=True, read_only=True, slug_field='username')
    match_frags_victime = SlugRelatedField(many=True, read_only=True, slug_field='username')

    class Meta:
        model = User
        fields = ('id','username','email', 'settings')
    

# register/signup
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password' : {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        UserSettings.objects.create(user=user)
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
class UserSettingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserSettings
        fields = ('user', 'screen_quality', 'lazy_weapon', 'brightness', 'model', 'player_skin')
    
    def create(self, validated_data):
        user = self.context['request'].user
        settings = UserSettings.objects.create(user=user)
        return settings
    
    def update(self, instance, validated_data):
        instance.screen_quality = validated_data['screen_quality']
        user = self.context['request'].user
        instance.user = user
        return instance

