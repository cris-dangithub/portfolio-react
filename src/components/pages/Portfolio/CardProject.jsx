import React, { useState } from 'react'
import './styles/cardProject.css'

const CardProject = ({ idx, project, setModalShowed, setCurrentProject }) => {
  const [projectName, setProjectName] = useState('')
  const handleClick = (idx)=> {
    setModalShowed(true)
    setCurrentProject(idx)
  }

  return (
    <li className={`c-card-project`}
      onMouseEnter={() => setProjectName('u-show-project')}
      onMouseLeave={() => setProjectName('')}
      onClick={()=>handleClick(idx)}
      key={idx}
    >
      <img className='c-card-project__image' src={project.image} alt={`${project.name} image`} />
      <div className={`c-card-project__overlay-name-project ${projectName}`}>
        <h3 className='c-card-project__name-project'>{project.name}</h3>
      </div>
    </li>
  )
}

export default CardProject