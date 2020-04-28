import React, { useState } from 'react';
import ProjectCard from './../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
  

export default function ProjectsContainer() {
    const [name] = useState("Project");

    return (
        <div className="projects">
            <center><h1>Projects</h1></center>
            <Grid container alignItems='center'>
                <ProjectCard name={name} />
                <ProjectCard name={name} />
                <ProjectCard name={name} />
            </Grid>
        </div>
    )
}