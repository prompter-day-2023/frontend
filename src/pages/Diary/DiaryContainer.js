import React, { useState } from 'react';
import DiaryView from './DiaryView'
import { useNavigate } from 'react-router-dom'

const DiaryContainer = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [step, setStep] = useState(1);

  const navigator = useNavigate();

  const handleContentChange = (e) => {
    if (e.target.value.length <= 250) {
      setContent(e.target.value);
    }
  };


  const handleSubmit = async () => {
    try {
        const endpoint = 'http://localhost:5000/diary';

        const payload = {
            content: content
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
            console.log(data.imageUrl);
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
      step={step}
      setStep={setStep}
      navigator={navigator}
      handleSubmit={handleSubmit}
    />
)
}

export default DiaryContainer