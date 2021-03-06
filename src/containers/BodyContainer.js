import React from 'react';
import Container from '@material-ui/core/Container';
import ResumeContainer from './ResumeContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMeContainer from './AboutMeContainer';
import ContactMeContainer from './ContactMeContainer';

export default function BodyContainer(props) {
    
    return(
        <Container>
            {
                {
                'resume': <ResumeContainer />,
                'about me': <AboutMeContainer />,
                'projects': <ProjectsContainer />, 
                'contact me': <ContactMeContainer />
                }[props.view]
            }
        </Container>
    )
}
