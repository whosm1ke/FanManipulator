import unittest
from flask import Flask
from back.app.controller.fan_controller import fan_blueprint

class TestFanController(unittest.TestCase):
    def setUp(self):
        """Set up the test client for the Flask app."""
        self.app = Flask(__name__)
        self.app.register_blueprint(fan_blueprint)
        self.client = self.app.test_client()

    def test_fan_status_on(self):
        """Test the fan status with 'on' parameter."""
        response = self.client.get('/fan?status=on')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {"fan": "on"})

    def test_fan_status_off(self):
        """Test the fan status with 'off' parameter."""
        response = self.client.get('/fan?status=off')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {"fan": "off"})

    def test_fan_status_invalid(self):
        """Test the fan status with an invalid parameter."""
        response = self.client.get('/fan?status=invalid')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {"error": "Invalid status"})

    def test_fan_status_missing(self):
        """Test the fan status when no parameter is provided."""
        response = self.client.get('/fan')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {"error": "Invalid status"})

if __name__ == '__main__':
    unittest.main()
