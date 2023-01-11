import React from 'react'
import './styles/cardTechnologies.css'

const CardTechnologies = ({ info }) => {
  return (
    <div className='c-card-technologies'>
      <img className='card-technologies__image' src={info.logo} alt={info.name + ' logo'} />
      <div className="card-technologies__shadow-background"></div>
    </div>
  )
}

export default CardTechnologies