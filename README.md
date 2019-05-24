# FarcryOnlinePlatform

## Goals
  - Create an online platform that can **store, display** information of Farcry **matches** and **players**

## Features
    -
    -
## Tools

 - **Django (backend)**
      + django-rest-framwork : creating RESTFUL API
 
 - **React + Electron (desktop app)**:
      + axios (module for calling rest-api)

      
## Implement
- **Farcry launcher (desktop app) (React + Electron)**

    + login Far Cry online platform;
    + automatically load the player's settings previously saved to the Far Cry online platform;
    + to launch Far Cry (the game);
    + to save the player's settings to the Far Cry online platform, when the player quits Far Cry;
    + to logout the player.

- **Farcry Match Watchdog (CLI interface for parsing a in Python)**
    + sending realtime data (read from __**log.txt**__) to sever

- **Farcry Backend**
    - Storing our database
        + **player**
            + authentication(password, ...)
            + profile
                + avatar
                + game settings
                    + player_name
                    + player_class
                    + player_costume
        + **match**
            + frags
            + statistics
# Flowchart
![diagram1](/description/diagram1.png)
--------------------------------------
![diagram2](/description/diagram2.png)

# Waypoints

## 1. Collect static data
- If you want to store setting for each player, you have to make sure that your "setting data" sent to "Farcry machine" is valid

    + respect the keywords:
    ``` 
        ...
        p_model = "objects/characters/pmodels/hero/hero.cgf"
        p_name = "TheAsianSanta"
        r_Beams = "1"
        r_Brightness = "0.500000"
        r_checkSunVis = "1"
        r_ColorBits = "32"
        r_Contrast = "0.500000"
        ...
    ```
- For convenient we only need several of them:

      + system
      
        ```
        p_name = "TheAsianSanta"  (player name ingame) (text)
        sys_spec = "3"            (machine spec)       (0-3)
        cl_lazy_weapon = "1.0"    (lazy weapon)        (0.0-1.0)
        r_Brightness = "0.5"      (brightness)         (0.0-1.0)
        mp_model = "path/"        valid options:
                                   [
                                     "objects/characters/pmodels/hero/hero_mp.cgf",
                                     "objects/characters/mercenaries/merc_scout/merc_scout_mp.cgf",
                                     "objects/characters/mercenaries/merc_rear/merc_rear_mp.cgf",
                                     "Objects/characters/workers/evil_worker/evil_worker_MP.cgf",
                                     "objects/characters/pmodels/story_characters/mertz/mertz_mp.cgf",
                                   ]

        p_color = "9"              (main color skin)   (0-9)

        ```
      + key_binding
        ```
        ```
   
   ## 2. Create django models
      + Users
            - password
            - username
            - profile
       
      + users_profile
            - user ( foreign key)
            _ [settings]
       
      + matchs
            _ start_time
            - end_time
           
      + match_frags
            - match (forein key)
            - frag_time
            - killer_name
            - victime_name
            - weapon_code
 
   ## 3. Serializer with Django-rest-framwork
      
      - First install django-rest-framework. Make sure you add "rest_framework" to INSTALLED_APPS
      
      - Adding serializers, views. Serializer converts queryset data of a model to XML/JSON format
      
      matches-
            \_ models.py
            \_ serializers.py
            \_ ...
            
  ```python
      #matches/serializers.py
      from rest_framework import serializers
      from .models import Match

      class MatchSerializer(serializers.ModelSerializer):
          class Meta:
            model = Match
            fields = '__all__'
  ```
  ```python
      #matches/views.py
      from .models import Match
      from .serializers import MatchSerializer
      # Create your views here.

      class MatchView(viewsets.ModelViewSet):
          serializer_class = MacthSerializer
          queryset = Match.objects.all()
  ```
      - Add router to settings.py
  ```python
  from rest_framework import routers
  from matches.views import MatchView
  from users.views import UserView


  router = routers.DefaultRouter()
  router.register(r'blogs', MatchView, 'blogs')
  router.register(r'tags', UserView, 'tags')
  
  urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
  ]


  ```
  - references: https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react
  
              
      
            

