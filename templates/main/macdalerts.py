import numpy as np
import pandas as pd 
import json, datetime
import matplotlib.pyplot as plt
import yfinance as yf

TIMEFRAME = {'max': 0, '1y' : 365, '1mo' : 30, '2y': 830}


def get_graph(ticker, tf):
    ticker = ticker.replace('"','')
    stock = yf.Ticker(ticker)
    hist = stock.history(period='max')
    fulldf = addmacd(hist)
    fulldf = fulldf[-TIMEFRAME[tf]:]
    prices = fulldf['Close'].to_list()
    fiftyma = fulldf['FiftyMA'].to_list()
    twhohundredma = fulldf['TwohundredMA'].to_list()
    k = fulldf['K2'].to_list()
    d = fulldf['D'].to_list()
    macd = fulldf['MACD'].to_list()
    signal = fulldf['Signal'].to_list()
    dates =  [d.strftime("%m/%d/%Y") for d in fulldf.index]
    data = {'prices': prices,
            'dates' : dates,
            'fiftyma' : fiftyma,
            'stochk' : k,
            'stochd' : d,
            'macd' : macd,
            'signal' : signal,
            'twohundredma' : twhohundredma
        }
    data = json.dumps(data, default = myconverter)
    return data

def addmacd(df):
    df['High14'] = df['High'].rolling(14).max()         # Create 14 Day high/low, 50/200 day moving Average, and 50 day EMA
    df['Low14'] = df['Low'].rolling(14).min()       
    df['FiftyMA'] = df['Close'].rolling(window=50).mean()
    df['TwohundredMA'] = df['Close'].rolling(window=200).mean()
    df['FiftyEMA'] = df['Close'].ewm(span=50, adjust=False).mean()

    df['K'] = 100*((df['Close'] - df['Low14']) / (df['High14'] - df['Low14']) ) # Calculate Stochastic indicators
    df['D'] = df['K'].rolling(window=3).mean()
    df['K2'] = df['D'].rolling(window=3).mean()

    try:
        df = df.drop(['High', 'Low', 'Dividends', 'Stock Splits', 'Low14', 'High14'], axis=1)
    except:
        df = df.drop(['High', 'Low', 'Low14', 'High14'], axis=1)
    exp1 = df["Close"].ewm(span=12, adjust=False).mean()
    exp2 = df["Close"].ewm(span=26, adjust=False).mean()
    macd = exp1-exp2
    signalline = macd.ewm(span=10, adjust=False).mean()
    df['MACD'] = macd
    df['Signal'] = signalline
    df['Histogram'] = macd - signalline
    df = df.fillna(0)
    return df

def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

