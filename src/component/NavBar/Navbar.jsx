import React from 'react' 
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='navbar'>
          <img style={{width: 70, height: 60}} src={logo} alt="logo"/>
           <ul className="nav-menu">
             <li>Home</li>
             <li>About</li>
             <li>Service</li>
             <li>Clif'sWeb</li>
             <li>Contact </li>
           </ul>
           <div className="nav-connect">Connect With Me </div>
        </div>
    )
  }

export default Navbar