from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/news', methods=['GET'])
def get_news():
    api_key = '238131f7f6664e22b6d625ac06847c72'
    url = 'https://newsapi.org/v2/top-headlines'
    parameters = {
        'country': 'us',
        'apiKey': api_key
    }

    response = requests.get(url, params=parameters)

    return jsonify(response.json()), 200

if __name__ == "__main__":
    app.run(port=5000)
