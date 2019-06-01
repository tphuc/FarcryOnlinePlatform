from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Matches(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


class MatchFrags(models.Model):
    killer = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    victim = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    weapon_code = models.CharField(max_length=200)
    match = models.ForeignKey(Matches, on_delete=models.CASCADE)
    frag_time = models.DateTimeField()

