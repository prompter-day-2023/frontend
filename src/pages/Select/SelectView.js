import React from 'react'
import styled from "styled-components";
import ProgressSteps from '../../components/ProgressBar/ProgressBarContainer';
import BgImage from '../../assets/Images/BackgroundImage.png'
import { useProgress } from '../../contexts/ProgressContext'; // <-- Import useProgress

const SelectView = () => {
    const { step, setStep } = useProgress(); // <-- Use the useProgress hook here

    return (
        <DiaryWrapper>
          <InfoSection>
            <TitleContainer>
              <Title>2. 색칠할 그림을 선택해요</Title>
              <SubTitle>마음에 드는 그림을 선택하면 색칠 공부 도안으로 바꿔줄게요.</SubTitle>
            </TitleContainer>
            <ProgressSteps step={step} />
          </InfoSection>
          <KeywordSection>
            <Keyword>
                키워드1, 키워드2, 키워드3, 키워드4, 키워드5
            </Keyword>

          </KeywordSection>
          <DrawingSection>
            <Drawing>
                그림 1
            </Drawing>
            <Drawing>
                그림 1
            </Drawing>
            <Drawing>
                그림 1
            </Drawing>
            <Drawing>
                그림 1
            </Drawing>
          </DrawingSection>
    
          <ButtonContainer>
            <Button 
              onClick={() => setStep(prev => Math.min(4, prev + 1))}
              disabled="True"
            >
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
  width: 320px;
  height: 60px;
  background-color: #4192F7;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 10px;
  border-radius: 30px;
  border: none;
  font-family: "NanumSquareRound";
  color: #fff;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
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
  margin-top: 10px;
  max-width: 1200px;
  gap: 10px;
`

const Drawing = styled.div`
width: 300px;
height: 300px;
border: 2px solid #e9e9e9;
border-radius: 15px;
padding: 10px 20px;
font-size: 16px;
background-color: #fff;

`

export default SelectView;