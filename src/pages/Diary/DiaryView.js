import React from 'react'
import styled from "styled-components";
import BgImage from '../../assets/Images/BackgroundImage.png'

const DiaryView = ({navigator, content, setContent, title, setTitle, handleContentChange}) => {


    return (
        <DiaryWrapper>
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
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputContainer>
            <TextAreaWrapper>
              <TextArea
                placeholder="일기 내용을 입력하세요."
                value={content}
                onChange={handleContentChange}
              />
              <CharCount exceedLimit={content.length > 250}>{content.length} / 250 글자</CharCount>
            </TextAreaWrapper>
          </TextSection>
    
          <ButtonContainer>
            <Button 
              disabled={!title || !content}
              onClick={() => {
                navigator('/select');

              }}
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
  width: 320px;
  height: 60px;
  background-color: ${props => props.disabled ? "#747474" : "#4192F7"};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 10px;
  border-radius: 30px;
  border: none;
  font-family: "NanumSquareRound";
  color: #fff;
  font-size: 18px;
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 버튼에 초기 그림자 추가

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // 호버 시 그림자 강조
  }
`;

export default DiaryView