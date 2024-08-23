import React, { useState } from 'react';
import "../styles/Test.css"
function AnimeRecommendation({ onCodesUpdate , likedList }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);


  const recommendAnime = async () => {
    const recommendAnimeUrl = 'https://anime-recommendations-ten.vercel.app/recommend-anime';
    const recommendAnimeData = {
      // titles: ['Darling in the FranXX', 'One Piece', 'Magi'],
      titles: likedList,
      num_recommendations: 12,
    };

    try {
      const response = await fetch(recommendAnimeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recommendAnimeData),
      });

      setStatus(response.status);

      if (response.ok) {
        const responseData = await response.json();
        onCodesUpdate(responseData.codes);  // Pass the codes to the parent component
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(`Error: ${errorMessage}`);
        onCodesUpdate([]);  // Clear codes in the parent component if there's an error
      }
    } catch (err) {
      setError(`Network Error: ${err.message}`);
      setStatus(null);
      onCodesUpdate([]);  // Clear codes in case of network error
    }
  };

  return (
    <div className='test'>
      {/* <h2>Anime Recommendations</h2> */}
      <button onClick={recommendAnime}>Get Recommendations</button>

      {/* {status && <p>Status code: {status}</p>} */}

      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
}

export default AnimeRecommendation;
