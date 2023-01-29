import React from 'react'
import webD from '../assets/webD.jpeg'
import DE from '../assets/DE.jpg'
import { Link } from "react-router-dom"
import './AboutContentStyles.css'
const AboutContent = () => {
  return (
    <div className = 'about'>
        <div className = 'left'>
            <h1>Who Am I?</h1>
            <p>I am currently working as a Full Stack Developer.
                I do Web development , Cloud deployment and Data Engineering 
                for my clients 
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className = 'right'>
            <div className = 'img-container'>
                <div className= 'img-stack top'>
                    <img className = "img" src={webD}/>
                </div>
                <div className= 'img-stack bottom'>
                    <img className = "img" src={DE}/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AboutContent