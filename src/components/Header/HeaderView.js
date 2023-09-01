import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/Images/Logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetTitle, resetContent } from '../../redux/actions';

const HeaderView = () => {
  const dispatch = useDispatch(); 
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <HeaderStyled>
      <Image src={LogoImage} alt="Logo" />
      <ButtonWrapper>
        <StyledLink to="/" onClick={() => 
          {setCurrentPage("home")
          dispatch(resetTitle()); 
          dispatch(resetContent());
          localStorage.clear();
          }} isActive={currentPage === "home"}>
          꾸미
          {currentPage === "home" && <Underline />}
        </StyledLink>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledLink to="/info" onClick={() => {
          setCurrentPage("info")
          dispatch(resetTitle()); 
          dispatch(resetContent());
          localStorage.clear();
        }
          } isActive={currentPage === "info"}>
          활용법
          {currentPage === "info" && <Underline />}
        </StyledLink>
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
  background-color: rgba(255, 255, 255, 0.5);  // 변경된 부분
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

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;
  color: #242424;
  font-family: "NanumSquareRound";
  font-size: 20px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;

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
