from django.contrib import admin

from .models import Event

class EventAdmin(admin.ModelAdmin):
  list = ('name', 'description', 'startDate','endDate')

admin.site.register(Event, EventAdmin)