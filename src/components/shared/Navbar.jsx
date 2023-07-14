import React, { useState } from 'react'
import useChangePage from '../../hooks/useChangePage'
import LogoCM from '../LogoCM'
import './styles/navbar.css'

const Navbar = () => {
  const [menuShowed, setMenuShowed] = useState()
  const { changePage } = useChangePage()
  const link_cv = "https://drive.google.com/file/d/1NMnKt2FP0MN_ZndSaOHghLRjA3JOF9Zj/view?usp=share_link"
  const handleChangeSection = (to) => {
    changePage(to)
    setMenuShowed(false)
  }
  return (
    <nav className='navbar'>
      <div className='navbar__logo-container' onClick={() => changePage('/')}>
        <LogoCM />
      </div>
      <div className={`navbar__text-container ${menuShowed ? 'navbar__text-container--open' : ''}`}>
        <i className="fa-solid fa-xmark navbar__text-container-close" onClick={() => setMenuShowed(false)}></i>
        <ul className='navbar__list'>
          <li className='navbar_list-item' onClick={() => handleChangeSection('/')}>Home</li>
          <li className='navbar_list-item' onClick={() => handleChangeSection('/about')}>About</li>
          <li className='navbar_list-item' onClick={() => handleChangeSection('/portfolio')}>Portfolio</li>
          <li className='navbar_list-item' onClick={() => handleChangeSection('/contact')}>Contact</li>
        </ul>
        <a
          className='navbar__cv u-button'
          href={link_cv}
          target='_blank'
        >
          Download CV
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
      <div className='navbar__right-container-mobile'>
        <a
          className='navbar__cv navbar__cv--mobile u-button'
          href={link_cv}
          target='_blank'
        >
          Download CV
          <i className="fa-solid fa-arrow-down"></i>
        </a>
        <div className='navbar__show-menu-btn u-button' onClick={() => setMenuShowed(!menuShowed)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar