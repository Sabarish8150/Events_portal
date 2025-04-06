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
    faculty = models.CharField(max_length=255,default="Unknown Faculty") 
    
    def __str__(self):
        return self.name


class Assessment(models.Model):
    event_code = models.CharField(max_length=100) 
    event_name = models.CharField(max_length=255)
    date = models.DateField()
    level = models.CharField(max_length=50)
    score = models.IntegerField(default=0)
    status = models.CharField(max_length=50)
    faculty = models.CharField(max_length=255,default="Unknown Faculty")  # Ensure uniqueness
    
    

    def __str__(self):
        return self.event_name
    

