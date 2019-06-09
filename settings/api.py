from rest_framework import generics
from .serializers import SettingSerializer 


class SettingAPI(generics.GenericAPIView):
    serializer_class = SettingSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        settings = serializer.save()
        return Response({
            'settings': SettingSerializer(settings, context=self.get_serializer_context()).data
        })