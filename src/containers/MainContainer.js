import React, { Component, useState } from 'react';
import Container from '@material-ui/core/Container';
import BodyContainer from './BodyContainer';
import HeaderContainer from './HeaderContainer';

function MainContainer() {
    // view options: "resume", "about me", "projects", "social media", "contact me"

    // changeView should function in the set of buttons in HeaderTabs
  const [view, changeView] = useState("resume");

    return(
        <Container>
            <HeaderContainer />
            <BodyContainer />
        </Container>
    )
}

export default MainContainer;