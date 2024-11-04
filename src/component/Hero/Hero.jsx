import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img  style= {{borderRadius: '50%', width: 250}} src={profile_img} alt="profile" />
      <h1><span>I'm Clifford,</span> a front-end developer in Germany.</h1>
      <p>I have an experience in frontend developing for 2 years.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero 