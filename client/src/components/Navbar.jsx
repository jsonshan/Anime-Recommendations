import React from 'react'
import "../styles/Navbar.css"

import Search from "../assets/search2.svg"
import Bookmark from "../assets/bookmark.svg"
import User from "../assets/user.svg"

function Navbar() {
	
  return (
		<div className="navbar">
			{/* <div className="left-side"> */}
			<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Crunchyroll.svg"></img>
			<div className="navbar_menu">
				<h3 className="nav_btn">Browse</h3>
				<h3 className="nav_btn">Games</h3>
				<h3 className="nav_btn">Store</h3>
				<h3 className="nav_btn">News</h3>

			</div>
			<h3>Premium</h3>
			<div className="icon-wrapper">
				<img className="icon invert search" src={Search}></img>
			</div>
			<div className="icon-wrapper">
				<img className="icon invert bookmark" src={Bookmark}></img>
			</div>
			<div className="icon-wrapper">
				<img className="icon invert user" src={User}></img>
			</div>

			{/* </div> */}
		</div>
	)
}

export default Navbar