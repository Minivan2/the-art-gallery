import './header.css';
import imageSrc from '../../assets/images/header-bg.jpg';

export default function Header() {
  return (
    <section className='header'>
      <div className='header-container'>
        <div className="background">
          <img src={imageSrc} alt="Header background"/>
        </div>
      </div>
    </section>
  )
}
