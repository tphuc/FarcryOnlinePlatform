from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Matches(models.Model):
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)


class MatchFrags(models.Model):
    killer = models.ForeignKey(User, related_name='match_frags_killer', on_delete=models.CASCADE, blank=True, null=True)
    victim = models.ForeignKey(User, related_name='match_frags_victim', on_delete=models.CASCADE, blank=True, null=True)
    weapon_code = models.CharField(max_length=200, blank=True, null=True)
    match = models.ForeignKey(Matches, related_name='match_frags', on_delete=models.CASCADE, blank=True, null=True)
    frag_time = models.DateTimeField(blank=True, null=True)