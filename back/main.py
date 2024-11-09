from back.app import app
from back.app.controller.fan_controller import fan_blueprint

app.register_blueprint(fan_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
