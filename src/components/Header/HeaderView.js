import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/Images/Logo.svg';

const HeaderView = () => {
  const [currentPage, setCurrentPage] = useState("home"); // 기본 페이지를 "home"으로 설정

  return (
    <HeaderStyled>
      <Image src={LogoImage} alt="Logo" />
      <ButtonWrapper>
        <HomeButton onClick={() => setCurrentPage("home")} isActive={currentPage === "home"}>
          꾸미
          {currentPage === "home" && <Underline />}
        </HomeButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <InfoButton onClick={() => setCurrentPage("info")} isActive={currentPage === "info"}>
          활용법
          {currentPage === "info" && <Underline />}
        </InfoButton>
      </ButtonWrapper>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;
  z-index: 1000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  margin-right: 30px;
`

const ButtonWrapper = styled.div`
  height: 100%;
  display: inline-block;
  position: relative;
  margin-left: 15px;
`;

const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;
  color: #242424;
  font-family: "NanumSquareRound";
  font-size: 20px;
  cursor: pointer;
  padding: 15px;
  border: none;
  background-color: #fff;

  &:hover {
    color: #4192F7;
  }

  ${props =>
    props.isActive &&
    `
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #242424;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  `}
`;

const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;
  color: #242424;
  font-family: "NanumSquareRound";
  font-size: 20px;
  cursor: pointer;
  padding: 20px;
  border: none;
  background-color: #fff;

  &:hover {
    color: #4192F7;
  }

  ${props =>
    props.isActive &&
    `
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #242424;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

    }
  `}
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #242424;
`;

export default HeaderView;
