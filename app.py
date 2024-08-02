from flask import Flask, request, jsonify
from anime import recommend_anime, anime_data, cosine_sim

app = Flask(__name__)

@app.route('/recommend-anime', methods=['POST'])
@app.route('/recommend', methods=['POST'])
@app.route('/recommend-anime', methods=['POST'])
def recommend():
    try:
        data = request.json
        print(f"Received data: {data}")  # Debugging statement to print received data
        titles = data.get('titles')
        print(f"Extracted titles: {titles}")  # Debugging statement to print extracted titles
        num_recommendations = data.get('num_recommendations', 8)

        if not titles:
            return jsonify({"error": "No titles provided"}), 400

        recommended_titles, recommended_scores, recommended_images, recommended_synopsis = recommend_anime(
            titles, cosine_sim, anime_data, num_recommendations
        )
        if not recommended_titles:
            return jsonify({"error": "No recommendations found"}), 404

        response = {
            "titles": recommended_titles,
            "scores": recommended_scores,
            "images": recommended_images,
            "synopsis": recommended_synopsis
        }
        return jsonify(response)
    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
