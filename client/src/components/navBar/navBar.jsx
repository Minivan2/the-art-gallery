import './navBar.css';
import imageSrc from '../../assets/images/logo-transparent.png';

export default function NavBar() {
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
        <div className="navRight">
          <i class="navUser fa-solid fa-user"></i>
          <i class="navToggle fa-solid fa-bars"></i>
        </div>
        <div className="navDropdown open">
          <li className='navListItem'><a href="home">Home</a></li>
          <li className='navListItem'><a href="about">About</a></li>
          <li className='navListItem'><a href="showcase">Showcase</a></li>
          <li className='navListItem'><a href="contact">Contact</a></li>
        </div>
      </nav>
  )
}