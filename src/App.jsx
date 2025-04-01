import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import RegisterExam from './pages/RegisterExam.jsx';
import Login from './pages/Login.jsx';
import ExamSchedule from './pages/ExamSchedule.jsx';
import ExamsList from './pages/AllExams.jsx';
import BackgroundVideo from './components/BackgroundVideo.jsx';
import './App.css'
import './index.css'
function App() {
  

  return (
    <>
    <BackgroundVideo />
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register-exam" element={<RegisterExam/>}/>
      <Route path="exam-schedule" element={<ExamSchedule/>}/>
      <Route path="all-exams" element={<ExamsList/>}/>
    </Routes>
    <Footer />
  </Router>
  </>
  )
}

export default App