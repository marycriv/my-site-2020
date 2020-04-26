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
                    <Tab label="Resume"
                        onClick={() => this.props.changeView("resume")}
                    />

                    <Tab label="About Me"
                        onClick={() => this.props.changeView("about me")}
                    />

                    <Tab label="Projects"
                        onClick={() => this.props.changeView("projects")}
                    />
                    <Tab label="Social Media"
                        onClick={() => this.props.changeView("social media")}
                    />

                    <Tab label="Contact Me"
                        onClick={() => this.props.changeView("contact me")}
                    />
                </Tabs>
            </AppBar>
        )
    }
}

export default HeaderTabs;