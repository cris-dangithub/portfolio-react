import React, { useEffect, useState } from 'react'
import './styles/cardSlider.css'

const CardSlider = ({ idx, project, currentProject }) => {

  return (
    <section className={`c-card-slider ${idx === currentProject ? '' : 'c-card-slider--inactive'}`}>
      <aside className='card-slider__left-content'>
        <div className="card-slider__video-container">

          <video className='card-slider__video' muted controls>
            <source src={project.video} />
            Su navegador no soporta este formato de video
          </video >
        </div>
      </aside>
      <section className='card-slider__info-container'>
        <h2 className='card-slider__project-name'>{project.name}</h2>
        <h4 className='card-slider__date-info'>Date</h4>
        <p className='card-slider__description'>{project.description}</p>
        <a className='card-slider__btn-container u-button' href={project.link} target='_blank'>
          Visit Site
        </a>
      </section>
    </section >
  )
}

export default CardSlider