import React, { useState } from 'react'
import useDataBase from '../../../hooks/useDataBase'
import CardSlider from './CardSlider';
import './styles/sliderPortfolio.css'

const SliderPortfolio = ({ currentProject, setCurrentProject }) => {
  const { myPortfolio } = useDataBase()
  const handlePreviousBtn = () => {
    if (currentProject === 0) return setCurrentProject(myPortfolio.length - 1)
    setCurrentProject(--currentProject)
  }

  const handleNextBtn = () => {
    if (currentProject === myPortfolio.length - 1) return setCurrentProject(0)
    setCurrentProject(++currentProject)
  }
  const transitionTimeSlider = 0.4
  const objMainContainerStyle = {
    transition: `${transitionTimeSlider}s`,
    transform: `translateX(calc(-100% * ${currentProject}))`
  }
  console.log(currentProject);
  return (
    <article className='c-slider-portfolio'>
      <button onClick={handlePreviousBtn} className='slider-portfolio__btn-header'>
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <header className='slider-portfolio__header'>
        <article className='slider-portfolio__main-container' style={objMainContainerStyle}>
          {
            myPortfolio.map((project, idx) => (
              <CardSlider key={idx} idx={idx} project={project} currentProject={currentProject}/>
            ))
          }
        </article>
      </header>
      <button onClick={handleNextBtn} className='slider-portfolio__btn-header'>
        <i className="fa-solid fa-circle-chevron-right"></i>
      </button>
      {/* <footer className='slider-portfolio__footer'>
        {
          myPortfolio.map((project, idx) => (
            <button className='slider-portfolio__btn-footer' key={idx}>Project {idx}</button>
          ))
        }
      </footer> */}
    </article>
  )
}

export default SliderPortfolio