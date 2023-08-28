import React from 'react'
import styled from "styled-components";
import BgImage from '../../assets/Images/BackgroundImage.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const SelectView = ({ navigator }) => {

    return (
        <DiaryWrapper>
          <InfoSection>
            <TitleContainer>
              <Title>2. 색칠할 그림을 선택해요</Title>
              <SubTitle>마음에 드는 그림을 선택하면 색칠 공부 도안으로 바꿔줄게요.</SubTitle>
            </TitleContainer>
          </InfoSection>
          <KeywordSection>
            <Keyword>
                키워드1, 키워드2, 키워드3, 키워드4, 키워드5
            </Keyword>

          </KeywordSection>
          <DrawingSection>
            <Drawing onClick={()=> navigator('/complete')}>
                그림 1
            </Drawing>
            <Drawing onClick={()=> navigator('/complete')}>
                그림 1
            </Drawing>
            <Drawing onClick={()=> navigator('/complete')}>
                그림 1
            </Drawing>
            <Drawing onClick={()=> navigator('/complete')}>
                그림 1
            </Drawing>
          </DrawingSection>
    
          <ButtonContainer>
            <Button 
              disabled="True"
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
  transition: transform 0.3s;  // Add this line for smooth animation

  &:hover {
    transform: scale(1.05);  // Add this line to scale the button on hover
  }
`;

export default SelectView;