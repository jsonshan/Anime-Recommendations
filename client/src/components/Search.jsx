import React, { useState, useRef } from 'react'
import "../styles/Search.css"
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
  const handleInputText = (event) => {
    // event.target.value == '' ? setHasResult(false) ? setHasResult(true);
    if (event.target.value != 'no-result'){ // CHECK WHETHER THERE ARE RESULTS OR NOT
      setHasResult(true);
    } else {
      setHasResult(false);
    }
    setInputText(event.target.value);
  }

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
        {inputText != "" 
          ?
            (hasResult
              ? 
                <div className="black-wrapper">
                  <div className="result-content-wrapper">
                    <h4>Top Results:</h4>
                    <div>
                      <img src="https://dummyimage.com/100x150/dadada/fff"/>

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