from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserSettings(models.Model):
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
    user = models.OneToOneField(User, related_name='settings', on_delete=models.CASCADE)
    screen_quality = models.IntegerField(default=1)
    lazy_weapon = models.DecimalField(decimal_places=1, max_digits=2, default=1.0)
    brightness = models.DecimalField(decimal_places=1, max_digits=2, default=1.0)
    model = models.CharField(max_length=200, choices=model_choices, default=HERO)
    player_skin = models.IntegerField(default=1)

    def __str__(self):
        return str(self.screen_quality )+ str(self.lazy_weapon) + str(self.brightness) + self.model + str(self.player_skin)