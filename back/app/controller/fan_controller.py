from flask import request, jsonify
from back.app import app

@app.route('/')
def home():
    return "Welcome to the Fan Controller API"

@app.route('/fan', methods=['GET'])
def fan():
    status = request.args.get('status')
    if status == 'on':
        return jsonify({"fan": "on"})
    elif status == 'off':
        return jsonify({"fan": "off"})
    else:
        return jsonify({"error": "Invalid status"}), 400
