import numpy as np
import pandas as pd

def get_average_similarity_scores(titles, cosine_sim, anime_data):
    indices = []
    for title in titles:
        matching_indices = anime_data[anime_data['show_titles'].str.contains(title, case=False, regex=True)].index
        if not matching_indices.empty:
            indices.extend(matching_indices)
        else:
            print(f"Title '{title}' not found in dataset.")
            return None
    
    mean_sim_scores = np.mean(cosine_sim[indices], axis=0)
    return mean_sim_scores

def recommend_anime(titles, cosine_sim, anime_data, num_recommendations=12):

    mean_sim_scores = get_average_similarity_scores(titles, cosine_sim, anime_data)
    if mean_sim_scores is None:
        return [], []

    top_indices = mean_sim_scores.argsort()[-num_recommendations-len(titles):][::-1]
    
    recommended_titles = anime_data.iloc[top_indices]['show_titles'].tolist()
    return recommended_titles, top_indices
