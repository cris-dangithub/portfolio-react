import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { pageLoaded } from '../../store/slice/changeMode.slice'

const Contact = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pageLoaded())
  }, [])
  return (
    <div>Contact</div>
  )
}

export default Contact