import React from "react";
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/Main/MainContainer';
import PageNotFound from './pages/PageNotFound'
import Diary from "./pages/Diary/DiaryContainer";
import SelectContainer from "./pages/Select/SelectContainer";
import "./assets/Fonts/Font.css";
import { ProgressProvider } from './contexts/ProgressContext';
import CompleteContainer from "./pages/Complete/CompleteContainer";
import Info from "./pages/Info/InfoContainer"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <ProgressProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/select" element={<SelectContainer />} />
        <Route path="/complete" element={<CompleteContainer />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </ProgressProvider>

  );
}

export default App;
