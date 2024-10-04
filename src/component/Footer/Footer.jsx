import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.png'

const Footer = () => {
  return (
    <div id='' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img style={{height: 100, weight: 100}} src={logo} alt="logo" />
            <p>I am a frontend developer from Ghana with 10 years of experience. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img style={{borderRadius: '1000%', height: 50}} src={user_icon} alt="user_icon" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2020 Cliff. All rights reserved</p>
        <p>Term of Service</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  )
}

export default Footer