import React from 'react'
import BgImage from '../../assets/Images/BackgroundImageTwo.png'
import Loading from '../../assets/Images/loading_image.gif';
import styled, { keyframes } from 'styled-components';

const DiaryView = ({ navigator, content, title, setContent, setTitle, handleContentChange, handleSubmit,loading }) => {
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
                  <Title>1. 일기를 적어봐요!</Title>
                  <SubTitle>오늘 하루 어떤 활동을 했는지 적으면 꾸미가 그림으로 그릴게요.</SubTitle>
              </TitleContainer>
          </InfoSection>

          <TextSection>
              <InputContainer>
                  <TitleInput
                      placeholder="일기 제목을 입력하세요."
                      value={title}
                      onChange={setTitle} 
                  />
              </InputContainer>
              <TextAreaWrapper>
                  <TextArea
                      placeholder="일기 내용을 입력하세요."
                      value={content}
                      onChange={handleContentChange}
                  />
                  <CharCount exceedlimit={content.length > 250}>{content.length} / 250 글자</CharCount>
              </TextAreaWrapper>
          </TextSection>

          <ButtonContainer>
              <Button 
                  disabled={!title || !content}
                  onClick={handleSubmit}
              >
                  다 적었어요!
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

const TextSection = styled.div`
    margin-top: 20px;
`

const TextAreaWrapper = styled.div`
    position: relative;
    width: 1156px;
`;

const CharCount = styled.div`
    position: absolute;
    bottom: 30px;
    right: 0px;
    color: ${props => props.exceedLimit ? 'red' : '#888'};  // 조건부 스타일링
    font-size: 14px;
`;

const TextArea = styled.textarea`
    font-family: "NanumSquareRound";
    font-weight: 300;
    border: 2px solid #e9e9e9;
    border-radius: 15px;
    width: 1156px;
    height: 300px;
    vertical-align: top; 
    resize: none; 
    padding: 20px;
    font-size: 16px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin-bottom: 20px;
`;

const TitleInput = styled.input`

    font-family: "NanumSquareRound";
    font-weight: 300;
    width: 100%;
    height: 40px;
    border: 2px solid #e9e9e9;
    border-radius: 15px;
    padding: 10px 20px;
    font-size: 16px;
`;


const ButtonContainer = styled.div`
  width: 1200px; 
  display: flex;
  justify-content: flex-end;  // 변경된 부분
  align-items: center;
  padding: 50px;
`

const Button = styled.button`
  width: 24rem;
  height: 4rem;
  cursor: pointer;
  padding: 1.25rem;
  border-radius: 2rem;
  font-family: "NanumSquareRound";
  background: ${props => props.disabled ? '#747474' :  'linear-gradient(to bottom, #00A3FF, #7660FF)'};
  color: #fff;
  border: none;
  font-size: 1.125rem;
  box-shadow:
    0 0.3rem 1rem rgba(0, 0, 0, 0.2),
    inset 0 0.125rem 0.3125rem rgba(255, 255, 255, 0.2),
    inset 0 -0.125rem 0.3125rem rgba(0, 0, 0, 0.2); 

  &:hover {
    box-shadow: 
      0 0.4rem 1.25rem rgba(0, 0, 0, 0.15), 
      inset 0 0.1875rem 0.3125rem rgba(255, 255, 255, 0.2),
      inset 0 -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2);
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

const fadeInText = keyframes`
  0% {
    opacity: 0;
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
  animation: ${fadeInText} 1s ease-in-out; // Apply the animation

`;

export default DiaryView