from .app import socketio
from .app import app
from .api import *


socketio.run(app, allow_unsafe_werkzeug=True)