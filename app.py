from flask import Flask, jsonify, request
import requests
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Выносим url и api_key в глобальные переменные
API_KEY = os.getenv('NEWS_API_KEY', '238131f7f6664e22b6d625ac06847c72')
NEWS_API_URL = 'https://newsapi.org/v2/top-headlines'

@app.route('/news', methods=['GET'])
def get_news():
    # Параметры для запроса к API
    parameters = {
        'country': 'us',
        'apiKey': API_KEY
    }

    try:
        # Делаем запрос к API
        response = requests.get(NEWS_API_URL, params=parameters)

        # Возвращаем результат запроса в формате JSON
        return jsonify(response.json()), 200
    except requests.RequestException:
        # Если произошла ошибка во время запроса, возвращаем сообщение об ошибке
        return jsonify({'сообщение': 'При получении новостей произошла ошибка.'}), 500

if __name__ == "__main__":
    app.run(port=5000)
