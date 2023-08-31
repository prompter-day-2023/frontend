import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import BgImage from '../../assets/Images/BackgroundImage.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'; 
import { setImageUrl } from '../../redux/actions';
import axios from 'axios';

const SelectView = ({ navigator, keyword, imageURLs }) => {
  const dispatch = useDispatch();
  const [localImageURLs, setLocalImageURLs] = useState([]);

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


    const title = useSelector(state => state.title);
    const content = useSelector(state => state.content);

    const saveToLocalStorage = (data) => {
      if (!data) return;
      console.log(data);
      const { image_url, keywords } = data.data;
    
      localStorage.setItem("imageURLs", JSON.stringify(image_url));
      localStorage.setItem("keywords", JSON.stringify(keywords));
      setLocalImageURLs(image_url);  // <- 상태를 즉시 업데이트합니다.
    };

    const handleButtonClick = async () => {
      console.log(title);
      console.log(content);

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
          } else {
              console.error('Failed to send diary content:', data.message);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }

    const handleImageClick = async (url) => {
      try {
          const response = await axios.post('http://127.0.0.1:5000/line-drawing', { imageUrl: url });
          console.log(response);
          const convertedImgUrl = response.data.response;
          localStorage.clear();
          localStorage.setItem('convertedImgUrl', convertedImgUrl);
          dispatch(setImageUrl(url));
          navigator('/complete');
      
      } catch (error) {
          console.error('Error during the request:', error);
      }
  }

    return (
        <DiaryWrapper>
          <InfoSection>
            <TitleContainer>
              <Title>2. 색칠할 그림을 선택해요</Title>
              <SubTitle>마음에 드는 그림을 선택하면 색칠 공부 도안으로 바꿔줄게요.</SubTitle>
            </TitleContainer>
          </InfoSection>
          <KeywordSection>
            <Keyword>추출된 키워드 :
              {
                keyword.map((kw, index) => (
                  <p key={index}>[{kw}]</p>
                ))
              }
            </Keyword>

          </KeywordSection>
          <DrawingSection>
        {
          localImageURLs.map((url, index) => (
            <Drawing 
              key={index} 
              style={{ backgroundImage: `url(${url})` }} 
              onClick={() => handleImageClick(url)}
            />
          ))
        }
      </DrawingSection>
    
          <ButtonContainer>
            <Button 
              onClick={handleButtonClick}
              >
            <FontAwesomeIcon icon={faRotateRight} style={{marginRight: "25px"}}/>
              다른 그림 보기
            </Button>
          </ButtonContainer>
        </DiaryWrapper>
      )
}

const DiaryWrapper = styled.div`
    background-color: #f3f3f3;
    background-image: url(${BgImage});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
`

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    padding-top: 100px;
    margin-bottom: 50px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: "NanumSquareRound";
    margin: 0;


`
const SubTitle = styled.p`
    font-family: "NanumSquareRound";
    font-weight: 300;

`

const ButtonContainer = styled.div`
  width: 1200px; 
  display: flex;
  justify-content: center;  
  align-items: center;
  padding: 50px;
  gap: 40px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 60px;
  background-color: #fff;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 10px;
  border-radius: 30px;
  border: none;
  font-family: "NanumSquareRound";
  color: #242424;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #4192F7;
    color: #fff;
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
  }
`;


const KeywordSection = styled.div`
  display: flex;
  justify-content:center;
  width: 1200px;
`

const Keyword = styled.div`
font-family: "NanumSquareRound";
font-weight: 300;
width: 100%;
height: 50px;
border: 2px solid #e9e9e9;
border-radius: 15px;
padding: 10px 20px;
font-size: 16px;
background-color: #fff;
display: flex;
align-items: center;
`

const DrawingSection = styled.div`
  display: flex;
  margin-top: 15px;
  max-width: 1200px;
  gap: 15px;
`

const Drawing = styled.button`
  width: 300px;
  height: 300px;
  border: 2px solid #e9e9e9;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    border: 4px solid #4192F7;
  }
`;
export default SelectView;
