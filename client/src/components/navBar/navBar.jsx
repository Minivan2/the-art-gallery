import './navBar.css';

export default function NavBar() {
    return (
        <nav>
          <div>
            <a href="" class="logo">The Art Museum</a>
          </div>
          <div className="center">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="right">
            <span class="material-symbols-outlined">account_circle</span>
          </div>
        </nav>
    )
}