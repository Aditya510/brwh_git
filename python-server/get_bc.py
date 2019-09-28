#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
from github import Github
import time
import datetime
from datetime import datetime
from time import mktime
from IPython.display import clear_output, display
import subprocess
from io import StringIO
import pandas as pd
import gitfame
import os
import sys
from subprocess import Popen, PIPE
import networkx as nx
from operator import attrgetter, itemgetter

# In[5]:


ACCESS_TOKEN = "52748b1610808f549e473ed2b962c1eb6cf7b4d4"
g = Github(ACCESS_TOKEN)
client = Github(ACCESS_TOKEN, per_page=100)


# In[2]:


# Function for betweenness centrality

def add_followers(g):

    client = Github(ACCESS_TOKEN, per_page=100)
    for i, sg in enumerate(list(g.nodes)):

        if sg[-1:]=='T':
            sg = sg[:-1]
            user = client.get_user(sg)
            followers_raw = user.get_followers()
            try:
                followers = [s for s in followers_raw[:10]]
            except:
                followers = [s for s in followers_raw]
            for follower in followers:
                if follower.login + 'T' not in g:
                    if follower.login + 'F' not in g:
                        g.add_node(follower.login + 'T')
                        g.add_edge(sg + 'T', follower.login + 'T')

            nx.relabel_nodes(g, {sg + 'T': sg + 'F'})


# In[1]:


def get_bc(name, num_iterations=3):
    g = Github(ACCESS_TOKEN)
    user = g.get_user(name)
    g = nx.DiGraph()
    g.add_node(user.login + 'T')
    for i in range(num_iterations):
        add_followers(g)
    bc = sorted(nx.betweenness_centrality(g).items(),
            key=itemgetter(1), reverse=True)
    # need to change
    return bc[:10]


# In[ ]:


# user = g.get_user(name)
# get_bc(user)
if __name__ == "__main__":
    print(get_bc('ti250'), 1)
