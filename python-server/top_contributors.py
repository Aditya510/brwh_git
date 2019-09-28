from github import Github

def get_top_contributors(repo, top_n=8, g=None):
    if g is None:
        g = Github("7bdb41cbea8ddc711d7d9bc883f5083e01ba1a1f")
    repo = g.get_repo(repo)
    print(repo.name)
    contributors = repo.get_stats_contributors()
    print(contributors)
    print(type(contributors))
    contributors_list = []
    for contributor in contributors:
        print(contributor.total, contributor.author.login)
        contributors_list.append((contributor.total, contributor.author.login))
    sorted_contributors = sorted(contributors_list, key=lambda x: x[0], reverse=True)
    print(sorted_contributors)
    return sorted_contributors[:top_n]


if __name__ == '__main__':
    repo_name = 'pytorch/pytorch'
    get_top_contributors(repo_name)
