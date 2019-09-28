from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin

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

# @app.route("/home", methods=["POST"])
# def home():
#
#


if __name__ == "__main__":
    app.run(debug=True, port=5000)