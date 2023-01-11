import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardProject from '../../components/pages/Portfolio/CardProject'
import SliderPortfolio from '../../components/pages/Portfolio/SliderPortfolio'
import useDataBase from '../../hooks/useDataBase'
import { pageLoaded } from '../../store/slice/changeMode.slice'
import './styles/Portfolio.css'

const Portfolio = () => {
  const { myPortfolio } = useDataBase()
  const [modalShowed, setModalShowed] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [zIndexModalActive, setZIndexModalActive] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pageLoaded())
  }, [])

  /*  */
  const timeTranslationSeconds = 0.4
  const objStyleModalContainer = {
    transition: `opacity ${timeTranslationSeconds}s`,
    zIndex: zIndexModalActive ? 10000 : -10
  }
  const handleCloseModal = () => {
    setModalShowed(false)
  }
  useEffect(() => {
    if (modalShowed) {
      setZIndexModalActive(true)
    } else {
      setTimeout(() => setZIndexModalActive(false), 400)
    }
  }, [modalShowed])

  return (
    <section className={`c-portfolio`}>
      <div className={`portfolio__overlay ${modalShowed ? 'portfolio__overlay--active' : ''}`} style={objStyleModalContainer}></div>
      <main className='portfolio__pool'>
        <h2 className='portfolio__title'>My portfolio</h2>
        <ul className={`portfolio__list`}>
          {
            myPortfolio.map((project, idx) => (
              <CardProject
                key={idx}
                idx={idx}
                project={project}
                setModalShowed={setModalShowed}
                setCurrentProject={setCurrentProject}
              />
            ))
          }
        </ul>
      </main>
      <article className={`portfolio__modal ${modalShowed ? 'portfolio__modal--showed' : ''}`} style={objStyleModalContainer}>
        <div className="portfolio__modal-content">
          <h2 className='portfolio__close-modal' onClick={handleCloseModal}><i className="fa-solid fa-circle-xmark"></i></h2>
          <SliderPortfolio
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />
        </div>
      </article>
    </section>
  )
}

export default Portfolio