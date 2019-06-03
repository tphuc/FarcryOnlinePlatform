from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserSettings
from django.contrib.auth import authenticate


    

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
        fields = (
            'user',
            'screen_quality',
            'lazy_weapon',
            'brightness',
            'model',
            'ingame_name',
            'player_skin',
            'k_move_left',
            'k_move_right',
            'k_move_forward',
            'k_move_backward',
            'k_reload',
            'k_movemode2',
            'k_firemode'
            )
    
    def create(self, validated_data):
        user = self.context['request'].user
        settings = UserSettings.objects.create(user=user)
        return settings
    
    def update(self, instance, validated_data):
        instance.screen_quality = validated_data['screen_quality']
        instance.lazy_weapon = validated_data['lazy_weapon']
        instance.brightness = validated_data['brightness']
        instance.model = validated_data['model']
        instance.player_skin = validated_data['player_skin']
        instance.ingame_name = validated_data['ingame_name']

        instance.k_move_left = validated_data['k_move_left']
        instance.k_move_right = validated_data['k_move_right']
        instance.k_move_forward = validated_data['k_move_forward']
        instance.k_move_backward = validated_data['k_move_backward']
        instance.k_reload = validated_data['k_reload']
        instance.k_movemode2 = validated_data['k_movemode2']
        instance.k_firemode = validated_data['k_firemode']
        user = self.context['request'].user
        instance.user = user
        return instance

# user serializer
class UserSerializer(serializers.ModelSerializer):
    settings = UserSettingSerializer()

    class Meta:
        model = User
        fields = ('id','username','email', 'settings')