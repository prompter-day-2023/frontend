import React, { useState } from 'react'
import MainView from './MainView'
import { useNavigate } from 'react-router-dom'

const MainContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false); 
  const navigator = useNavigate();

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <MainView navigator={navigator} handleModalToggle={handleModalToggle} isModalVisible={isModalVisible}/>
  )
}

export default MainContainer