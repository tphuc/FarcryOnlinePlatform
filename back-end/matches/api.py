from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from .serializers import MatchFragSerializers, MatchSerializers
from .models import Matches, MatchFrags
from django.contrib.auth.models import User


class MatchAPI(generics.GenericAPIView):
    serializer_class = MatchSerializers

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        match = serializer.save()
        return Response({
            'match': MatchSerializers(match, context=self.get_serializer_context()).data,
        })


class MatchFragAPI(generics.GenericAPIView):
    serializer_class = MatchFragSerializers

    def post(self, request, *args, **kwargs):
        new_data = {}
        new_data['killer'] = User.objects.get(
            username=request.data['killer']).id
        new_data['victim'] = User.objects.get(
            username=request.data['victim']).id
        new_data['weapon_code'] = request.data['weapon_code']
        new_data['match'] = Matches.objects.get(id=request.data['match']).id
        new_data['frag_time'] = request.data['frag_time']
        serializer = self.get_serializer(data=new_data)
        serializer.is_valid(raise_exception=True)

        match_frag = serializer.save()
        return Response({
            'match_frag': MatchFragSerializers(match_frag, context=self.get_serializer_context()).data,
        })

    def get(self, request, *args, **kwargs):
        return


class MatchFragViewSet(viewsets.ModelViewSet):

    serializer_class = MatchFragSerializers

    def get_queryset(self):
        return MatchFrags.objects.filter(match=self.request.data['match_id'])
