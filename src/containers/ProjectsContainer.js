import React from 'react';
import ProjectCard from './../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
  

export default function ProjectsContainer() {
    return (
        <div className="projects">
            <center><h1>Projects</h1></center>
            <Grid container alignItems='center'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Grid>
        </div>
    )
}