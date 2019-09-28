from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin
from cache_results import function_with_cache

app = Flask(__name__)
CORS(app)
username = "aditya"
dict = {'name': 'Aditya Bansal', 'worldimpact': 54, 'potential': 32, 'teamimpact' : 69}
@app.route("/home", methods=["GET","POST"])
def home():
    if request.method == 'POST':
        print("yuss")
        username = request.values.get("githubid")
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

# @app.route("/home", methods=["POST"])
# def home():
#
#


if __name__ == "__main__":
    app.run(debug=True, port=5000)
