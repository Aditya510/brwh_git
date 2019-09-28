import json
import os
import sys

def get_file_name(function_args):
    name = ''
    for el in function_args:
        name += str(el)
    return name + '.json'

def get_cached_results(directory_name, function_args):
    if not os.path.isdir(directory_name):
        os.mkdir(directory_name)
        return None
    file_name = get_file_name(function_args)
    full_path = os.path.join(directory_name, file_name)
    if os.path.exists(full_path):
        with open(full_path) as json_file:
            data = json.load(json_file)
            return data
    return None

def store_result(directory_name, function_args, results):
    full_path = os.path.join(directory_name, get_file_name(function_args))
    with open(full_path, 'w') as f:
        json.dump(results, f)

def function_with_cache(function, function_args):
    directory_name = 'cached_results_for_' + function.__name__
    cached_result = get_cached_results(directory_name, function_args)
    if cached_result:
        return cached_result
    result = function(*function_args)
    store_result(directory_name, function_args, result)
    return result

def test_function(first, last):
    print("executing test_function for", first, last)
    return {'first': first, 'last': last}

if __name__ == '__main__':
    args = [[1, 2], [3, 4], [1, 2], [5, 4], [3, 4]]
    for arg in args:
        result = function_with_cache(test_function, arg)
        print("got result:", result)
