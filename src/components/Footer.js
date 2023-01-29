import './FooterStyles.css'
import React from 'react'
import {FaHome,FaMailBulk,FaPhone,FaFacebook,FaLinkedin,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-container">
            <div className = "left">
                <div className = "location">
                    <FaHome size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Brainlabs India</p>
                        <p>Bengaluru</p>
                    </div>
                </div>
                <div className = "phone">
                <h4>
                <FaPhone size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>
                  +91 9718844023
                </h4>
                </div>
                <div className = "email">
                    <h4>
                        <FaMailBulk size={20} style={{color:
                        "#fff",marginRight:"2rem"}}/>
                        deepanshubalani1998@gmail.com
                    </h4>
                </div>
            </div>
            <div className = "right">
                <h4>About the company</h4>
                <p>This is Deepanshu Balani , Software Engineer at Brainlabs , India </p>
                <div className = "social">
                <FaFacebook size={20} style={{color:
                        "#fff",marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{color:
                        "#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={20} style={{color:
                        "#fff",marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer