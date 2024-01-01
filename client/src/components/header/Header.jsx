import './header.css';
import imageSrc from '../../assets/images/header-bg.jpg';

export default function Header() {
  return (
    <div className='header-container'>
      <div className="headerImg">
        <img src={imageSrc} alt="Header background" className='header-bg'/>
      </div>
    </div>
  )
}
