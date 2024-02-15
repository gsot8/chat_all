import json

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins=['http://localhost:3000'])
mas = []


@socketio.on('connect')
def send_text():
    print(mas)
    emit('all_message', mas)


@socketio.on('disconnect')
def send_text():
    print('disconnect')


@socketio.on('message')
def handle_message(value):
    current_time = str(datetime.datetime.now())
    print('received message: ' + value +current_time)
    mas.append({
        'msg': value,
        'time': current_time
    })
    emit('add_message', mas[-1], broadcast=True)


if __name__ == '__main__':
    socketio.run(app, allow_unsafe_werkzeug=True)
