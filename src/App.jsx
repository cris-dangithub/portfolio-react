// Libreries and hooks
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import useChangePage from './hooks/useChangePage'
// Styles and imagenes
import './App.css'
import LogoCM from './components/LogoCM'
// Components
import About from './pages/body/About'
import Contact from './pages/body/Contact'
import Home from './pages/body/Home'
import Portfolio from './pages/body/Portfolio'


function App() {
  const { changePage, timeTransition, navigate, } = useChangePage()
  const { changeMode, currentPage } = useSelector(state => state)

  useEffect(() => {
    navigate(currentPage)
  }, [])

  const objStyleTranstion = {
    transition: `opacity ${timeTransition}s, transform ${timeTransition}s`
  }
  return (
    <div className="App">
      <nav className='navbar'>
        <div className='navbar__logo-container' onClick={() => changePage('/')}>
          <LogoCM />
        </div>
        <div className='navbar__text-container'>
          <ul className='navbar__list'>
            <li className='navbar_list-item' onClick={() => changePage('/')}>Home</li>
            <li className='navbar_list-item' onClick={() => changePage('/about')}>About</li>
            <li className='navbar_list-item' onClick={() => changePage('/portfolio')}>Portfolio</li>
            <li className='navbar_list-item' onClick={() => changePage('/contact')}>Contact</li>
          </ul>
          <a
            className='navbar__cv u-button'
            href="https://drive.google.com/file/d/1NMnKt2FP0MN_ZndSaOHghLRjA3JOF9Zj/view?usp=share_link"
            target='_blank'
          >
            Download CV
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </nav>
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
