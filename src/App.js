import React from "react";
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/Main/MainContainer';
import PageNotFound from './pages/PageNotFound'
import Diary from "./pages/Diary/DiaryContainer";
import "./assets/Fonts/Font.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
