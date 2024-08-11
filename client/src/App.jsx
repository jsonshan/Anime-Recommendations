import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import FrontCard from './components/FrontCard'
import Search from './components/Search'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'


function Home() {
  return (
    <>
      <Search/>
      <FrontCard/>
      <div className="padding-adjust"></div>
    </>
  );
}

function SearchPage() {
  return (
    <>
      <Navbar/>
      <Search/>
      <div className="padding-adjust"></div>

    </>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      {/* <FrontCard/>
      <Search/> */}
      </BrowserRouter>
      <Footer/>

    </>
  )
}

export default App
