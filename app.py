# Импорт нужных библиотек
from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

# Константы, которые можно легко изменить
API_KEY = '238131f7f6664e22b6d625ac06847c72'
DEFAULT_URL = 'https://newsapi.org/v2/top-headlines'
DEFAULT_COUNTRY = 'us'

# Создание Flask приложения
app = Flask(__name__)

# Настройка CORS для приложения
CORS(app)

@app.route('/news', methods=['GET'])
def get_news():
    # Параметры для запроса к News API
    parameters = {
        'country': DEFAULT_COUNTRY,
        'apiKey': API_KEY
    }

    # Отправка запроса к News API
    response = requests.get(DEFAULT_URL, params=parameters)

    # Возвращение ответа от News API в формате JSON с кодом статуса 200
    return jsonify(response.json()), 200

# Запуск Flask приложения, если скрипт запущен напрямую
if __name__ == "__main__":
    app.run(port=5000)
