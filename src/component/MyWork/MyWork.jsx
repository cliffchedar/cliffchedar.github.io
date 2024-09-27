import React from 'react'
import './MyWork.css'
import dsn_img from '../../assets/dsn_img.jpg'
import webdsn_img from '../../assets/webdsn_img.jpg'
import web_img from '../../assets/web_img.jpg'
const MyWork = () => {
  return (
    <div className='MyWork'>
      <div className="MyWork-title">
        <h1>My Latest work</h1>
      </div>
      <div className="img"> 
        <div className="dsn_img">
        <img align="left" style={{width: 400,}} src={dsn_img} alt=""/>
      </div>
      <img align="right" style={{width: 400,}} src={webdsn_img} alt=""/>
      <img align="center" style={{width: 400,}} src={web_img} alt=""/>
      </div>
   </div>
  )
}

export default MyWork
