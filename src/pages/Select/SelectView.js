import React from 'react';
import BgImage from '../../assets/Images/BackgroundImageTwo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { setImageUrl } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import Loading from '../../assets/Images/loading_image.gif';
import axios from 'axios';

const SelectView = ({ navigator, keyword, imageURLs, handleButtonClick, localImageURLs, loading }) => {
  const dispatch = useDispatch();

    const handleImageClick = async (url) => {
      try {
          const response = await axios.post(`http://${process.env.REACT_APP_BACKEND_REQUEST}:${process.env.REACT_APP_BACKEND_PORT}/line-drawing`, { imageUrl: url });
          const { data } = response.data;
          localStorage.clear();
          localStorage.setItem('convertedImgUrl', data);
          dispatch(setImageUrl(url));
          navigator('/complete');
      
      } catch (error) {
          console.error('Error during the request:', error);
      }
  }

    return (
        <DiaryWrapper>
           {loading && (
            <LoadingContainer>
                <LoadingContent>
                    <img src={Loading} alt="Loading..." />
                    <LoadingText>꾸미가 그림을 그리는 중이에요...</LoadingText>
                </LoadingContent>
            </LoadingContainer>
        )}
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

export default SelectView;
