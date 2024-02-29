from flask import Flask
from flask_socketio import SocketIO
from database import db
import os

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.abspath(os.getcwd())+"\\database\\database.db"
db.init_app(app)
with app.app_context():
    db.create_all()

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins=['http://localhost:3000'])



