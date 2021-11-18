from django.db import models

# Create your models here.
class Event(models.Model):
    name       = models.CharField("name",max_length=32)
    description = models.CharField("description",max_length=100)
    startDate   = models.DateField()
    endDate     = models.DateField()

    def __str__(self):
        return self.name