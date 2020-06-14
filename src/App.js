import React from 'react'

import Navbar from './components/navbar/navbar.component'
import ToggleMode from './components/toggle-mode/toggle-mode.component'
import Header from './components/header/header.component'
import AboutMe from './components/about-me/about-me.component'
import Experirnce from './components/experience/experience.component'
import Work from './components/work/work.component'

import './App.css'


const App = () => {
  return (
    <div className="App">
        <Navbar />
        <ToggleMode />
        <Header />
        <AboutMe />
        <Experirnce />
        <Work />
    </div>
  )
}

export default App
