import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './../../components/ProjectCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    gridCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }))

export default function ProfessionalProjectsContainer() {

    const classes = useStyles()

    return (
        <Grid container spacing={3} className={classes.gridCenter}>
            <Grid item xs={3}>
                <ProjectCard name={"CP4A Documentation"} />
            </Grid>
            <Grid item xs={3}>
                <ProjectCard name={"Internal Project 1"} />
            </Grid>
            <Grid item xs={3}>
                <ProjectCard name={"Internal Tutorial 1"} />
            </Grid>
        </Grid>
    )
}