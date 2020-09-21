from flask import Flask
from templates.main.views import main_blueprint

application = Flask(__name__, static_folder = './public', template_folder="./static")

# register the blueprints
application.register_blueprint(main_blueprint)