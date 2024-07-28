import React, {useRef} from 'react'
import "../styles/Search.css"
import Cross from "../assets/cross.svg"

function Search() {
  const containerRef = useRef(null);
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

  return (
    <>
        <div className="container">
          <div className="search-container"
          ref={containerRef}
          >
            <input className="search-bar" type="text" placeholder="Search..."
            onFocus={handleFocus}
            onBlur={handleBlur}
            ></input>
            <button>
              <img className="cross invert" src={Cross}/>

            </button>
          </div>
        </div>
        <div className="results-tab">

        </div>
    </>
    
  )
}

export default Search