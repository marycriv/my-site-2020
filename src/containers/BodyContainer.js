import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import ResumeContainer from './ResumeContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMeContainer from './AboutMeContainer';

function BodyContainer() {
    // view options: "resume", "about me", "projects", "social media", "contact me"

    // changeView should function in the set of buttons in HeaderTabs
  const [view, changeView] = useState("resume");

    return(
    <Container>
      {view === "resume" ? <ResumeContainer /> : <ProjectsContainer />}
    </Container>
    )
}

export default BodyContainer;
