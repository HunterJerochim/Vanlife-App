import React from "react";
import "./main.css";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
    const { pathname } = useLocation()
    const isAboutRoute = pathname === "/about";
    
    return (
        <div className="main-page-container">
            <div className="main-page-inner-container">
            <div className="nav-container">
                <Link className="nav-title" to="/">#VANLIFE</Link>
                <div className="nav-button-container">
                    <Link 
                        className={isAboutRoute ? "nav-button-true" : "nav-button"}
                        to="/about"
                    >
                        About
                    </Link>
                    <Link 
                        className="nav-button" 
                        to="/vans"
                    >
                        Vans
                    </Link>
                </div>
            </div>
            <div className="image-container">
                <img 
                    src="https://res.cloudinary.com/dav8yugzm/image/upload/v1716924933/Mountain_vanlife_mbfbg7.png"
                    alt="mountain image"
                    className="mountain-image"
                />
                <div className="image-overlay">
                    <div className="image-overlay-text-container">
                        <h1 className="image-overlay-title">You got the travel plans, we got the travel vans.</h1>
                        <h2 className="image-overlay-text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>
                    </div>
                    <button className="image-overlay-button">Find your van</button>
                </div>
            </div>
            <div className="footer-container">
                <h2 className="footer-text">Ⓒ 2022 #VANLIFE</h2>
            </div>
            </div>
        </div>
    )
}

export default Main;

