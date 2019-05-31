# Generated by Django 2.2.1 on 2019-05-31 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_remove_usersettings_order'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usersettings',
            old_name='username',
            new_name='user',
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='brightness',
            field=models.DecimalField(decimal_places=1, default=1.0, max_digits=2),
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='lazy_weapon',
            field=models.DecimalField(decimal_places=1, default=1.0, max_digits=2),
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='player_skin',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='screen_quality',
            field=models.IntegerField(default=1),
        ),
    ]
