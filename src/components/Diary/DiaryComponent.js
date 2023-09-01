import React from 'react';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux'; 

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
            
    @font-face {
        font-family: 'SangSangShinb7';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.1/SangSangShinb7.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        -webkit-print-color-adjust:exact;
    }
`;

const BodyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius: 15px;
`;

const DiaryImg = styled.div`
    border: 2px solid #e9e9e9;
    border-radius: 30px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 90%;
    height: 350px;
    background-image: ${props => `url(${props.imageUrl})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  // optional, but can avoid potential issues with smaller images
`;

const DiaryHeader = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 90%;
    height: 50px;
    border-radius: 30px;
    background-color: beige;
    align-items: center;

`;

const HeaderTitleContent = styled.span`
    font-size: 30px;
    font-family: 'SangSangShinb7';
    padding: 5px;
`;

const TopPlainText = styled.span`
    font-size: 30px;
    font-family: 'SangSangShinb7';
    margin-right: 30px;
`;

const OuterBorder = styled.div`
    width: 95%;
    border-radius: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DiaryContent = styled.div`
    height: 50%;
    width: 90%;
    border-radius: 30px;
    background-color: beige;
    margin-bottom: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

`;

const Content = styled.div`
    font-family: 'SangSangShinb7';
    font-size: 28px;
    line-height: 40px;
    width: 90%;
`;

const HeaderBlank = styled.span`
    margin-right: 100px;
`;

const getCurrentDateAndDay = () => {
    const date = new Date();
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayName = dayNames[date.getDay()];

    return { year, month, day, dayName };
}

const DiaryComponent = React.forwardRef((props, ref) => {

    const title = useSelector(state => state.title);
    const content = useSelector(state => state.content);
    const convertedImgUrl = localStorage.getItem("convertedImgUrl");
    const { month, day, dayName } = getCurrentDateAndDay();

    return (
        <>
            <GlobalStyle />
            <BodyWrapper ref={ref}>
                <OuterBorder>
                <DiaryHeader>
                    <TopPlainText>제목:</TopPlainText>
                    <HeaderTitleContent>{title}</HeaderTitleContent>
                    <HeaderBlank />
                    <HeaderTitleContent>{month}</HeaderTitleContent>
                    <TopPlainText>월</TopPlainText>
                    <HeaderTitleContent>{day}</HeaderTitleContent>
                    <TopPlainText>일</TopPlainText>
                    <HeaderTitleContent>{dayName}</HeaderTitleContent>
                    <TopPlainText>요일</TopPlainText>
                </DiaryHeader>  
                <DiaryImg imageUrl={convertedImgUrl} />
                </OuterBorder>
                <DiaryContent>
                    <Content>{content}</Content>
                </DiaryContent>
            </BodyWrapper>
        </>
    );
});


export default DiaryComponent;
