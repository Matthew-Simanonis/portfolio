import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt
import yfinance as yf


def get_graph(ticker):
    stock = yf.Ticker(ticker).history
    return stock


def plotstock(df, stock):
    plt.style.use('bmh')

    fig, axes = plt.subplots(nrows=3, ncols=1,figsize=(18,14)) # Graphing
    plt.margins(.1)
    df[['Close', 'FiftyEMA', 'TwohundredMA']].plot(ax=axes[0]); axes[0].set_title(f'{stock.upper()} Price')
    df[['K2','D']].plot(ax=axes[2]); axes[1].set_title('Oscillator')
    df[['MACD','Signal']].plot(ax=axes[1]); axes[1].set_title('MACD')
    
    try:
        df['Buys'].plot(ax=axes[0], fillstyle='none', marker='o', color='green', markersize=11)
    except:
        pass
    try:
        df['Sells'].plot(ax=axes[0], fillstyle='none', marker='o', color='red', markersize=11)
    except:
        pass
    return fig