import React, { useState }from 'react'
import "../styles/Card.css"
function Card({title, rating, imgSource}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div 
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered
                ?
                    (
                        <div className="hovered-card">
                            <p className="anime-title">{title}</p>
                            <p>{rating} / 5.0</p>
                        </div>
                    )
                :
                    (
                        <div>
                            <img className="item" src={imgSource}/>
                            <p>{title}</p>
                        </div>
                    )
            }
            {/* <img className="item" src={imgSource}/>
            <p>{title}</p> */}
        </div>
  )
}

export default Card