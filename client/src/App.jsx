import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Search from './components/Search'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Search/>
      <Footer/>
    </>
  )
}

export default App
