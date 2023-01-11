import React from 'react'
import './styles/cardStudies.css'

const CardStudies = ({ info }) => {
  return (
    <div className='c-card-studies'>
      <img className='card-studies__image' src={info.logo} alt={`${info.name} image`} />
      <h3 className='card-studies__title'>{info.name}</h3>
      <ul className='card-studies__list'>
        <li className='card-studies__item'>{info.period}</li>
        <li className='card-studies__item'>{info.about}</li>
      </ul>
    </div>
  )
}

export default CardStudies