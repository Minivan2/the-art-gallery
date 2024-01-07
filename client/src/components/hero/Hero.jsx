import './hero.css'
import React, {useState} from 'react'
import { slider } from "../../assets/data/data"

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? slider.length-1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLast = currentIndex === slider.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className="hero-wrapper">
          <div className='hero-slider'>
            <div className="hero-nav-arrows" onClick={goToPrevious}>
              <i class="left fa-solid fa-caret-left"></i>
              </div>
            <img src={slider[currentIndex].img} alt={slider[currentIndex].alt} />
            <div className="hero-nav-arrows" onClick={goToNext}>
              <i class="right fa-solid fa-caret-right"></i>
              </div>
          </div>
          <div className="hero-nav-buttons">
            {slider.map((slide, slideIndex) => (
              <div key={slideIndex} className='hero-nav-dot' onClick={() => goToSlide(slideIndex)}>
                <i class="fa-solid fa-circle"></i>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
