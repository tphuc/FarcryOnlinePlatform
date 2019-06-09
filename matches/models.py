from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Matches(models.Model):
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)


class MatchFrags(models.Model):
    killer = models.CharField(blank=False, max_length=50)
    victim = models.CharField(null=True, max_length=50)
    weapon_code = models.CharField(max_length=200, blank=True, null=True)
    match_id = models.ForeignKey(Matches, related_name='frags', on_delete=models.CASCADE, blank=True, null=True)
    frag_time = models.DateTimeField(blank=True, null=True)