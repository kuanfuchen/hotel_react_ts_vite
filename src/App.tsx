// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.tsx';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App