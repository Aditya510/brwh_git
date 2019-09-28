
import numpy as np
from github import Github
from github import GithubException
import time
import datetime
from datetime import datetime
from time import mktime
from IPython.display import clear_output, display
import subprocess
from io import StringIO
import pandas as pd
import os
import sys
import math
from subprocess import Popen, PIPE
import networkx as nx
from statsmodels.tsa.statespace.sarimax import SARIMAX

ACCESS_TOKEN = "71c7c4bc2aedb93e6e009aa1fd69fe199962ef07"
g = Github(ACCESS_TOKEN)
client = Github(ACCESS_TOKEN, per_page=100)

def converter(data, boundaries):
    boundaries = [float("-inf")] + boundaries + [float("inf")]
    for index,bound in enumerate(boundaries):
        if(bound<=data<boundaries[index+1]):
            if ((bound!=float('-inf')) and (boundaries[index+1]!=float('inf'))):
                linear = (data-bound)/(boundaries[index+1]-bound)
                return index + linear
            elif (bound==float('-inf')):
                return 1-(math.tanh(1-(boundaries[index+1]-data))/math.tanh(boundaries[index+1]-bound))
            else:
                return math.tanh(data-bound)/math.tanh(boundaries[index+1]-bound)

# In[23]:

metrics = {
    'number_adds':0,
    'number_deletes':0,
    'number_contributions':0,
    'lines_of_code_percentage':[],
    'list_of_commits_percentage':[],
    'number_of_files_percentage':[],
    'number_private_repos':0,
    'number_public_repos':0,
    'impact_stats':[],
    'impact_repos':[],
    'total_contributors':0,
    'bc':[],
    'total_reviews':0,
    'total_forks':0,
    'total_stars':0,
    'total_pulls':0,
}
final_metrics = {

     ## Potential Impact

        # Future growth

        # Java expertise
    'add_delete':0,
    'number_contributions':0,
    'avg_reviews':0,

        # Commitment
            # Code ownership
    'avg_lines_of_code_percentage':0,
    'avg_list_of_commits_percentage':0,
    'avg_number_of_files_percentage':0,
            # Number of projects
    'number_repos':0,

    ## Team Impact

        # Inspiration coefficient
    'impact_stats':0,
    
        # Team value
    'avg_contributors':0,

    ## World Impact

        # Java ecosystem importance
    'bc':0,

        # Repository impact
    'avg_forks':0,
    'avg_stars':0,
    'avg_pulls':0,
}
def download_repo(raw_repo, name):
        repo = raw_repo.parent
        if(repo == None):
            repo = raw_repo
        if(os.path.isdir(f"cache/{repo.name}")):
            print(f"Data for {repo.name} already cached")
        else:
            os.system(f"git clone {repo.clone_url} cache/{repo.name}")

def train_ml_prediction(timeseries,arima_order, steps=26):
    model = SARIMAX(timeseries, order=arima_order)
    model_fit = model.fit()
    return model_fit.forecast(steps)

# In[26]:


def get_user_repo_percentages(repo_name, user_name, git_name):
    temp_file = open("temp.txt", "w")
    subprocess.call(["git", "fame", "--format=csv", f"cache/{repo_name}"], stdout=temp_file)
    with open("temp.txt", "r") as file:
        output = file.read().lower()
    #print(output)
    split = output.split("\n")
    iterable = []
    for user in split:
        if (git_name == None):
            git_name = 'konichiwa'
        if((git_name.lower()) in user or (user_name.lower() in user)):
            split_pct = user.split(",")
            #print(split_pct)
            #Author,loc,coms,fils,%loc,%coms,%fils
            '''loc_pct = split_pct[4]
            coms_pct = split_pct[5]
            fils_pct = split_pct[6]'''
            iterable.append(list(map(lambda x: float(x), split_pct[4:])))
    if(len(iterable) == 0):
        print("User didn't commit to the repos")
        return None, None, None
    else:
        return np.sum(iterable, 0)


# In[27]:


def code_percentages(name):
    user = g.get_user(name)
    user_name = user.name
    print(f"Finding the average contribution percentage of {name} a.k.a. {user_name}")
    repos = get_repos(user)
    loc_l, coms_l, fils_l = [],[],[]
    for repo in repos:
        download_repo(repo,name)
        #Get info on all java files
        loc_pct, coms_pct, fils_pct = get_user_repo_percentages(repo.name, name, user_name)
        if(loc_pct == None):
            continue
        loc_l.append(loc_pct)
        coms_l.append(coms_pct)
        fils_l.append(fils_pct)
    print(loc_l, coms_l, fils_l)
    l, c, f = np.mean(loc_l), np.mean(coms_l), np.mean(fils_l)
    return (l,c,f)


# In[28]:


#ONLY LOOKS AT REPOS THAT HAVE BEEN ALIVE FOR MORE THAN 10 hours
def compute_impact_stat(name, user, repo, discard_person=True, threshold=0.1):
    #Gets the time when the user first committed to the repo, creation time
    commits = repo.get_commits(author=user)
    print()
    try:
        if (commits==None):
            print("Commits is None")
            return None
        elif((commits.totalCount==0)):
            print("The list of commits has 0 length")
            return None
    except GithubException as e:
        print("Github exception")
        return None

    print(f"Commit list {len(list(commits))}")
    first_commit_user = commits[-1].raw_data["commit"]["author"]["date"]
    first_commit_time = time.strptime(first_commit_user, '%Y-%m-%dT%H:%M:%SZ')
    entry_user_dt = datetime.fromtimestamp(mktime(first_commit_time))
    creation_time = repo.created_at
    updated_time = repo.updated_at
    #Check that the person didn't join the project too early
    before_delta = (entry_user_dt - creation_time).total_seconds()
    after_delta = (updated_time - entry_user_dt).total_seconds()
    total_time = (updated_time - creation_time).total_seconds()
    #Makes sure repo has been alive for more than 10 hours
    if(total_time < 36000):
        print("Repo is less than 10 hours old so we won't analyze it")
        return None
    proportion = before_delta/(total_time)
    #get the commit statistics
    stat_contrib = repo.get_stats_contributors()
    commits_exist = stat_contrib != None
    if((proportion > threshold) and commits_exist):
        before, after = 0,0
        for stat in stat_contrib:
            for week in stat.weeks:
                if(week.w > entry_user_dt):
                    if(discard_person):
                        if(stat.author != name):
                            after += week.c
                    else:
                        after += week.c
                else:
                    before += week.c
        if(after == 0):
            print('No commits after the person joined')
            return None
        return ((after/after_delta)/(before/before_delta), repo.name)
    else:
        if(commits_exist):
            print('The person joined too early but commits exist')
        else:
            print("No commits exist (and the person may have joined too early)")
        return None


# In[29]:


#Computes the metric for all repos that a person contributes to
def metric_for_all_repos(name, discard_person=True):
    user = g.get_user(name)
    user_name = user.name
    user_repos = user.get_repos(type='public')
    private_repos = user.owned_private_repos
    if (private_repos!=None):
        metrics['number_private_repos'] = private_repos
    contributions = user.contributions
    if (contributions!=None):
        metrics['number_contributions'] = contributions
#     metrics['bc'] = get_bc(user)
    repos_count = 0

    timeseries = {}

    for raw_repo in user_repos:
        
        c = raw_repo.get_commits()
        try:
            if((c == None) or c.totalCount < 20):
                continue
        except GithubException as e:
            print("GIT EXCEPTION GOING TO NEXT")
            continue
        print(f"Reviewing repo: {raw_repo.name}")
        # Analyse the repo itself
        repos_count += 1
        # Standard metrics
        pulls = raw_repo.get_pulls()
        metrics['total_pulls'] += pulls.totalCount
        reviews = raw_repo.get_pulls_review_comments()
        metrics['total_reviews'] += reviews.totalCount
        metrics['total_stars'] += raw_repo.get_stargazers().totalCount
        metrics['total_forks'] += raw_repo.get_forks().totalCount
        
        # Looping over stats_contributors for the number of contributors
        stat_contrib_original = raw_repo.get_stats_contributors()
        authors = set()
        if (stat_contrib_original == None):
            pass
        else:
            for stat in (stat_contrib_original):
                authors.add(stat.author)
            metrics['total_contributors'] = len(authors)
        
        repo = raw_repo.parent
        if(repo == None):
            repo = raw_repo
        
        # Looping over stats_contributors
        stat_contrib = repo.get_stats_contributors()
        if (stat_contrib == None):
            pass
        else:
            for stat in (stat_contrib):
                if(stat.author.name == user_name):
                    for week in stat.weeks:
                        if(week.w in timeseries):
                            timeseries[week.w] = timeseries[week.w] + week.c
                        else:
                            timeseries[week.w] = week.c
                        metrics['number_adds'] += week.a
                        metrics['number_deletes'] += week.d

       	#TO DO: ADD BACK
        # Code ownership
        '''download_repo(repo,name)
        # Get info on all java files
        loc_pct, coms_pct, fils_pct = get_user_repo_percentages(repo.name, name, user_name)
        if(loc_pct != None):
            metrics['lines_of_code_percentage'].append(loc_pct)
            metrics['list_of_commits_percentage'].append(coms_pct)
            metrics['number_of_files_percentage'].append(fils_pct)
       	'''
        # Analyse the parent repo

        # Impact statistics

        #clear_output()
        metric = compute_impact_stat(name, user, repo)
        if(metric == None):
            print('Impact calc failed')
        else:
            print(f"Added impact-metric: {metric}")
            metrics['impact_stats'].append(metric[0])
            metrics['impact_repos'].append(metric[1])
        print("")
        print("")
        print("")
            
    metrics['number_public_repos'] = repos_count
    #DO TIMESERIES STUFF
#    print("TIMESERIES")
#    raw_series = pd.Series(timeseries).resample("7D").mean()
#    preds = train_ml_prediction(raw_series, (1,1,1), steps=26)

#    #compare last raw vals
#    last_raw = raw_series[-1]
#    last_pred = preds[-1]
#    dy = (last_pred - last_raw)/last_pred
#    metrics["future_growth"] = dy


# In[30]:


def compute_final_metrics(metrics):

     ## Potential Impact

        # Future growth
#    final_metrics['future_growth'] = metrics['future_growth']
        # Java expertise
    final_metrics['add_delete'] = converter(metrics['number_deletes']/metrics['number_adds'], [0.5, 1, 3, 4])

    final_metrics['number_contributions'] = converter(metrics['number_contributions']/metrics['number_public_repos'], [50, 200, 1000, 2000])
    final_metrics['avg_reviews'] = metrics['total_reviews']/metrics['number_public_repos']


        # Commitment
    final_metrics['avg_lines_of_code_percentage'] = np.mean(metrics['lines_of_code_percentage'])
    final_metrics['avg_list_of_commits_percentage'] = np.mean(metrics['list_of_commits_percentage'])
    final_metrics['avg_number_of_files_percentage'] = np.mean(metrics['number_of_files_percentage'])
    final_metrics['number_repos'] = metrics[ 'number_private_repos'] + metrics['number_public_repos']
    final_metrics["number_public_repos"] = converter(metrics["number_public_repos"], [3, 7, 15, 20])
    ## Team Impact

        # Inspiration coefficient
    final_metrics['impact_stats'] = converter(np.mean(metrics['impact_stats']),[0.07, 0.2, 0.65, 0.8])

        # Team value
    final_metrics['avg_contributors'] = converter(metrics['total_contributors']/metrics['number_public_repos'], [50, 200, 100, 200])


    ## World Impact

        # Java ecosystem importance
    final_metrics['bc'] = np.mean(metrics['bc'])

        # Repository impact
    final_metrics['avg_stars'] = converter(metrics['total_stars']/metrics['number_public_repos'],[0.5, 1, 2, 15])
    final_metrics['avg_forks'] = converter(metrics['total_forks']/metrics['number_public_repos'],[1, 5, 25, 50])
    final_metrics['avg_pulls'] = converter(metrics['total_pulls']/metrics['number_public_repos'], [0.5, 2, 7, 20])

    ret_dict = {}
#    ret_dict['future_growth'] = final_metrics['future_growth']
#    ret_dict['future_growth'] = 3
    ret_dict['java_expertise'] = final_metrics["add_delete"]*2
    ret_dict['commitment'] = final_metrics["number_public_repos"]*2
    ret_dict['inspiration_coefficient'] = final_metrics["impact_stats"]
    if (ret_dict['inspiration_coefficient'] ==None):
        ret_dict['inspiration_coefficient'] = 0
    else:
        ret_dict['inspiration_coefficient'] = ret_dict['inspiration_coefficient']*2
    ret_dict['impact_repos'] = metrics['impact_repos']*2
    ret_dict['impact_rates'] = np.array(ret_dict['inspiration_coefficient'])/0.6
    ret_dict['team_value'] = final_metrics["avg_contributors"]*2
    #ret_dict['java_ecosystem_importance'] =
#    ret_dict['repository_impact'] = float(np.mean([final_metrics["avg_forks"], final_metrics["avg_stars"]]))
    ret_dict['repository_impact'] = float(final_metrics["avg_stars"])*2

    ret_dict['potential_impact'] = int(float(np.mean([ret_dict["java_expertise"], ret_dict["commitment"]]))*20)
    ret_dict['team_impact'] = int(float(np.mean([ret_dict["inspiration_coefficient"], ret_dict["team_value"]]))*20)
    ret_dict['world_impact'] = int(ret_dict["repository_impact"]*20)
    
#    ret_dict['future_growth'] = round(ret_dict['future_growth'], 1)
    ret_dict['java_expertise'] = round(ret_dict['java_expertise'], 1)
    ret_dict['commitment'] = round(ret_dict['commitment'], 1)
    ret_dict['inspiration_coefficient'] = round(ret_dict['inspiration_coefficient'], 1)
    ret_dict['team_value'] = round(ret_dict['team_value'], 1)
    ret_dict['repository_impact'] = round(ret_dict['repository_impact'], 1)

    print(metrics)
    
    return ret_dict

def data_dict(name):
    print("NAME GIVEN")
    print(name)
    metric_for_all_repos(name)
    return compute_final_metrics(metrics)

if __name__ == "__main__":
    print(data_dict("ohnoah"))
