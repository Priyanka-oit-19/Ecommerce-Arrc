import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
