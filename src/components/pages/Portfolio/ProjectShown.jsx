import React, { useEffect } from 'react'

const ProjectShown = ({ }) => {

  const handleClick = () => {
    setPortfolioDisplayed()
  }
  useEffect(() => {
    setTimeout(() => {
      setUploadingVideo(false)
    }, 200)
  }, [project])

  return (
    <div>
      <span onClick={handleClick}>X</span>
      {
        uploadingVideo ?
          <p>Loading</p>
          :
          <video loop autoPlay muted>
            < source src={project.video} />
            Su navegador no soporta este formato de video
          </video >
      }
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.link} target='_blank'>View project</a>
    </div>
  )
}

export default ProjectShown