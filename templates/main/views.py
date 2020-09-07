from flask import render_template, Blueprint
from flask import jsonify

main_blueprint = Blueprint('main',__name__)

@main_blueprint.route('/')
@main_blueprint.route('/main')
def index():
 return render_template("index.html")


@main_blueprint.route('/projects')
def projects():
 return render_template("projects.html")