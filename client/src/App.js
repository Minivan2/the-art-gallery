import './App.css'
import React from "react"
import { NavBar } from './components/navBar/NavBar'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Details } from './pages/details/Details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/details/:id' element={<Details />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
