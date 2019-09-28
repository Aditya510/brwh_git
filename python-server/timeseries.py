import numpy as np
from github import Github
import pandas as pd
from pandas.plotting import autocorrelation_plot
from matplotlib import pyplot as plt
import itertools
from statsmodels.tsa.statespace.sarimax import SARIMAX
from sklearn.metrics import mean_squared_error
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()


g = Github("4a3b0405cd1980cc773fdf3b40ab4eca9c082da0")

def get_commit_timeseries(name):
    user = g.get_user(name)
    user_name = user.name
    repos = get_repos(user)
    timeseries = {}
    for raw_repo in repos:
        #TO DO: move this to the get_repos function
        repo = raw_repo.parent
        if(repo == None):
            repo = raw_repo
        stat_contrib = repo.get_stats_contributors()
        commits_exist = stat_contrib != None
        if(commits_exist):
            for stat in stat_contrib:
                if(stat.author == user):
                    for week in stat.weeks:
                        if(week.w in timeseries):
                            timeseries[week.w] = timeseries[week.w] + week.c
                        else:
                            timeseries[week.w] = week.c
    return pd.Series(timeseries).resample("7D").mean()

def train_ml_prediction(timeseries,arima_order, steps=26):
    model = SARIMAX(timeseries, order=arima_order)
    model_fit = model.fit()
    print(model_fit.summary())
    return model_fit.forecast(steps)

def get_timeseries_and_forecast(name):
    ORDER = (1,1,1)
    original = get_commit_timeseries(name).cumsum()
    preds = train_ml_prediction(original, (1, 1, 1), steps=26)
    list_original = list(zip(original.index, original))
    list_preds = list(zip(preds.index, preds))
    return list_original, list_preds

def get_repos(user):
    print(f"Got {g.rate_limiting[0]} requests in this hour left")
    return user.get_repos(type="all")
