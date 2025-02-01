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

  .rotate-icon {
    margin-left: 8px;
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
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