# Generated by Django 2.2.1 on 2019-05-30 13:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('screen_quality', models.IntegerField()),
                ('lazy_weapon', models.DecimalField(decimal_places=1, max_digits=1)),
                ('brightness', models.DecimalField(decimal_places=1, max_digits=1)),
                ('model', models.CharField(choices=[('hero', 'objects/characters/pmodels/hero/hero_mp.cgf'), ('merc_rear', 'objects/characters/mercenaries/merc_scout/merc_scout_mp.cgf'), ('merc_rear', 'objects/characters/mercenaries/merc_rear/merc_rear_mp.cgf'), ('evil_worker', 'bbjects/characters/workers/evil_worker/evil_worker_MP.cgf'), ('mertz', 'objects/characters/pmodels/story_characters/mertz/mertz_mp.cgf')], default='hero', max_length=200)),
                ('player_skin', models.IntegerField()),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
