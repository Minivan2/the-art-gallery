import './navBar.css';
import imageSrc from '../../assets/images/logo-transparent.png';
import React, { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => {
    setMenuOpen(false)
  }
  return (
      <nav className='navBar'>
        <div className='navLeft'>
          <img title="The Art Museum" className='navLogo' src={imageSrc} alt="Company logo" />
        </div>
        <div className="navCenter">
          <ul className="navLinks">
            <li className='navListItem'><a href="home">Home</a></li>
            <li className='navListItem'><a href="about">About</a></li>
            <li className='navListItem'><a href="showcase">Showcase</a></li>
            <li className='navListItem'><a href="contact">Contact</a></li>
          </ul>
        </div>
        <div className="navRight navButtons">
          <i className="navUser fa-solid fa-user"></i>
          <i className={menuOpen ? "navToggle fa-solid fa-xmark" : 'navToggle fa-solid fa-bars'} onClick={() => setMenuOpen(!menuOpen)}></i>
          {menuOpen && (
            <div className="navDropdown open" onClick={close}>
              <li className='navListItem'><a href="home">Home</a></li>
              <li className='navListItem'><a href="about">About</a></li>
              <li className='navListItem'><a href="showcase">Showcase</a></li>
              <li className='navListItem'><a href="contact">Contact</a></li>
            </div>
            )}
        </div>
      </nav>
  )
}

export default NavBar