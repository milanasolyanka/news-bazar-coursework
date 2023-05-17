from flask import Flask, jsonify
import requests
from flask_cors import CORS
import os
from flask_socketio import SocketIO, Namespace, send
from threading import Thread, Event

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

API_KEY = os.getenv('NEWS_API_KEY', '238131f7f6664e22b6d625ac06847c72')
NEWS_API_URL = 'https://newsapi.org/v2/top-headlines'

# Определяем функцию для получения новостей
def fetch_news():
    parameters = {
        'country': 'us',
        'apiKey': API_KEY
    }

    try:
        response = requests.get(NEWS_API_URL, params=parameters)
        return response.json()
    except requests.RequestException:
        return None

class NewsNamespace(Namespace):
    # Обрабатываем подключение клиента
    def on_connect(self):
        print('Клиент подключен')

    # Обрабатываем отключение клиента
    def on_disconnect(self):
        print('Клиент отключен')

    # Получаем и отправляем новости
    def fetch_and_emit_news(self):
        with app.app_context():
            news_data = fetch_news()
            if news_data:
                send(news_data, broadcast=True, namespace='/news')

class NewsFetcher(Thread):
    def __init__(self, interval, namespace):
        super().__init__()
        self.interval = interval
        self.namespace = namespace
        self.stop_event = Event()

    # Запускаем цикл получения и отправки новостей
    def run(self):
        while not self.stop_event.is_set():
            self.namespace.fetch_and_emit_news()
            self.stop_event.wait(self.interval)

    # Останавливаем поток
    def stop(self):
        self.stop_event.set()

news_namespace = NewsNamespace('/news')
socketio.on_namespace(news_namespace)

@app.route('/news', methods=['GET'])
def get_news():
    news_data = fetch_news()
    if news_data:
        return jsonify(news_data), 200
    else:
        return jsonify({'сообщение': 'При получении новостей произошла ошибка.'}), 500

fetcher = NewsFetcher(60, news_namespace)
fetcher.start()

if __name__ == "__main__":
    socketio.run(app, port=5000)