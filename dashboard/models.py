from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=255)
    event_code = models.CharField(max_length=50, unique=True)
    date = models.DateField()
    level = models.CharField(max_length=100, choices=[
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced')
    ])
    event_type = models.CharField(max_length=100)
    seats_left = models.PositiveIntegerField()
    
    def __str__(self):
        return self.name
