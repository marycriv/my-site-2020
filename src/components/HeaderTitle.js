import React from 'react';
import { AppBar } from '@material-ui/core';

class HeaderTitle extends React.Component {
    render(){
        return (
            <AppBar position="static">
                <p>Title</p>
            </AppBar>
        )
    }
}

export default HeaderTitle;