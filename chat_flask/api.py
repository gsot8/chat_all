from flask_cors import CORS
from flask import request
from database import db, User, Message
from flask_socketio import emit
import datetime
import secrets

from app import socketio, app

mas = []


@app.route('/reg', methods=["POST"])
def create_user():
    user_dict = {
        'login': request.json.get('login'),
        'password': request.json.get('password'),
        'token': secrets.token_hex(20)
    }
    user = User(**user_dict)
    return "???"


@socketio.on('connect')
def send_text():
    mas = list(map(lambda x: x.__dict__, db.session.query(Message).all()))
    [m.pop('_sa_instance_state', None) for m in mas]
    emit('all_message', mas)


@socketio.on('disconnect')
def send_text():
    print('disconnect')


print(321)


@socketio.on('message')
def handle_message(value):
    print(123)
    current_time = str(datetime.datetime.now())
    message_dict = {
        'login': value[1],
        'content': value[0],
        'time': current_time
    }

    message = Message(**message_dict)
    db.session.add(message)
    db.session.commit()
    print('received message: ' + value[1] + value[0] + current_time)
    print(message_dict)
    emit('add_message', message_dict, broadcast=True)


cors = CORS(app,resources={r"/*":{"origins":"*"}})
socketio.run(app, allow_unsafe_werkzeug=True)
