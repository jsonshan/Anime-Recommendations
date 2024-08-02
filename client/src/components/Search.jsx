import React, { useState, useEffect, useRef } from 'react'
import Papa from 'papaparse'
import "../styles/Search.css"
import Card from './Card'
import Cross from "../assets/cross.svg"
import CrunchyMascot from "../assets/crunchyroll-mascot.png"


function Search() {

  const [animes, setAnimes] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // parse csv file
  useEffect(() => {
    const csvFilePath = "/anime_data.csv";
    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      complete: (results) => {
        // console.log("Completed parsing");
        setAnimes(results.data);
        // searchShows("demon slayer");
      },
      error: (error) => {
        console.error("Error parsing CSV", error);
      },
    });
  });

  const searchShows = (title) => {
    const filteredShows = animes.filter(show =>
      show.show_titles && show.show_titles.toLowerCase().includes(title.toLowerCase())
    );
    setSearchResult(filteredShows);
  }


  const containerRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [hasResult, setHasResult] = useState(false);
  const handleFocus = () => {
    console.log("Running");
    if (containerRef.current) {
      containerRef.current.style.setProperty('--after-background-color', '#F47521');
    }
  };
  const handleBlur = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--after-background-color', '#59595B'); // Change to black when blurred
    }
  };





  // Check for Typing
  const [isTypingStopped, setIsTypingStopped] = useState(false);
  const typingDelay = 400;
  let typingTimer;
  const handleTypingStopped = () => {
    setIsTypingStopped(true);
    searchShows(inputText);
  };
  useEffect(() => {
    if (inputText) {
      // User is typing, reset the typing stopped state
      setIsTypingStopped(false);

      // Clear previous timer
      clearTimeout(typingTimer);

      // Set a new timer
      typingTimer = setTimeout(handleTypingStopped, typingDelay);

      // Cleanup the timer on component unmount or inputValue change
      return () => clearTimeout(typingTimer);
    }
  }, [inputText]);

  const handleInputText = (event) => {
    // event.target.value == '' ? setHasResult(false) ? setHasResult(true);
    if (event.target.value != 'no-result'){ // CHECK WHETHER THERE ARE RESULTS OR NOT
      setHasResult(true);
    } else {
      setHasResult(false);
    }
    setInputText(event.target.value);
  }


  function adjustScore(number) {
    const result = number / 2;
    const roundedResult = Math.round(result * 10) / 10;
    return roundedResult;
  }


  const [likedList, setLikedList] = useState([])
  const handleTitleFromChild = (title) => {
    if (likedList.includes(title)){
      return
    }
    setLikedList(prev => [...prev, title]);
    // console.log(likedList);
  }
  // Log likedList whenever it changes
  useEffect(() => {
    console.log("Liked List:", likedList);
  }, [likedList]);

// Assuming `animes` is a 2D array
// const flattenAnimes = animes.flat();
// console.log('Flattened Animes:', flattenAnimes); // Check the data structure
// flattenAnimes.forEach(anime => {
//   if (!anime.show_titles || typeof anime.show_titles !== 'string') {
//     console.error('Invalid show_titles value:', anime.show_titles);
//   }
// });

// const findShowByTitle = (title) => {
//   const normalizedTitle = title.trim().toLowerCase();
  
//   const show = flattenAnimes.find((anime) => {
//     // Check if show_titles is a string and not empty
//     if (!anime.show_titles || typeof anime.show_titles !== 'string') {
//       console.error('Invalid show_titles value:', anime.show_titles);
//       return false;
//     }

//     // Split titles by ';;' and normalize for comparison
//     const titles = anime.show_titles.split(';;').map(t => t.trim().toLowerCase());
//     return titles.includes(normalizedTitle);
//   });

//   return show || null;
// };

const findShowByTitle = (title) => {
  // Finds the anime with the exact match for show_titles
  return animes.find(anime => anime.show_titles === title);
};

  return (
    <>
        <div className="container">
          <div className="search-container"
          ref={containerRef}
          >
            <input className="search-bar" type="text" placeholder="Search..."
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputText}
            onChange={handleInputText}
            ></input>
            <button className={inputText == "" ? 'hide' : ''}>
              <img className="cross invert" src={Cross} onClick={() => setInputText('')}/>
            </button>
          </div>
        </div>
        {likedList.length > 0 
                      ?
                        (
                          <div className="black-wrapper">
                            <div className="result-content-wrapper">
                              <h4>Favorited</h4>  

                              <div className="anime-container">
                                {
                                  likedList.map((title, index) => {
                                    const show = findShowByTitle(title);
                                    return <Card key={index} onTitleSelect={handleTitleFromChild} title={show.show_titles} imgSource={show.image_url} genre={show.genre} rating={adjustScore(show.score)} description={show.synopsis}/>
                                  })
                                }

                              </div>
                            </div>
                          </div>
                        )
                      :
                        (<></>)
        }
        {inputText && isTypingStopped != "" 
          ?
            (searchResult.length > 0
              ? 
                <div className="black-wrapper">
                  <div className="result-content-wrapper">
                    <h4>Top Results</h4>
                    <div className="anime-container">
                      {/* <Card title="Demon Slayer: Kimetsu no Yaiba" rating="5.0" imgSource="https://m.media-amazon.com/images/I/81FqK8mQYiL._SL1500_.jpg"/>
                      <Card title="Jujutsu Kaisen" rating="4.7" imgSource="https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.6/196392/jjk_visual.jpg"/> */}
                      {searchResult.map((show, index) => (
                        <Card key={index} onTitleSelect={handleTitleFromChild} title={show.show_titles} imgSource={show.image_url} genre={show.genre} rating={adjustScore(show.score)} description={show.synopsis} liked={true}/>
                      ))}
                    </div>
                  </div>
                </div>
              :
                <div className="content-wrapper">
                  <div className="empty-search-results">
                    <img className="mascot" src={CrunchyMascot}/>
                    <p>Sorry, no results were found. Check your spelling or try searching for something else.</p>
                  </div>

                </div>
            )
          : 
            <div className="empty"></div>
        }
    </>
    
  )
}

export default Search