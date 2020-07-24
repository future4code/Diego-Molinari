import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplicationPage from "./pages/ApplicationPage";
import TripsListPage from "./pages/TripsListPage";
import LoginPage from "./pages/LoginPage";
import TripDetailPage from "./pages/TripDetailPage";
import CreateTripPage from "./pages/CreateTripPage";
import Error404 from "./pages/Error404";

import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-Items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
        <CssBaseline/>
      <AppContainer>
 
        <Switch>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/viagens/detalhe/:tripId">
            <TripDetailPage/>
          </Route>
          <Route exact path="/viagens">
            <TripsListPage/>
          </Route>
          <Route exact path="/viagens/criar">
            <CreateTripPage/>
          </Route>
          <Route exact path="/inscricao">
            <ApplicationPage/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/">
            <Error404/>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App