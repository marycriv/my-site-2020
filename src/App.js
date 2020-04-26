import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import HeaderContainer from './containers/HeaderContainer';
import BodyContainer from './containers/BodyContainer';

class App extends Component {
  render(){
    return(
    <Container>
      <HeaderContainer />
      <BodyContainer />
    </Container>
    )
  }
}

export default App;
