import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './../components/ProjectCard';
import BlogCard from './../components/BlogCard';
import Grid from '@material-ui/core/Grid';



export default function ProjectsContainer() {

    const [name] = useState("Project");

    return (
        <div className="projects">
            <center><h1>Projects</h1></center>
            <Grid container spacing={3} flexGrow={1}>
                <Grid item xs={3}>
                    <ProjectCard name={name} />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard name={name} />
                </Grid>
                <Grid item xs={3}>
                    <ProjectCard name={name} />
                </Grid>
            </Grid>
            <center><h1>Blogs</h1></center>
            <Grid container alignItems='center'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Grid>
        </div>
    )
}