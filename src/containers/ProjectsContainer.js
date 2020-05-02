import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './../components/ProjectCard';
import BlogCard from './../components/BlogCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    gridCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }))

export default function ProjectsContainer() {

    const [name] = useState("Project");

    const classes = useStyles()

    return (
        <div className="projects">
            <center><h1>Projects</h1></center>
            <Grid container spacing={3} className={classes.gridCenter}>
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
            <Grid container spacing={3} className={classes.gridCenter}>
                <Grid item xs={3}>
                    <BlogCard name={name} />
                </Grid>
                <Grid item xs={3}>
                    <BlogCard name={name} />
                </Grid>
                <Grid item xs={3}>
                    <BlogCard name={name} />
                </Grid>
            </Grid>
        </div>
    )
}