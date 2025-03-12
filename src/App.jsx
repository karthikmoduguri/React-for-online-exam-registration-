import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import RegisterExam from './pages/RegisterExam.jsx';
import './App.css'
import './index.css'
function App() {
  

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register/>} />
      <Route path="register-exam" element={<RegisterExam/>}/>
    </Routes>
    <Footer />
  </Router>
  </>
  )
}

export default App
