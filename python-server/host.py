from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin
from cache_results import function_with_cache
from find_multiplier import find_multiplier
from top_contributors import get_top_contributors
from future_potential import predict_future

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

@app.route("/team_impact_graph", methods=["GET", "POST"])
def team_impact_graph():
    if request.method == 'POST':
        username = request.values
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
        return jsonify(dict_form)
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)

@app.route("/future_graph", methods=["GET", "POST"])
def future_graph():
    if request.method == 'POST':
        username = request.values
        print(username)
        dict['name'] = username
        past_data, future_data = function_with_cache(predict_future, [username])
        dict_form = {'future_data': future_data, 'past_data': past_data}
        return jsonify(dict_form)
    elif request.method == 'GET':
        print("yo")
        return jsonify(dict)
# @app.route("/home", methods=["POST"])
# def home():
#
#


if __name__ == "__main__":
    app.run(debug=True, port=5000)
