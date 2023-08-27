import React, { useState } from 'react';
import DiaryView from './DiaryView'

const DiaryContainer = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [step, setStep] = useState(1);

  const handleContentChange = (e) => {
    if (e.target.value.length <= 500) {
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
    />
)
}

export default DiaryContainer