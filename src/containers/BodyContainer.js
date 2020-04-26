import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import ResumeContainer from './ResumeContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMeContainer from './AboutMeContainer';

class BodyContainer extends Component {
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
      {this.state.view === "resume" ? <ResumeContainer /> : <ProjectsContainer />}
    </Container>
    )
  }
}

export default BodyContainer;
