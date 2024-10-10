import React from 'react' 
import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'
import {useRef} from 'react';

const Navbar = () =>{ 
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menu.current.style.right="-350px";
  }

  return (
      <div className='navbar'>
        <img style={{height: 150}} src={logo} alt="logo"/>
        <img style={{height: 50}} src={menu_open} onclick={openMenu} alt="" className='nav-mob-open'/>
          <ul ref={menuRef} className="nav-menu">
            <img style={{height: 50}} src={menu_close} onclick={closeMenu} alt="" className="nav-mob-close"/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img style={{height: 20, weight: 10}} src={underline} alt='underline'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img style={{height: 20, weight: 10}} src={underline} alt='underline'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img style={{height: 20, weight: 10}} src={underline} alt='underline'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Clifford</p></AnchorLink>{menu==="work"?<img style={{height: 20, weight: 10}} src={underline} alt='underline'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img style={{height: 20, weight: 10}} src={underline} alt='underline'/>:<></>}</li>
          </ul>
          <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      </div>
    )
  }

export default Navbar