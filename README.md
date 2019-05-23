# FarcryOnlinePlatform

## Goals
  - Create an online platform that can **store, display** information of Farcry **matches** and **players**

## Features
    
   -**user**
      + account, password authenticate
      
      + profile setting
   
        . player_name
        . ...
       
   -**match**
      + frags

      + statistics
   -...
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


