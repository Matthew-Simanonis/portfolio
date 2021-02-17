from flask import render_template, Blueprint, request, jsonify, make_response
from .macdalerts import get_graph
from .sendAlert import check_stocks
from .AlbumAnniversary import albumCheck

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

@main_blueprint.route('/getgraph', methods=['GET', 'POST'])
def getgraph():
    ticker = request.args.get('stock')
    time = request.args.get('timeframe')
    data = get_graph(ticker, time)
    return data

@main_blueprint.route('/stockalerts', methods=['GET'])
def stock_alert():
    success = check_stocks('c')
    if success:
        return '<div>Success! All Stocks Checked</div>'
    else: 
        return '<div>FAILURE</div>'

@main_blueprint.route('/stockalerts/<ticker>', methods=['GET'])
def check_ticker(ticker):
    success = check_stocks(ticker)
    if success:
        return '<div>Success! {ticker} Checked</div>'
    else: 
        return '<div>FAILURE</div>'

@main_blueprint.route('/albumalerts', methods=['GET'])
def check_albums():
    data = albumCheck('c')
    success = data['success']
    date = data['date']
    if success:
        return f'<div>{date} Checked</div>'
    else:
        return f'<div>No Albums today {date}</div>'