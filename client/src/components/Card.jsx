import React, { useState }from 'react'
import "../styles/Card.css"
import Plus from "../assets/plus.png"
function Card({title, rating, imgSource, genre, description, onTitleSelect, liked}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isAddHovered, setIsAddHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(prevState => true);
    };

    const handleMouseLeave = () => {
        setIsHovered(prevState => false);
    };

    const likedListHandler = (title) => {
        onTitleSelect(title)
    }

    const substringBeforeDelimiter = (str) => {
        const delimiter = ';;';
        const index = str.indexOf(delimiter);
        return index !== -1 ? str.substring(0, index) : str;
      }
    return (
        // ["Jujutsu Kaisen"]
        <div 
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered
                ?
                    (
                        <div className="hovered-card">
                            <p className="anime-title">{substringBeforeDelimiter(title)}</p>
                            <div className="card-content">
                                <p className="white">{rating} / 5.0</p>
                                <p> {genre}</p>
                                <p className="anime-description"> {description}</p>
                            </div>
                            {liked
                            ? 
                            (                            
                                <div className="card-buttons">
                                
                                    <img 
                                    src={Plus}
                                    onMouseEnter={() => setIsAddHovered(true)}
                                    onMouseLeave={() => setIsAddHovered(false)}
                                    onClick={() => likedListHandler(title)}
                                    />
                                    {isAddHovered
                                        ?
                                            (
                                                <div className="alert-box">
                                                    Add to List
                                                </div>
                                            )      
                                        : 
                                            (
                                                <div>
                                                    
                                                </div>
                                            )
                                    }
                                </div>)
                            :
                            (<></>)
                            
                            }
                            {/* <div className="card-buttons">
                                
                                <img 
                                src={Plus}
                                onMouseEnter={() => setIsAddHovered(true)}
                                onMouseLeave={() => setIsAddHovered(false)}
                                onClick={() => likedListHandler(title)}
                                />
                                {isAddHovered
                                    ?
                                        (
                                            <div className="alert-box">
                                                Add to List
                                            </div>
                                        )      
                                    : 
                                        (
                                            <div>
                                                
                                            </div>
                                        )
                                }
                            </div> */}
                        </div>
                    )
                :
                    (
                        <div>
                            <img className="item" src={imgSource}/>
                            <p>{substringBeforeDelimiter(title)}</p>
                        </div>
                    )
            }
            {/* <img className="item" src={imgSource}/>
            <p>{title}</p> */}
        </div>
  )
}

export default Card