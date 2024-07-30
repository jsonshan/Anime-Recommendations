import React, { useState, useEffect, useRef } from 'react'
import "../styles/Search.css"
import Card from './Card'
import Cross from "../assets/cross.svg"
import CrunchyMascot from "../assets/crunchyroll-mascot.png"

function Search() {
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

  // Typing delay time in milliseconds
  const typingDelay = 400; // 1 second

  // Timer for tracking typing
  let typingTimer;

  // Function to be called when typing stops
  const handleTypingStopped = () => {
    setIsTypingStopped(true);
    console.log('User stopped typing!');
  };

  // Effect hook to handle the typing timer
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

  // useEffect(() => {
  //   if (isTypingStopped)
  // }, [isTypingStopped])

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
        {inputText && isTypingStopped != "" 
          ?
            (hasResult
              ? 
                <div className="black-wrapper">
                  <div className="result-content-wrapper">
                    <h4>Top Results:</h4>
                    <div className="anime-container">
                      <Card title="Demon Slayer: Kimetsu no Yaiba" rating="5.0" imgSource="https://m.media-amazon.com/images/I/81FqK8mQYiL._SL1500_.jpg"/>
                      <Card title="Jujutsu Kaisen" rating="4.7" imgSource="https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.6/196392/jjk_visual.jpg"/>
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