from django.db import models
from django.contrib.auth.models import User


HERO = 'hero'
MERC_SCOUT = 'merc_scout'
MERC_REAR = 'merc_rear'
EVIL_WORKER = 'evil_worker'
MERTZ = 'mertz'
model_choices = [
    (HERO, "objects/characters/pmodels/hero/hero_mp.cgf"),
    (MERC_REAR, "objects/characters/mercenaries/merc_scout/merc_scout_mp.cgf"),
    (MERC_REAR, "objects/characters/mercenaries/merc_rear/merc_rear_mp.cgf"),
    (EVIL_WORKER, "bbjects/characters/workers/evil_worker/evil_worker_MP.cgf"),
    (MERTZ, "objects/characters/pmodels/story_characters/mertz/mertz_mp.cgf")
]

# Create your models here.
class UserSettings(models.Model):

    k_move_left = models.CharField(max_length=20, default='a')
    k_move_right = models.CharField(max_length=20, default='d')
    k_move_forward = models.CharField(max_length=20, default='w')
    k_move_backward = models.CharField(max_length=20, default='s')
    k_reload = models.CharField(max_length=20, default='r')
    k_movemode2 = models.CharField(max_length=20, default='v')
    k_firemode = models.CharField(max_length=20, default='x')
    user = models.OneToOneField(User, related_name='settings', on_delete=models.CASCADE)
    ingame_name = models.CharField(max_length=20, default='Jack')
    screen_quality = models.IntegerField(default=1)
    lazy_weapon = models.DecimalField(decimal_places=1, max_digits=2, default=1.0)
    brightness = models.DecimalField(decimal_places=1, max_digits=2, default=1.0)
    model = models.CharField(max_length=200, choices=model_choices, default=model_choices[0][1])
    player_skin = models.IntegerField(default=1)

    def __str__(self):
        return str(self.screen_quality )+ str(self.lazy_weapon) + str(self.brightness) + self.model + str(self.player_skin)