# Generated by Django 5.0.3 on 2025-03-04 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_assessment_event_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assessment',
            name='event_code',
            field=models.CharField(default='DEFAULT_CODE', max_length=100),
        ),
    ]
