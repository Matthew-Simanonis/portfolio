from flask import render_template, Blueprint

main_blueprint = Blueprint('main',__name__)

@main_blueprint.route('/')
@main_blueprint.route('/main')
def index():
 return render_template("index.html")