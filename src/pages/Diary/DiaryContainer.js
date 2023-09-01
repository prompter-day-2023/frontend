import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setContent } from '../../redux/actions';
import DiaryView from './DiaryView'
import { useNavigate } from 'react-router-dom'
import Loading from '../../assets/Images/loading_image.gif';
import styled, { keyframes } from 'styled-components';

const DiaryContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  
  const [loading, setLoading] = useState(false);

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
    const { image_url, keywords } = data.data;
  
    localStorage.setItem("imageURLs", JSON.stringify(image_url));
    localStorage.setItem("keywords", JSON.stringify(keywords));
  };

  const handleSubmit = async () => {
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

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingContent>
          <img src={Loading} alt="Loading..." />
          <LoadingText>꾸미가 그림을 그리는 중이에요...</LoadingText>
        </LoadingContent>
      </LoadingContainer>
    ); 
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const LoadingContent = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.6s;
`;

const LoadingText = styled.p`
  font-family: "NanumSquareRound";
  margin-top: 10px;
  color: white;
  font-size: 18px;
`;

export default DiaryContainer;
