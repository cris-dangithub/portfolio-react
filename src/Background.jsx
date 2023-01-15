import React, { useEffect, useState } from 'react'
import './Background.css'

const Background = () => {
  const [kites, setKites] = useState()
  const [quantityKites, setQuantityKites] = useState()
  const htmlJSX = (idx, objStyle) => (
    <div className="background__body" key={idx} style={objStyle}>
      <div className='background__body-circle'></div>
    </div>
  )
  const changePosition = kiteHTML => {
    const topPosition = Number(kiteHTML.style.top.slice(0, -2))
    const rightPosition = Number(kiteHTML.style.right.slice(0, -2))
    kiteHTML.style.transition = 'right 1s linear, top 1s linear'
    setTimeout(() => {
      kiteHTML.style.top = `${topPosition + 10}px`
      kiteHTML.style.right = `${rightPosition + 14}px`
    }, 5)
  }
  useEffect(() => {
    const generateQuantity = () => {
      const baseQuantity = 9
      const widthRelation = 150
      setQuantityKites(Math.floor(window.innerWidth / widthRelation) + baseQuantity)
    }
    window.addEventListener('load', e => {
      generateQuantity()
    })
    window.addEventListener('resize', e => {
      generateQuantity()
    })
    
  }, [])
  
  useEffect(() => {
    const rootContainer = document.querySelector('#root')
    if (quantityKites && kites === undefined) {
      const arrayKites = []
      for (let i = 0; i < quantityKites; i++) {
        const objStyle = {}
        //!Generate position in page
        objStyle.top = `${rootContainer.getBoundingClientRect().bottom * Math.random()}px`
        objStyle.right = `${rootContainer.getBoundingClientRect().right * Math.random()}px`
        objStyle.zIndex = `${Math.random() < 0.5 ? 400 : 600}`
        objStyle.transform = `${objStyle.zIndex === '400' ? 'scale(0.5)' : ''} rotate(-35deg)`
        objStyle.opacity = `${objStyle.zIndex === '400' ? '0.4' : '0.8'}`
        objStyle.transition = 'none'
        //Push item
        arrayKites.push(htmlJSX(i, objStyle))
      }
      setKites(arrayKites)
    }
    if (kites && quantityKites !== kites.length) {
      setKites()
      console.log("Ejecuto");
    }
  }, [quantityKites, kites])

  useEffect(() => {
    const rootContainer = document.querySelector('#root')
    if (kites) {
      const kitesHTMLArray = document.querySelectorAll('.background__body')
      kitesHTMLArray.forEach(kiteHTML => {
        kiteHTML.addEventListener('transitionend', e => {
          const condition2 = rootContainer.getBoundingClientRect().bottom - kiteHTML.getBoundingClientRect().bottom > -100
          if (kiteHTML.getBoundingClientRect().left > -110 && condition2) {
            changePosition(kiteHTML)
          } else {
            kiteHTML.style.transition = 'none';
            //
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
              kiteHTML.style.top = `-120px`
              kiteHTML.style.right = `${rootContainer.getBoundingClientRect().right * Math.random()}px`
            } else {
              kiteHTML.style.top = `${rootContainer.getBoundingClientRect().bottom * Math.random()}px`
              kiteHTML.style.right = `-150px`
            }
            setTimeout(() => changePosition(kiteHTML), 5)
          }
        })
        changePosition(kiteHTML)
      })
    }
  }, [kites])
  return (
    <div className='c-background'>
      <div className="background__kites-container">
        {
          kites?.map(kite => kite)
        }
      </div>
    </div>
  )
}

export default Background