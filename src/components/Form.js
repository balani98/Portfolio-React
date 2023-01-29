import './FormStyles.css'

import React from 'react'


const form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type='text'/>
            <label>Your Email</label>
            <input type='email'/>
            <label>Subject</label>
            <input type='text'/>
            <label>Message</label>
            <textarea row="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default form