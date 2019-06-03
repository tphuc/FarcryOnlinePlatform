# Generated by Django 2.2.1 on 2019-06-03 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_auto_20190603_1032'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_FIREMODE',
            new_name='k_firemode',
        ),
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_MOVE_BACKWARD',
            new_name='k_move_backward',
        ),
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_MOVE_FORWARD',
            new_name='k_move_forward',
        ),
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_MOVE_LEFT',
            new_name='k_move_left',
        ),
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_MOVE_RIGHT',
            new_name='k_move_right',
        ),
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_MOVEMODE2',
            new_name='k_movemode2',
        ),
        migrations.RenameField(
            model_name='usersettings',
            old_name='K_RELOAD',
            new_name='k_reload',
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='model',
            field=models.CharField(choices=[('hero', 'objects/characters/pmodels/hero/hero_mp.cgf'), ('merc_rear', 'objects/characters/mercenaries/merc_scout/merc_scout_mp.cgf'), ('merc_rear', 'objects/characters/mercenaries/merc_rear/merc_rear_mp.cgf'), ('evil_worker', 'bbjects/characters/workers/evil_worker/evil_worker_MP.cgf'), ('mertz', 'objects/characters/pmodels/story_characters/mertz/mertz_mp.cgf')], default='objects/characters/pmodels/hero/hero_mp.cgf', max_length=200),
        ),
    ]