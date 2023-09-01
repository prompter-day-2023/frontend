import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setContent } from '../../redux/actions';
import DiaryView from './DiaryView'
import { useNavigate } from 'react-router-dom'

const DiaryContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const title = useSelector(state => state.title);
  const content = useSelector(state => state.content);

  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleContentChange = (e) => {
    if (e.target.value.length <= 250) {
      dispatch(setContent(e.target.value));
    }
  };


  const saveToLocalStorage = (data) => {
    if (!data) return;
    console.log(data);
    const { image_url, keywords } = data.data;
  
    localStorage.setItem("imageURLs", JSON.stringify(image_url));
    localStorage.setItem("keywords", JSON.stringify(keywords));
  };

  const handleSubmit = async () => {
    console.log(title);
    console.log(content);
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

        if (response.ok) {
          saveToLocalStorage(data);
          navigator('/select'); 
        } else {
            console.error('Failed to send diary content:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

  return (
    <DiaryView 
    content={content} 
    title={title} 
    setTitle={handleTitleChange} 
    setContent={handleContentChange} 
    handleContentChange={handleContentChange}
    navigator={navigator}
    handleSubmit={handleSubmit}
  />

)
}

export default DiaryContainer
