import React from 'react';
import ProjectCard from './../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
  

class ProjectsContainer extends React.Component {

    render(){
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
}

export default ProjectsContainer;