from get_everything import data_dict
from cache_results import function_with_cache

def get_potential(username):
    print("USERNAME IS")
    print(username)
    print(data_dict(username))
    print(username)
    dict_all = function_with_cache(data_dict, [username])
    return dict_all['potential_impact']

def get_world(username):
    dict_all = function_with_cache(data_dict, [username])
    return dict_all['world_impact']

def get_team(username):
    dict_all = function_with_cache(data_dict, [username])
    return dict_all['team_impact']

