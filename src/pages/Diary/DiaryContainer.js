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
    />
)
}

export default DiaryContainer