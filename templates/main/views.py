from flask import render_template, Blueprint

main_blueprint = Blueprint('main',__name__)

@main_blueprint.route('/')
@main_blueprint.route('/main')
def index():
 return render_template("index.html")


@main_blueprint.route('/projects')
def projects():
 return render_template("projects.html")

@main_blueprint.route('/horse-bets')
def horse_bets():
 return render_template("horse-bets.html")