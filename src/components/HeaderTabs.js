import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

class HeaderTabs extends React.Component {
    render(){
        return (
            <AppBar position="static">
                <Tabs 
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="simple tabs example"
                    centered
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
        )
    }
}

export default HeaderTabs;