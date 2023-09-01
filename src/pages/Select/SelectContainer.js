import React, { useState, useEffect } from 'react'
import SelectView from './SelectView'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

const SelectContainer = () => {
    const navigator = useNavigate();
    const [imageURLs, setImageURLs] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [loading, setLoading] = useState(false);
    const [localImageURLs, setLocalImageURLs] = useState([]);
    const title = useSelector(state => state.title);
    const content = useSelector(state => state.content);

    useEffect(() => {
      const urls = localStorage.getItem('imageURLs');
      const keywords = localStorage.getItem('keywords');

      if (urls) {
          setImageURLs(JSON.parse(urls));
      }
      if (keywords) {
          setKeyword(JSON.parse(keywords));
      }
  }, []);


  useEffect(() => {
    const loadImageURLs = () => {
      const urls = localStorage.getItem('imageURLs');
      if (urls) {
        setLocalImageURLs(JSON.parse(urls));
      }
    };
  
    loadImageURLs();
  
    window.addEventListener('storage', loadImageURLs);
  
    return () => {
      window.removeEventListener('storage', loadImageURLs);
    };
  }, [setLocalImageURLs]);



  const saveToLocalStorage = (data) => {
    if (!data) return;
    const { image_url, keywords } = data.data;
  
    localStorage.setItem("imageURLs", JSON.stringify(image_url));
    localStorage.setItem("keywords", JSON.stringify(keywords));
    setLocalImageURLs(image_url);  // <- 상태를 즉시 업데이트합니다.
  };

  

  const handleButtonClick = async () => {
    setLoading(true);
    try {
        const endpoint = `http://${process.env.REACT_APP_BACKEND_REQUEST}:${process.env.REACT_APP_BACKEND_PORT}/diary`;
        const payload = {
            title: title,
            contents: content
        };
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
          saveToLocalStorage(data);
          navigator('/select'); 
        } else {
            console.error('Failed to send diary content:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        setLoading(false);
    }
  }

  return (
    <SelectView navigator={navigator} imageURLs={imageURLs} keyword={keyword} localImageURLs={localImageURLs} handleButtonClick={handleButtonClick} loading={loading}/>
    )

}

export default SelectContainer