import './navBar.css';
import logo from '../../assets/images/logo-transparent.png';
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import React, { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => {
    setMenuOpen(false)
  }
  return (
      <nav className='navBar'>
        <div className='navLeft'>
          <img title="The Art Museum" className='navLogo' src={logo} alt='Company logo'/>
        </div>
        <div className="navCenter">
          <ul className="navLinks">
            {nav.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navRight navButtons">
          <i className="navUser fa-solid fa-user"></i>
          <i className={menuOpen ? "navToggle fa-solid fa-xmark" : 'navToggle fa-solid fa-bars'} onClick={() => setMenuOpen(!menuOpen)}></i>
          {menuOpen && (
            <div className="navDropdown open" onClick={close}>
              <ul className="navLinks">
                {nav.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            )}
        </div>
      </nav>
  )
}

export default NavBar