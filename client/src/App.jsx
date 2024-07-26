import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Search from './components/Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Search/>
    </>
  )
}

export default App
