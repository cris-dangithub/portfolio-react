import React, { useEffect } from 'react'
import useChangePage from '../../hooks/useChangePage'
import { pageLoaded } from '../../store/slice/changeMode.slice'
//Styles
import './styles/Home.css'

const Home = () => {

  const { changePage, dispatch } = useChangePage()

  useEffect(() => {
    dispatch(pageLoaded())
  }, [])
  return (
    <section className='c-home'>
      <main className='home__left-content'>
        <h4 className='home__title'>HI, I'M CRISTIAN</h4>
        <h2 className='home__sub-title'>I'M A WEB DEVELOPER</h2>
        <p className='home__greeting'>
          Welcome to my portfolio! Here you can find my personal
          projects and contact me for future collaborations. I hope you enjoy
          the experience of see this works ♥. Why don't
          you start by checking my projects? :D
        </p>
        <button className='u-button home__btn' onClick={() => changePage('/portfolio')}>
          View my projects
        </button>
      </main>
      <aside className='home__right-content'>
        <div className="home__image-circle">
          <img className='home__image' src="/img/Home/photo.JPEG" alt="Cristian foto" />
        </div>
        <ul className='home__network-list'>
          <li className='home__network-item'>
            <a href="https://www.linkedin.com/in/cristian-munoz-/" target='_blank'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className='home__network-item'>
            <a href="https://github.com/cris-dangithub" target='_blank'>
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </aside>
    </section>
  )
}

export default Home