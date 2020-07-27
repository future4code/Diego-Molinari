import React from 'react';
import Header from './componets/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`



class App extends React.Component {
  render (){
    return ( 
      <AppContainer>
          <Header>  
          <AppContainer/>
    );
  }
}
  
export default App;
