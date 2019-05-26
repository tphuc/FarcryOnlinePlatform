from django.db import models

# Create your models here.
class Users(models.Model):
    username = models.CharField()
    password = models.CharField()


class User_Settings(models.Model):
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
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    screen_quality = models.IntegerField()
    lazy_weapon = models.DecimalField()
    brightness = models.DecimalField()
    model = models.CharField(choices=model_choices, default=HERO)
    player_skin = models.IntegerField()


class Matches(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


class Match_frags(models.Model):
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    frag_time = models.DateField()
    killer_name = models.ForeignKey(User)
    victim_name = models.ForeignKey(User)
    weapon_code = models.CharField



