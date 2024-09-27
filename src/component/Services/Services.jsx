import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
           
        </div>
        <div className="services-container">
            <ul>
                  
                <li><b>Social media</b></li>
                    <p>Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration.
                       People use social media to stay in touch and interact with friends, family and various communities. Businesses use social applications</p>
                <li><b>Software programming</b></li>
                    <p>Software programming is the act of writing computer code that enables computer software to function. The computer technology field often has overlapping terminology that can be confusing to discern. Software programming is not the same as software development. Development is the actual design of a program while programming is the carrying out of the instructions of development. People who program software are called computer programmers.</p>
            </ul>
        </div>
    </div>
  )
}

export default Services