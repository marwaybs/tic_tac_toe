import React from 'react';
import Board from './Components/Board'
import styled from 'styled-components'


const AppWrapper = styled.div`
  background: black;
  margin: auto;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Board />
    </AppWrapper>
  );
}

export default App;
