# Generated by Django 2.2.1 on 2019-06-02 15:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0002_auto_20190602_1511'),
    ]

    operations = [
        migrations.AlterField(
            model_name='matches',
            name='end_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='matches',
            name='start_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='matchfrags',
            name='frag_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='matchfrags',
            name='killer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='killer', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='matchfrags',
            name='match',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='matches.Matches'),
        ),
        migrations.AlterField(
            model_name='matchfrags',
            name='victim',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='victim', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='matchfrags',
            name='weapon_code',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]