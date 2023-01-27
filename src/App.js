import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import { useState } from 'react'

import './App.css'
import MemesCollection from './views/MemesCollection'
import MemeView from './views/MemeView'

export default function App() {
const [currentPage,setCurrentPage] = useState()
    return (
        <>
        <Router>
            <Routes>
                    <Route path="/" element={ <LandingPage/>} /> 
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path="/home" element={< HomePage/>} />
                    <Route path="/memes" element={< MemesCollection/> } />
                    <Route path="/memeview" element={<MemeView/>}/>
            </Routes>
        </Router>
         <Footer />
         </>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Meme-app</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}