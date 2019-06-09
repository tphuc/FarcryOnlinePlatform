from helpping import read_log_file, convert_string_to_dictionary_data, prettify_frags, write_frag_csv_file
from argparse import ArgumentParser
from parse_data import parse_log_start_time, parse_game_session_start_and_end_times, parse_match_mode_and_map, parse_game_session_start_and_end_times, parse_frags
import requests
from static import dict_game, dict_system
import psutil
import re
from os import system


def checkIfProcessRunning(processName):
    '''
    Check if there is any running process that contains the given name processName.
    '''
    #Iterate over the all the running process
    for proc in psutil.process_iter():
        try:
            # Check if process name contains the given name string.
            if processName.lower() in proc.name().lower():
                return True
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
    return False;


def post_data(param_match, param_frags, username, id_user, token, param_setting):
    username_master = 'phuccoker'
    url_settings = 'https://farcryonline.herokuapp.com/api/user/{}/settings'.format(id_user)
    if username == username_master:
        url_match = 'https://farcryonline.herokuapp.com/api/matches.create'
        r = requests.post(url=url_match, data=param_match)
        id = r.json()['match']['id']
        url_matchfrags = 'https://farcryonline.herokuapp.com/api/frags.create'
        if param_frags:
            for item in param_frags:
                param_frag = {
                    'killer': item[1],
                    'victim': item[2],
                    'weapon_code': item[3],
                    'match': id,
                    'frag_time': item[0]
                }
                requests.post(url=url_matchfrags, data=param_frag)
    requests.put(url=url_settings, headers={'Authorization': token}, data=param_setting)


def get_data_settings(token):
    url = 'https://farcryonline.herokuapp.com/api/auth/user'
    header = {'Authorization': 'token '+token}
    r = requests.get(url, headers=header)
    return r.json()


def write_sysconf_start(path, token, olddata):
    result = ''
    with open(path + 'system.cfg', 'r') as f:
        data = f.readlines()
    for index, value in enumerate(data[3:]):
        content = value[:-1].split(' = ')

        for item in dict_system:
            if content[0] == dict_system[item]:
                content[1] = str(olddata['settings'][item])
            data[index] = ' = '.join(content) + '\n'
    for item in data:
        result += item
    with open(path + 'system.cfg', 'w+') as f1:
        f1.write(result)


def get_sysconf_end(path):
    dict_sysconf = {}
    with open(path + 'system.cfg', 'r') as f:
        data = f.readlines()
    for index, value in enumerate(data[3:]):
        content = value[:-1].split(' = ')
        for item in dict_system:
            if content[0] == dict_system[item]:
                if item == 'screen_quality' or item == 'player_skin':
                    dict_sysconf[item] = int(content[1])
                else:
                    dict_sysconf[item] = content[1]
    return dict_sysconf


def write_gameconf_end(path, store_path):
    with open(path+'game.cfg', 'r') as f:
        data = f.read()
    with open(store_path+'/watch_dog/game.txt', 'w') as f1:
        f1.write(data)


def write_gameconf_start(path, store_path):
    with open(store_path+'/watch_dog/game.txt', 'r') as f:
        data = f.read()
    with open(path+'game.cfg', 'w') as f1:
        f1.write(data)


def run_farcry(path):
    system(path)


def get_needed_path(path):
    return path[:-16]


def main():
    parser = ArgumentParser()
    parser.add_argument('token')
    parser.add_argument('rootpath')
    parser.add_argument('path')
    args = parser.parse_args()
    check = True
    path = get_needed_path(args.rootpath)
    old_data_settings = get_data_settings(args.token)
    write_sysconf_start(path, args.token, old_data_settings)
    write_gameconf_start(path, args.path)
    run_farcry(args.rootpath)
    while check:
        if not checkIfProcessRunning('farcry.exe'):
            break
    log_data = read_log_file(path + 'log.txt')
    convert_string_to_dictionary_data(log_data)
    parse_log_start_time(log_data)
    parse_match_mode_and_map(log_data)
    frags = parse_frags(log_data)
    start, end = parse_game_session_start_and_end_times(log_data)
    param_match = {'start_time': start, 'end_time': end}
    write_gameconf_end(path, args.path)
    param_setting = get_sysconf_end(path)
    post_data(param_match, frags, old_data_settings['username'], old_data_settings['id'], args.token, param_setting)

if __name__ == '__main__':
    main()
