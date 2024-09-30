import React from 'react' 
import './Navbar.css'
import logo from '../../assets/logo.png'
import theme_pattern from '../../assets/theme_pattern.png'

  const Navbar = () =>{ 
  
    const[menu,setMenu] = useState("home")

    return (
        <div className='navbar'>
          <img style={{width: 100, height: 100}} src={logo} alt="logo"/>
           <ul className="nav-menu">
             <li><p>Home</p>{menu==="home"?<img src={theme_pattern} alt="theme_pattern" />:<></>}</li>
             <li><p>About</p></li>
             <li><p>Services</p></li>
             <li><p>Clif'sWeb</p></li>
             <li><p>Contact</p></li>
           </ul>
           <div className="nav-connect">Connect With Me </div>
        </div>
    )
  }

export default Navbar