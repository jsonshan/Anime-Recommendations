import numpy as np
import pandas as pd

# Loading Anime Dataset
anime_data = pd.read_csv('data/anime_data.csv')

# Loading Cosine Similarity Matrix
cosine_sim = np.load('cosine_sim.npy')


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

def recommend_anime(titles, cosine_sim, anime_data, num_recommendations):

    mean_sim_scores = get_average_similarity_scores(titles, cosine_sim, anime_data)
    if mean_sim_scores is None:
        return [], []

    top_indices = mean_sim_scores.argsort()[-num_recommendations-len(titles):][::-1]
    
    filtered_indices = [i for i in top_indices if anime_data.iloc[i]['show_titles'] not in titles]

    final_indices = filtered_indices[:num_recommendations]

    recommended_titles = anime_data.iloc[final_indices]['show_titles'].tolist()
    return recommended_titles, top_indices

def get_image_url(recommended_indices):
    recommended_imgs = anime_data['image_url'].iloc[recommended_indices]
    return recommended_imgs

# Testing
titles = ['Magi']
num_recommendations = 6
recommended_titles, recommended_indices = recommend_anime(titles, cosine_sim, anime_data, num_recommendations)

for i in range(len(recommended_titles)):
    print(recommended_titles[i])

# print(get_image_url(recommended_indices))