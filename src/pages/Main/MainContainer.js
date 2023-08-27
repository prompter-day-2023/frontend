import React from 'react'
import MainView from './MainView'
import { useNavigate } from 'react-router-dom'

const MainContainer = () => {

  const navigator = useNavigate();

  return (
    <MainView navigator={navigator}/>
  )
}

export default MainContainer