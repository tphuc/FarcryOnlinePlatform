# FarcryOnlinePlatform

## Goals
  - Create an online platform that can **store, display** information of Farcry **matches** and **players**


      
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


  
# How

## to run the app
- we are using Yarn package manager
``` 
    cd front-end
    yarn start
```
- Notes: (need to install all dependencies before run)
``` 
    yarn add [dependencie]
```

## INGAME
![login](/description/login.png)
![sa](/description/home.png)
![setting](/description/setting.png)
![pro](/description/profile.png)
![pro](/description/play_button.png)
      
            

