import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import ResumeContainer from './ResumeContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMeContainer from './AboutMeContainer';

function BodyContainer(props) {
    

    return(
    <Container>
      {props.view === "resume" ? <ResumeContainer /> : <ProjectsContainer />}
    </Container>
    )
}

export default BodyContainer;
