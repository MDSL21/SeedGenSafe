import React from 'react';
import { createGlobalStyle } from 'styled-components';
import SeedGen from './components/SeedGen';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SeedGen />
    </>
  );
}

export default App;