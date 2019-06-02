from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import MatchFragSerializers, MatchSerializers
from .models import Matches, MatchFrags


class MatchAPI(generics.GenericAPIView):
    serializer_class = MatchSerializers

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        match = serializer.validated_data
        return Response({
            'match': MatchSerializers(match, context=self.get_serializer_context()).data,
            })


class MatchFragAPI(generics.GenericAPIView):
    serializer_class = MatchFragSerializers

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        match_frag = serializer.validated_data
        return Response({
            'match_frag': MatchFragSerializers(match_frag, context=self.get_serializer_context()).data,
            })