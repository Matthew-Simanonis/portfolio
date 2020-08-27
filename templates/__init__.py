from flask import Flask
from templates.main.views import main_blueprint

app = Flask(__name__, static_folder = './public', template_folder="./static")

# register the blueprints
app.register_blueprint(main_blueprint)