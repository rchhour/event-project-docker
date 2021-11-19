from django.contrib import admin
from django.urls import path, re_path
from events import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/events/$', views.events_list),
]
