from django.db import models

# Create your models here.
class Event(models.Model):
    title       = models.CharField("title",max_length=30)
    startDate   = models.DateField()
    endDate     = models.DateField()

    def __str__(self):
        return self.title