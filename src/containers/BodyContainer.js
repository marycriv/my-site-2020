import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import ResumeContainer from './ResumeContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMeContainer from './AboutMeContainer';
import SocialMediaContainer from './SocialMediaContainer';
import ContactMeContainer from './ContactMeContainer';

function BodyContainer(props) {
    
    return(
        <Container>
            {
                {
                'resume': <ResumeContainer />,
                'about me': <AboutMeContainer />,
                'projects': <ProjectsContainer />, 
                'social media': <SocialMediaContainer />,
                'contact me': <ContactMeContainer />
                }[props.view]
            }
        </Container>
    )
}

export default BodyContainer;
