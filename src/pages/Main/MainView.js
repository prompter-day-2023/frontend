import React from 'react'
import styled from 'styled-components'
import MainImage from '../../assets/Images/BookAndPencil.svg'
import BgImage from '../../assets/Images/BackgroundImage.png'

const MainView = ({navigator}) => {
  return (
    <MainWrapper>
      <TitleContainer>
      <Title>꿈을 꾸는 AI 그림 일기장</Title>
        <SubTitle>일기를 적으면 꾸미가</SubTitle><SubTitle> 색칠 공부 도안으로 만들어드려요!</SubTitle>
      </TitleContainer>
      <ServiceContainer>
        <ServiceWrapper>
          <img src={MainImage} alt='mainImage'/>
        </ServiceWrapper>
      </ServiceContainer>
      <ButtonContainer>
        <Button onClick={() => navigator('/diary')}>AI 그림일기 만들기</Button>
      </ButtonContainer>
      <SubInfoText>꾸미는 생성형 인공지능을 이용해 일기를 색칠공부 도안으로 바꿔줘요.</SubInfoText>
      <SubInfoButton>생성형 인공지능이란?</SubInfoButton>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-color: #f3f3f3;
  background-image: url(${BgImage});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin: 0;
  font-family: "NanumSquareRound";
  font-weight: 100;
  font-size: 16px;

`
const Title = styled.h2`
  font-weight: 700;
  font-family: "NanumSquareRound";
  font-size: 22px;

`

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ServiceWrapper = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 버튼에 초기 그림자 추가

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // 호버 시 그림자 강조
  }
`;

const SubInfoText = styled.p`
  font-family: "NanumSquareRound";
  font-weight: 100;
  font-size: 14px;
`

const SubInfoButton = styled.button`
  cursor: pointer;
  font-family: "NanumSquareRound";
  text-decoration: underline;
  border: none;
  background-color: rgba(0,0,0,0);
`

export default MainView