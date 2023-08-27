import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root {
    --line-fill: #3498db;
    --line-empty: #e0e0e0;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  min-width: 350px;
`;

// If you decide to uncomment the empty and color bar, you can include these styles

const ProgressBarBackground = styled.div`
  background-color: var(--line-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: 0;
`;

const ProgressBar = styled.div`
  background-color: var(--line-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: ${({ progress }) => `${progress}%`};
  z-index: 1;
  transition: 0.4s ease;
`;


const Circle = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--line-empty);
  transition: 0.4s ease;
  z-index: 2;

  &.active {
    border-color: var(--line-fill);
  }
`;

const Button = styled.button`
  background-color: var(--line-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
  
  &:active {
    transform: scale(0.98);
  }
  
  &:focus {
    outline: 0;
  }
  
  &:disabled {
    background-color: var(--line-empty);
    cursor: not-allowed;
  }
`;


const ProgressSteps = ({ step }) => { 

  return (
    <Container>
      <GlobalStyles />
      <ProgressContainer>
        <ProgressBarBackground />
        <ProgressBar progress={(step - 1) * 33.33} />
        <Circle className={step >= 1 ? 'active' : ''}>1</Circle>
        <Circle className={step >= 2 ? 'active' : ''}>2</Circle>
        <Circle className={step >= 3 ? 'active' : ''}>3</Circle>
        <Circle className={step >= 4 ? 'active' : ''}>4</Circle>
      </ProgressContainer>
      
    </Container>
  );
};

export default ProgressSteps;
