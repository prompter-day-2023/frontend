import React from 'react'
import styled from "styled-components";
import BgImage from '../../assets/Images/BackgroundImage.png'

const CompleteView = () => {

    return (
        <CompleteViewWrapper>
            <InfoSection>
            <TitleContainer>
              <Title>3. 짜잔! 그림 일기가 완성됐어요.</Title>
              <SubTitle>일기를 저장한 후 출력해봐요!</SubTitle>
            </TitleContainer>
          </InfoSection>
          <MainSection>
          <DrawingDiarySection>
            <DrawingDiary />
          </DrawingDiarySection>
          <ButtonContainer>
            <Button 
              onClick={() => {

              }}
            >
                저장하기
              </Button>
              <SubButton 
              onClick={() => {

              }}
            >
                색칠방법 보기
              </SubButton>
              </ButtonContainer>
            </MainSection>
        </CompleteViewWrapper>
      )
}

const CompleteViewWrapper = styled.div`
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

const DrawingDiarySection = styled.div`
`

const DrawingDiary = styled.img`
    width: 800px;
    height: 500px;
    border: 2px solid #e9e9e9;
    border-radius: 15px;
    background-color: #fff;
`

const Button = styled.button`
  width: 320px;
  height: 60px;
  cursor: pointer;
  padding: 10px;
  border-radius: 30px;
  border: none;
  font-family: "NanumSquareRound";
  color: #fff;
  background-color: #4192F7;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
  }
`;

const MainSection = styled.div`
  display: flex;
  gap: 30px;
  width: 1200px;
`

const SubButton = styled.button`
width: 320px;
height: 60px;
cursor: pointer;
padding: 10px;
border-radius: 30px;
border: none;
font-family: "NanumSquareRound";
color: #242424;
background-color: #fff;
font-size: 18px;
transition: transform 0.3s, box-shadow 0.3s; 
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

&:hover {
  transform: scale(1.05); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
}
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export default CompleteView;