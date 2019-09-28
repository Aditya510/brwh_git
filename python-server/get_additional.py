from get_everything import data_dict
from cache_results import function_with_cache

def get_additional_team(username):
    dict_all = function_with_cache(data_dict, [username])
    dict_form = {'inspiration_coefficient': dict_all['inspiration_coefficient'],
                 'team_value': dict_all['team_value']}
    return dict_form

def get_additional_potential(username):
    dict_all = function_with_cache(data_dict, [username])
    dict_form = {'future_growth': dict_all['future_growth'],
            'java_expertise': dict_all['java_expertise'],
                 'commitment': dict_all['commitment']}
    return dict_form

def get_additional_world(username):
    dict_all = function_with_cache(data_dict, [username])
    dict_form = {
            'repository_impact': dict_all['repository_impact']
            }
    return dict_form
