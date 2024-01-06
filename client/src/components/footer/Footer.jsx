import './footer.css'
import React from 'react'
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className="footer-social">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="footer-menu">
                <ul>
                    {nav.map((link) => (
                    <li key={link.id}>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
