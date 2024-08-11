import React , {useState, useEffect, useRef }from 'react'
import Cross from "../assets/cross.svg"
function SearchBar() {
	const [inputText, setInputText] = useState("");

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
	const containerRef = useRef(null);
  const handleInputText = (event) => {
    // if (event.target.value != 'no-result'){ // CHECK WHETHER THERE ARE RESULTS OR NOT
    //   setHasResult(true);
    // } else {
    //   setHasResult(false);
    // }
    setInputText(event.target.value);
  }
	const typingDelay = 400;
	let typingTimer;
	const handleTypingStopped = () => {
		setIsTypingStopped(true);
		searchShows(inputText);
		scrollToSection(searchRef);
	};
	useEffect(() => {
		handleFocus();
		if (inputText) {
			setIsTypingStopped(false);
			clearTimeout(typingTimer);
			typingTimer = setTimeout(handleTypingStopped, typingDelay);
			return () => clearTimeout(typingTimer);
		}
	}, [inputText]);
  return (
		<div className="container">
			<div className="search-container"
			ref={containerRef}
			>
				<input autoFocus className="search-bar" type="text" placeholder="Search..."
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
  )
}

export default SearchBar