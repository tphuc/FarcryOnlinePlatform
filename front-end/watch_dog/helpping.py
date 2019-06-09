from os.path import exists, isfile
from re import findall
from static import dictionary_data, dictionary_emoji
from csv import writer


def check_valid_pathfile(log_file_pathname):
    """
    :param log_file_pathname:
    :return:
    """
    if not exists(log_file_pathname):
        return False
    return isfile(log_file_pathname)


def read_log_file(log_file_pathname):
    """
    :param log_file_pathname:
    :return:
    """
    if check_valid_pathfile(log_file_pathname):
        with open(log_file_pathname, 'r') as data_file:
            data_file = data_file.read()
        return data_file
    return 'Invalid pathname'


def convert_string_to_dictionary_data(log_data):
    """
    :param log_data:
    :return:
    """
    result = findall(r"<\d+:\d+>\sLua\scvar:\s.(\w+),(.*)", log_data)
    for item in result:
        dictionary_data[item[0]] = item[1][:-1]


def prettify_frags(frags):
    """
    :param frags:
    :return:
    """
    result = []
    for item in frags:
        if item[2]:
            result.append('{} {} {} {} {} {}'.format(item[0], dictionary_emoji['Killer'], item[1],
                                                     dictionary_emoji[item[3]], dictionary_emoji['Victim'], item[2]))
        else:
            result.append('{} {} {} {}'.format(item[0], dictionary_emoji['Victim'], item[1],
                                               dictionary_emoji['Skull']))
    return result


def write_frag_csv_file(log_file_pathname, frags):
    """
    :param log_file_pathname:
    :param frags:
    :return:
    """
    with open(log_file_pathname, 'w', newline='') as csvfile:
        datawriter = writer(csvfile, delimiter=',')
        for item in frags:
            datawriter.writerow(list(item))
