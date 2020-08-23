from flask import Flask, render_template, request
from flask_debug import Debug
import os

application = Flask(__name__)

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["SESSION_TYPE"] = "filesystem"
app.secret_key = '84u589q0j3ewluiathsl98dfh98oue453'


@application.route("/")
def index():
    return render_template('home.html')

@app.route("/")
def index():
    return render_template('home.html')



if __name__ == '__main__':
    app.run()