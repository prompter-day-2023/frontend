import React from 'react'
import styled from 'styled-components'
import BgImage from '../../assets/Images/BackgroundImage.png'
import GenrativeAI from '../../assets/Images/GnerativeAI.svg'

const MainView = ({navigator, handleModalToggle, isModalVisible}) => {
  return (
    <MainWrapper>
      <TitleContainer>
      <Title>꿈을 꾸는 AI 그림 일기장</Title>
        <SubTitle>일기를 적으면 꾸미가</SubTitle><SubTitle> 색칠 공부 도안으로 만들어드려요!</SubTitle>
      </TitleContainer>
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
  overflow: hidden;
  background-image: url(${BgImage});
  background-position: center center; 
  background-repeat: no-repeat; 
  background-size: cover;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100vw;  
  height: 100vh; 
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.375rem;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  margin: 0;
  font-family: "NanumSquareRound";
  font-weight: 100;
`

const Title = styled.h2`
  font-weight: 700;
  font-family: "NanumSquareRound";
  font-size: 1.875rem;
  margin-bottom: 1rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.875rem;
  margin-top: 28rem;
  margin-bottom: 1.25rem;

`

const Button = styled.button`
  width: 24rem;
  height: 4rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 2rem;
  font-family: "NanumSquareRound";
  color: #fff;
  background: linear-gradient(to bottom, #00A3FF, #7660FF);
  border: none;
  font-size: 1.125rem;
  box-shadow:
    0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.2),
    inset 0 0.125rem 0.3125rem rgba(255, 255, 255, 0.2),
    inset 0 -0.125rem 0.3125rem rgba(0, 0, 0, 0.2); 

  &:hover {
    box-shadow: 
      0 0.4375rem 1.25rem rgba(0, 0, 0, 0.15), 
      inset 0 0.1875rem 0.3125rem rgba(255, 255, 255, 0.2),
      inset 0 -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2);
  }
  
`;

const SubInfoText = styled.p`
  font-family: "NanumSquareRound";
  font-weight: 100;
  font-size: 0.875rem;
  margin: 0;
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
  width: 32.5rem;
  height: 24.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 90%;
  height: 23.75rem;
  padding: 1.25rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.875rem;
  color: #747474;
`;

const ModalTitle = styled.h3`
  font-family: NanumSquareRound;
  text-align: center;
  padding-top: 1.875rem;
  padding-bottom: 0.625rem;
`

const ModalContents = styled.p`
font-family: NanumSquareRound;
font-weight: 300;
line-height: 2;
padding: 1rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default MainView
