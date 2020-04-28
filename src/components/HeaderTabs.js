import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

export default function HeaderTabs(props) {
    return (
        <AppBar position="static">
            <Tabs 
                indicatorColor="primary"
                textColor="primary"
                aria-label="simple tabs example"
                centered
            >
                <Tab label="Resume"
                    onClick={() => props.changeView("resume")}
                />

                <Tab label="About Me"
                    onClick={() => props.changeView("about me")}
                />
                <Tab label="Projects"
                    onClick={() => props.changeView("projects")}
                />
                <Tab label="Social Media"
                    onClick={() => props.changeView("social media")}
                />
                <Tab label="Contact Me"
                    onClick={() => props.changeView("contact me")}
                />
            </Tabs>
        </AppBar>
    )
}