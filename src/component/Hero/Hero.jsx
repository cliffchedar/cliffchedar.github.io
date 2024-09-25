import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img  style= {{borderRadius: '50%', width: 250}} src={profile_img} alt="profile" />
      <h1><span>I'm Clifford,</span> a front-end developer in Germany.</h1>
      <p>I have an experience in front-end developing for 2 years.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero 