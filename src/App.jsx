import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Red from './red.jsx'
import Blue from './blue.jsx'
import Home from './home.jsx'

function App() {
  return (

    <div id="container">
    <h1></h1>
    <div id="navbar"> 
     <Link to ="/blue" > BLUE</Link>
    <Link to ="/red" > RED</Link>
    <Link to = "/home"> HOME</Link>
     </div>
    <div id="main-section">
      <Routes>
        <Route path = "/blue" element = {<Blue/>} />
        <Route path = "/red" element = {<Red />} /> 
        <Route path = "/home" element = {<Home />}/>
         </Routes> 
  </div>
  </div>

  )
};

export default App
