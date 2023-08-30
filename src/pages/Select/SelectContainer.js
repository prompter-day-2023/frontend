import React, { useState, useEffect } from 'react'
import SelectView from './SelectView'
import { useNavigate } from 'react-router-dom'

const SelectContainer = () => {
    const navigator = useNavigate();
    const [imageURLs, setImageURLs] = useState([]);
    const [keyword, setKeyword] = useState([]);

    useEffect(() => {
      const urls = localStorage.getItem('imageURLs');
      const keywords = localStorage.getItem('keywords');

      if (urls) {
          setImageURLs(JSON.parse(urls));
      }
      if (keywords) {
          setKeyword(JSON.parse(keywords));
          console.log(keyword);
      }
  }, []);

  return (
    <SelectView navigator={navigator} imageURLs={imageURLs} keyword={keyword}/>
    )
}

export default SelectContainer