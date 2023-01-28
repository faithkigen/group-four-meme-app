import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-">login / register page</h1>
            <p className="main-para text-center">join us now </p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
     backgroundImage: url('https://cdn.pixabay.com/photo/2018/05/09/21/47/cat-3386220__340.jpg'),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}
    