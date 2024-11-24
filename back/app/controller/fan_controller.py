from flask import Blueprint, request, jsonify
from flask_restx import Api, Resource, fields

fan_blueprint = Blueprint('fan_blueprint', __name__)
api = Api(fan_blueprint, title="Fan Controller API", description="API for controlling fan status")

# Define the model for fan status
fan_status_model = api.model('FanStatus', {
    'fan': fields.String(description='Fan status ("on" or "off")'),
    'error': fields.String(description='Error message if status is invalid')
})

@api.route('/fan')
class FanController(Resource):
    @api.doc(params={'status': 'Status of the fan (on/off)'})
    @api.response(200, 'Success', fan_status_model)
    @api.response(400, 'Invalid status', fan_status_model)
    def get(self):
        """Controls the fan status"""
        status = request.args.get('status')
        if status == 'on':
            return {"fan": "on"}, 200
        elif status == 'off':
            return {"fan": "off"}, 200
        else:
            return {"error": "Invalid status"}, 400
