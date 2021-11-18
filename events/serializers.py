from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event 
        fields = ('pk', 'name', 'description','startDate', 'endDate')