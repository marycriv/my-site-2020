import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import BodyContainer from './BodyContainer';
import HeaderContainer from './HeaderContainer';

export default function MainContainer() {

    const [view, changeView] = useState("resume");

    return(
        <Container>
            <HeaderContainer changeView={changeView} />
            <BodyContainer view={view} />
        </Container>
    )
}