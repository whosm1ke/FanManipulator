from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)

from back.app.controller import fan_controller
