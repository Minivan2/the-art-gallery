import React from "react"
import { NavBar } from './components/navBar/NavBar'
import { Home } from './pages/home/Home'
import { Details } from './pages/details/Details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:id' element={<Details />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
