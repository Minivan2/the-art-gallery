import './navBar.css';

export default function NavBar() {
  return (
      <nav>
        <div className='navLeft'>
          <a href="" class="logo">The Art Museum</a>
        </div>
        <div className="navCenter">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#showcase">Showcase</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navRight">
          <a href="" className="user">User</a>
        </div>
      </nav>
  )
}