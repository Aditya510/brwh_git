from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin
from cache_results import function_with_cache
from find_multiplier import find_multiplier
from top_contributors import get_top_contributors
from future_potential import predict_future
from get_numbers import get_potential, get_world, get_team
from get_additional import get_additional_potential, get_additional_world, get_additional_team

app = Flask(__name__)
CORS(app)

username = "aditya"
dict = {'name': 'Aditya Bansal', 'worldimpact': 54, 'potential': 32, 'teamimpact' : 69}
@app.route("/home", methods=["GET","POST"])
def home():
    if request.method == 'POST':
        print("yuss")
        username = request.values
        print(username)
        dict['name'] = username
        return jsonify(dict)
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

@app.route("/test", methods=["GET"])
def test():
    def test_function(first, last):
        print(first, last)
        return {'first': first, 'last': last}
    test_vals = [[0, 1], [1, 3], [0, 1]]
    for val in test_vals:
        result = function_with_cache(test_function, val)
    return jsonify(result)

def team_impact_graph(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        multiplier, repo = function_with_cache(find_multiplier, [username])
        top_contributors = function_with_cache(get_top_contributors, [repo])
        cleaned_top_contributors = []
        for contributor in top_contributors:
            if contributor[1] != username:
                cleaned_top_contributors.append(contributor)
        top_contributors_list = []
        max_val = cleaned_top_contributors[0][0]
        for element in cleaned_top_contributors:
            scaled = element[0] / max_val * 50
            dict_form = {'userId': element[1],
                         'before': scaled,
                         'after': scaled * multiplier}
            top_contributors_list.append(dict_form)
        self_info = [[{'userId': username}]]
        top_contributors_list = [[top_contributors_list]]
        dict_form = {'data': top_contributors_list,
                     'personalData': self_info}
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def future_graph(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        past_data, future_data = function_with_cache(predict_future, [username])
        dict_form = {'future_data': future_data, 'past_data': past_data}
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def potential_number(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        dict_form = {'number': function_with_cache(get_potential, [username])}
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def potential_number_additional(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        dict_form = function_with_cache(get_additional_potential, [username])
        print(dict_form)
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def world_number(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        dict_form = {'number': function_with_cache(get_world, [username])}
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def world_number_additional(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        dict_form = function_with_cache(get_additional_world, [username])
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def team_number(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        dict_form = {'number': function_with_cache(get_team, [username])}
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

def team_number_additional(request):
    if request.method == 'POST':
        username = request.values['values']
        print(username)
        dict['name'] = username
        dict_form = function_with_cache(get_additional_team, [username])
        return dict_form
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

@app.route("/get_all_data", methods=["GET", "POST"])
def get_all_data():
    if request.method == 'POST':
        print(request.values)
        team_impact_data = team_number(request)
        team_impact_additional = team_number_additional(request)
        world_impact_data = world_number(request)
        world_impact_additional = world_number_additional(request)
        potential_impact_data = potential_number(request)
        potential_impact_additional = potential_number_additional(request)
        future_graph_data = future_graph(request)
        team_impact_graph_data = team_impact_graph(request)
        name = request.values['values']
        dict_data = {}
        dict_data['name'] = name

        potential_dict = {}
        potential_dict['similar_to'] = 'ti250'
        potential_dict['overall_score'] = potential_impact_data['number']
        potential_dict['parameterscores'] = potential_impact_additional
        potential_dict['graphdata'] = future_graph_data
        dict_data['potential'] = potential_dict

        world_dict = {}
        world_dict['similar_to'] = 'aditya510'
        print(world_impact_data)
        world_dict['overall_score'] = world_impact_data['number']
        world_dict['parameterscores'] = world_impact_additional
        dict_data['world'] = world_dict

        team_dict = {}
        team_dict['similar_to'] = 'ohnoah'
        team_dict['overall_score'] = team_impact_data['number']
        team_dict['parameterscores'] = team_impact_additional
        team_dict['graphdata'] = team_impact_graph_data
        dict_data['team']= team_dict

        return jsonify(dict_data)
# @app.route("/home", methods=["POST"])
# def home():
#
#


if __name__ == "__main__":
    app.run(debug=True, port=5000)
