// Libreries and hooks
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import useChangePage from './hooks/useChangePage'
// Styles and imagenes
import './App.css'
// Components
import About from './pages/body/About'
import Contact from './pages/body/Contact'
import Home from './pages/body/Home'
import Portfolio from './pages/body/Portfolio'
import Navbar from './components/shared/Navbar'


function App() {
  const { timeTransition, navigate, } = useChangePage()
  const { changeMode, currentPage } = useSelector(state => state)

  useEffect(() => {
    navigate(currentPage)
  }, [])

  const objStyleTranstion = {
    transition: `opacity ${timeTransition}s, transform ${timeTransition}s`
  }
  return (
    <div className="App">
      <Navbar />
      <article className={`routes-container-body ${changeMode ? 'u-inactive' : ''}`} style={objStyleTranstion}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </article>
    </div>
  )
}

export default App
