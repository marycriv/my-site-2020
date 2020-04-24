import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import HeaderContainer from './containers/HeaderContainer';
import ResumeContainer from './containers/ResumeContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import AboutMeContainer from './containers/AboutMeContainer';

class App extends Component {
    // view options: "resume", "about me", "projects", "social media", "contact me"
  state={
    view: "projects"
  }

  // implement later
  // handleViewChange(viewChange) {
  //   this.setState({
  //     view: viewChange
  //   })
  // }

  render(){
    return(
    <Container>
      <HeaderContainer />
      {this.state.view === "resume" ? <ResumeContainer /> : <ProjectsContainer />}
    </Container>
    )
  }
}

export default App;
