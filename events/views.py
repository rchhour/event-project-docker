from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Event
from .serializers import *

@api_view(['GET', 'POST'])
def events_list(request):
    if request.method == 'GET':
        data = Event.objects.all()

        serializer = EventSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
