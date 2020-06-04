import React from "react";
import SignUpPage from "./components/SignUpPage";
import UsersListPage from "./components/UsersListPage";
import styled from 'styled-components';

const ChangePageButton = styled.button`
  background-color: tomato;
  font-weight: bolder;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 20px;
  padding: 5px 10px;
`
const MainContainer = styled.div`
  margin: 0;
`



class App extends React.Component {
  state = {
    currentPage: "signUp",
  }


  changePage = () => {
    if(this.state.currentPage === "signUp" ){
      this.setState({ currentPage: "userList"})
    } else {
      this.setState({ currentPage: "signUp"})
    }
  };

  render (){
    return (
      <MainContainer>
      <ChangePageButton onClick={this.changePage}>Troca de tela</ChangePageButton>
      {this.state.currentPage === 'signUp' ? <SignUpPage/> : <UsersListPage/> }
      </MainContainer>
    );
  }
  
}

export default App;
