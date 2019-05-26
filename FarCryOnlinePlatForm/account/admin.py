from django.contrib import admin
from .models import User_Settings, Users

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')


admin.site.register(Users, UserAdmin)