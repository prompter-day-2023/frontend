import React, { useState } from 'react';
import DiaryView from './DiaryView'
import { useNavigate } from 'react-router-dom'

const DiaryContainer = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const navigator = useNavigate();

  const handleContentChange = (e) => {
    if (e.target.value.length <= 250) {
      setContent(e.target.value);
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
    try {
        const endpoint = 'http://127.0.0.1:5000/diary';
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
      setTitle={setTitle} 
      setContent={setContent} 
      handleContentChange={handleContentChange}
      navigator={navigator}
      handleSubmit={handleSubmit}
    />
)
}

export default DiaryContainer
