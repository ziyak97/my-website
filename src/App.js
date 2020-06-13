import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/navbar/navbar.component'
import ToggleMode from './components/toggle-mode/toggle-mode.component'
import Header from './components/header/header.component'
import AboutMe from './components/about-me/about-me.component'


import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToggleMode />
        <Header />
        <AboutMe />
      </Router>
    </div>
  )
}

export default App
