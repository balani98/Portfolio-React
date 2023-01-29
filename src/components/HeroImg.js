import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from '../assets/intro-img.jpg'
import { Link } from "react-router-dom"
const HeroImg = () => {
  return (
    <div className = "hero">
        <div className = "mask">
            <img className = "intro-img" 
            src = {IntroImg}/>
        </div> 
        <div className = "content">
            <p>HI I 'M A FULLSTACK DEVELOPER . </p>
            <h1>Javascript Developer.</h1>
            <div className = 'button-holder'>
                <Link to="/project" 
                    className = "btn">PROJECTS</Link>
                 <Link to="contact" 
                    className = "btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>

  )
}

export default HeroImg