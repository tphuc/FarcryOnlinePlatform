from re import findall
from datetime import datetime, timezone, timedelta
from static import dictionary_data, dictionary_emoji


def parse_log_start_time(log_data):
    """
    :param log_data:
    :return:
    """
    result = findall(r"^Log Started.*", log_data)[0]
    time = datetime.strptime(result, 'Log Started at %A, %B %d, %Y %H:%M:%S')
    tz = timezone(timedelta(hours=int(dictionary_data['g_timezone'])))
    time = time.replace(tzinfo=tz)
    dictionary_data['start_time'] = time
    return time


def parse_match_mode_and_map(log_data):
    """
    :param log_data:
    :return:
    """
    result = findall(r"Loading level \w+.(\w+), \w+ (\w+)", log_data)[0]
    mode_map = (result[1], result[0])
    return mode_map


def parse_frags(log_data):
    """
    :param log_data:
    :return:
    """
    result = findall(
        r"<(.*)> <Lua> (.*)? killed (?:(.*)? with (.*))?", log_data)
    for index, value in enumerate(result):
        result[index] = list(result[index])
        time = value[0].split(':')
        result[index][0] = dictionary_data['start_time'].replace(
            minute=int(time[0]), second=int(time[1]))
        result[index] = tuple(result[index])
    return result


def parse_game_session_start_and_end_times(log_data):
    """
    :param log_data:
    :return:
    """
    start = findall(r"<.*> Precaching level ... <(.*)> done",
                    log_data)[0].split(':')
    end = findall(r"<(.*)> == Statistics.*==", log_data)[0]
    if end:
        end = end.split(':')
    else:
        end = findall(
            r"<(.*)> ERROR: .3#SCRIPT ERROR File: =C, Function: _ERRORMESSAGE,", log_data)[0].split(':')
    start_session = dictionary_data['start_time'].replace(
        minute=int(start[0]), second=int(start[1]))
    end_session = dictionary_data['start_time'].replace(
        minute=int(end[0]), second=int(end[1]))
    result = (start_session, end_session)
    return result
