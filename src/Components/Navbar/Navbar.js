import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu,setshowMenu] =useState(false);
  return (
    <div>
      <nav className='navbar'>
        <img src={logo} alt="logo" className="logo"/>
        <div className="desktopMenu">
            <Link activeClass='active' to='Intro' spy= {true} duration={500} smooth={true} offset={-100} className="Listitem">Home</Link>
            <Link activeClass='active' to='Skills' spy= {true} duration={500} smooth={true} offset={-10} className="Listitem">About</Link>
            <Link activeClass='active' to='Portfolio' spy= {true} duration={500} smooth={true} offset={-20} className="Listitem">Portfolio</Link>
            <Link activeClass='active' to='Contacts' spy= {true} duration={500} smooth={true} offset={-20} className="Listitem">Projects</Link>
        </div>
        <button className='desktopMenuButton' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
            <img  className="desktopMenuImage" src={contactimg} alt=" "/>Contact Me
           
        </button>




        <img src={menu} alt="menu" className="burgerMenu" onClick={()=>setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='Intro' spy= {true} duration={500} smooth={true} offset={-100} className="Menuitem"  onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='Skills' spy= {true} duration={500} smooth={true} offset={-10} className="Menuitem" onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='Portfolio' spy= {true} duration={500} smooth={true} offset={-20} className="Menuitem" onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='Contacts' spy= {true} duration={500} smooth={true} offset={-20} className="Menuitem" onClick={()=>setshowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy= {true} duration={500} smooth={true} offset={-20} className="Menuitem" onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
        

      </nav>
    </div>
  )
}

export default Navbar
