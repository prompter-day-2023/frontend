import React from 'react'
import styled from 'styled-components'
import MainImage from '../../assets/Images/BookAndPencil.svg'
import BgImage from '../../assets/Images/BackgroundImage.png'
import GenrativeAI from '../../assets/Images/GnerativeAI.svg'

const MainView = ({navigator, handleModalToggle, isModalVisible}) => {
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
      <SubInfoButton onClick={handleModalToggle}>생성형 인공지능이란?</SubInfoButton>
      {isModalVisible && (
        <Modal onClick={handleModalToggle}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleModalToggle}>&times;</CloseButton>
            <ModalTitle>생성형 인공지능이란?</ModalTitle>
            <ImageContainer>
              <img src={GenrativeAI} alt='Ai' />
            </ImageContainer>
            <ModalContents>생성형 인공지능 (AI) 기술은
                인공신경망을 이용하여 이미지, 비디오, 오디오, 텍스트 등을 포함한 대량의 데이터를 학습하여 사람과 유사한 방식으로 문맥과 의미를 이해하고 새로운 데이터를 자동으로 생성해 주는 기술을 의미해요.</ModalContents>
          </ModalContent>
        </Modal>
      )}
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
  background: linear-gradient(145deg, #3b8df5, #4577f8); // 선형 그라데이션 추가
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2); // 내부 그림자 추가

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.2); // 호버 시 그림자 강조
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

const Modal = styled.div`
  position: fixed;
  width: 520px;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 390px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #747474;
`;

const ModalTitle = styled.h3`
  font-family: NanumSquareRound;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
`

const ModalContents = styled.p`
font-family: NanumSquareRound;
font-weight: 300;
line-height: 2;
padding: 15px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default MainView