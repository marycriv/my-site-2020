import React from 'react';
import { AppBar } from '@material-ui/core';

class HeaderTitle extends React.Component {
    render(){
        return (
            <AppBar position="static">
                <center><h1>First Last</h1></center>
            </AppBar>
        )
    }
}

export default HeaderTitle;