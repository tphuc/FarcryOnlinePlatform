from django.contrib import admin
from .models import User_Settings, Users

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')


class User_SettingsAdmin(admin.ModelAdmin):
    list_display = (
            'username',
            'screen_quality',
            'lazy_weapon',
            'brightness',
            'model',
            'player_skin'
        )


admin.site.register(Users, UserAdmin)
admin.site.register(User_Settings, User_SettingsAdmin)