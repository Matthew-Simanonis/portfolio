import numpy as np
import pandas as pd 
import json, datetime
import matplotlib.pyplot as plt
import yfinance as yf


def get_graph(ticker, tf):
    ticker = ticker.replace('"','')
    stock = yf.Ticker(ticker)
    hist = stock.history(period=tf)
    prices = hist['Close'].to_list()
    dates =  [d.strftime("%m/%d/%Y") for d in hist.index]
    data = {'prices': prices,
            'dates' : dates    
        }
    data = json.dumps(data, default = myconverter)
    return data

def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

