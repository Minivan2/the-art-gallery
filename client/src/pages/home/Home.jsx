import Gallery from '../../components/gallery/Gallery'
import Header from '../../components/header/Header'
import './home.css'

export default function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Gallery />
      </div>
    </>
  )
}
