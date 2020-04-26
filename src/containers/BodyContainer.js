import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import ResumeContainer from './ResumeContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMeContainer from './AboutMeContainer';

function BodyContainer() {
    // view options: "resume", "about me", "projects", "social media", "contact me"
//   state={
//     view: "projects"
//   }

  const [view] = useState("resume");

  // implement later
  // handleViewChange(viewChange) {
  //   this.setState({
  //     view: viewChange
  //   })
  // }

    return(
    <Container>
      {view === "resume" ? <ResumeContainer /> : <ProjectsContainer />}
    </Container>
    )
}

export default BodyContainer;
