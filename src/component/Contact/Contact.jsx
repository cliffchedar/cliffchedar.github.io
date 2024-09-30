import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import message_img from '../../assets/message_img.png'
import location_img from '../../assets/location_img.png'
import mobile_img from '../../assets/mobile_img.png' 
const Contact = () => {
  return (
    <div className='Contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img style={{height: 120, weight: 500}} src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img style={{height: 30, width: 25}} src={message_img} alt="message_img" /> <p>codeacademy@gmail.com</p>  
                    </div>
                    <div className="contact-detail">
                        <img style={{height: 30, width: 25}} src={location_img} alt="location_img" /> <p>@mAccra-Ghana</p>   
                    </div>
                    <div className="contact-detail">
                         <img style={{height: 30,width: 25}} src={mobile_img} alt="mobile_img" /> <p>+233 23-4567-890</p>   
                    </div>
                </div>  
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder='Enter yor name' name='name' />
                <label htmlFor="">Your Email:</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here:</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact