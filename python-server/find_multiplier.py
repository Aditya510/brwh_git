from get_everything import data_dict
from cache_results import function_with_cache

def find_multiplier(github_id):
    result = function_with_cache(data_dict, [github_id])
    if 'impact_repos' in result.keys() and result['impact_repos']:
        repo = result['impact_repos']
        multiplier = result['impact_rates']
        return multiplier, repo
    return 1.5, 'pytorch/pytorch'
