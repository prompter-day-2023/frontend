import React from 'react'
import styled from 'styled-components'
import BgImage from '../../assets/Images/BackgroundImage.png'
import Picture1 from  '../../assets/Images/Picture1.png'
import Picture2 from '../../assets/Images/Picture2.png'
import Picture3 from '../../assets/Images/Picture3.png'

const InfoView = () => {
  return (
    <InfoWrapper>
      <InfoCardContainer>
        <InfoCard>
        <Image src={Picture1} />
          <CardTitle>일상</CardTitle>
          <CardDescription>오늘 하루는 어떻게 보냈나요?</CardDescription>
          <CardDescription>하루를 그림으로 그려드릴게요.</CardDescription>
        </InfoCard>
        <InfoCard>
          <Image src={Picture2} />
          <CardTitle>장래희망</CardTitle>
          <CardDescription>커서 어떤 직업을 가지고 싶나요?</CardDescription>
          <CardDescription>꿈꾸는 미래를 그림으로 그려드려요.</CardDescription>
        </InfoCard>
        <InfoCard>
        <Image src={Picture3} />
          <CardTitle>독후감</CardTitle>
          <CardDescription>책을 읽은 후에 내용과 느낀 점을</CardDescription>
          <CardDescription>기록하면 그림으로 그려드려요.</CardDescription>
        </InfoCard>
      </InfoCardContainer>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
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

const InfoCardContainer = styled.div`
  display: flex;
  gap: 20px;
`

const InfoCard = styled.div`
  width: 400px;
  height: 420px;
  border: 2px solid #e9e9e9;
  background-color: #fff;
  border-radius: 25px;
  transition: transform 0.3s, box-shadow 0.3s; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Image = styled.img`
  width: 100%;
  height: 270px;    
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

`

const CardTitle = styled.h2`
  font-family: "NanumSquareRound";
  margin-left: 30px;
`

const CardDescription = styled.p`
  font-family: "NanumSquareRound";
  font-weight: 300;
  margin: 5px 30px 5px 30px;

`

export default InfoView