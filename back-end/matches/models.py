from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Matches(models.Model):
    start_time = models.DateTimeField(blank=True)
    end_time = models.DateTimeField(blank=True)


class MatchFrags(models.Model):
    killer = models.ForeignKey(User, related_name='killer', on_delete=models.CASCADE, blank=True)
    victim = models.ForeignKey(User, related_name='victim', on_delete=models.CASCADE, blank=True)
    weapon_code = models.CharField(max_length=200, blank=True)
    match = models.ForeignKey(Matches, on_delete=models.CASCADE, blank=True)
    frag_time = models.DateTimeField(blank=True)