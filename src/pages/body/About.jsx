import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardStudies from '../../components/pages/About/CardStudies'
import CardTechnologies from '../../components/pages/About/CardTechnologies'
import useDataBase from '../../hooks/useDataBase'
import { pageLoaded } from '../../store/slice/changeMode.slice'
import './styles/About.css'

const About = () => {
  const [technologiesShowed, setTechnologiesShowed] = useState(true)
  const [changingAbout, setChangingAbout] = useState(false)

  const { technologies, education } = useDataBase()

  const changingEffect = toShow => {
    setChangingAbout(true)
    setTimeout(() => {
      setTechnologiesShowed(toShow)
      setChangingAbout(false)
    }, 200)
  }

  const showTechnologies = () => {
    if (!technologiesShowed) {
      changingEffect(true)
    }
  }
  const showStudies = () => {
    if (technologiesShowed) {
      changingEffect(false)
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pageLoaded())
  }, [])
  return (
    <section className='c-about'>
      <main className='about__left-content'>
        <h2 className='about__title'>About me</h2>
        <p className='about__description'>
          My name is Cristian and I am 22 years old.
          I am from Colombia and I am currently a last semester student of Civil Engineering.
          In parallel, I am also preparing myself for the field of programming, as I consider it to be one of my passions.
          Within my works and projects, whether they are personal or not, I always try to give my best to obtain the best
          possible results, and all of this entails being creative, responsible, proactive and, above all, having a good
          disposition for teamwork.
        </p>
        <div className='about__btns-container'>
          <button className={`u-button about__btn ${technologiesShowed ? 'u-button--active' : ''}`}
            onClick={showTechnologies}
          >
            View technologies
          </button>
          <button className={`u-button about__btn ${!technologiesShowed ? 'u-button--active' : ''}`}
            onClick={showStudies}
          >
            View studies
          </button>
        </div>
      </main>
      <aside className={`about__right-content ${changingAbout ? 'u-inactive--right' : ''}`}>
        <h3 className='about__sub-title'>{technologiesShowed ? 'Technologies' : 'My studies'} </h3>
        <div className='about__cards-container'>
          {
            technologiesShowed ?
              technologies.map((technology, idx) => (
                <CardTechnologies
                  key={idx}
                  info={technology}
                />
              ))
              :
              education.map((study, idx) => (
                <CardStudies
                  key={idx}
                  info={study}
                />
              ))
          }
        </div>

      </aside>
    </section>
  )
}

export default About