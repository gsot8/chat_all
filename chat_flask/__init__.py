from app import socketio
from app import app
from api import *
import os
print("sqlite:///" + os.path.abspath(os.getcwd())+"\\database\\database.db")
socketio.run(app, allow_unsafe_werkzeug=True)