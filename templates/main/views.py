from flask import render_template, Blueprint, request, jsonify, make_response
from .macdalerts import get_graph

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

@main_blueprint.route('/MusicCalendar')
def musiccalendar():
 return render_template("musiccalendar.html")

@main_blueprint.route('/macd-alerts', methods=['GET', 'POST'])
def macdalerts():
    return render_template("macdalerts.html")

@main_blueprint.route('/getgraph', methods=['POST'])
def getgraph():
    ticker = request.data.decode('UTF-8')
    data = get_graph(ticker)
    return data
