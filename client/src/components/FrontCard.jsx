import React, {useState, useEffect} from 'react'
import "../styles/FrontCard.css"
function FrontCard() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageSource, setImageSource] = useState("")
    const [logo, setLogo] = useState('')
    const [genre, setGenre] = useState('')
    const [blurb, setBlurb] = useState("")
    useEffect(() => {
        handleSelected(0);
    }, [])
    
    const handleSelected = (page) => {
        if (page == 1){
            setSelectedIndex(1);
            setLogo("https://cdn.discordapp.com/avatars/340683452242329611/2a6d9ca80789b62379fde4e7e4b22f3f.webp?size=128");
            setImageSource("https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/f558d5e5-9d61-4caa-94ff-c9b742f7c288.png");
            setGenre('Web Developer / Full Stack Engineer');
            setBlurb("The distant future, 5012. The sudden aerial invasion of Earth by Aliens and their creations Machine Lifeforms led mankind to the brink of extinction. The surviving number of humans who took refuge on the moon to organize a counterattack using android soldiers to recapture Earth. However, the war reaches a stalemate as the Machine Lifeforms continue to multiply infinitely. In turn, humanity deploys a new unit of android soldiers as an ultimate weapon: YoRHa. Newly dispatched to Earth 2B joins 9S, the analyst currently stationed there, where amid their mission, they encounter a myriad of mysterious phenomena... This is the story of these lifeless androids and their endless fight for the sake of mankind. To series");
        }
        if (page == 0){
            setSelectedIndex(0);
            setLogo("https://cdn.discordapp.com/avatars/231534170969473025/748a7eae73eb86d86c709ca50c498f7c.webp?size=128");
            setImageSource("https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=1920/cr/landscape_large/b9dc12ce-5c25-4736-952c-ba08eb316ae0.png");
            setGenre("Artificial Intelligence / Machine Learning / Data Scientist");
            setBlurb("Reach the top, and everything will be yours. At the top of the tower exists everything in this world, and all of it can be yours.  You can become a god. This is the story of the beginning and the end of Rachel, the girl who climbed the tower so she could see the stars, and Bam, the boy who needed nothing but her.");
        }
    }
    return (
    <>
        <div className="front-card">
            <div className="padding-top"></div>
            <img className="card-image" src={imageSource}/>
            <div className="text-element">
                <div className="info-text">
                    <img className="user-logo" src={logo}/>
                    {/* <p className="genre">14 Sub | Dub Action, Drama, Sci-Fi</p> */}
                    <p className="genre">{genre}</p>
                    <p className="blurb">{blurb}</p>
                    <button className="btn">BUTTON</button>
                    <div className="navigation">
                        <div className={selectedIndex == 0 ? "nav-cards card1 picked" : "nav-cards card1"} onClick={() => handleSelected(0)}></div>
                        <div className={selectedIndex == 1 ? "nav-cards card2 picked" : "nav-cards card2"} onClick={() => handleSelected(1)}></div>
                    </div>
                </div>
            </div>
            {/* <div className="padding-adjust">

            </div> */}
        </div>
    </>
  )
}

export default FrontCard