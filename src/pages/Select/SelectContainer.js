import React from 'react'
import SelectView from './SelectView'
import { useNavigate } from 'react-router-dom'

const SelectContainer = () => {
    const navigator = useNavigate();
  return (
    <SelectView navigator={navigator}/>
    )
}

export default SelectContainer