import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './../components/ProjectCard';
import BlogCard from './../components/BlogCard';
import Grid from '@material-ui/core/Grid';
import PersonalProjects from './projects tab/PersonalProjectsContainer'
import ProfessionalProjects from './projects tab/ProfessionalProjectsContainer'
import Blogs from './projects tab/BlogsContainer'

const useStyles = makeStyles(theme => ({
    gridCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }))

export default function ProjectsContainer() {

    // const [name] = useState("Project");

    const classes = useStyles()

    return (
        <div className="projects">
            <center><h1>Personal Projects</h1></center>
            <PersonalProjects />
            <center><h1>Professional Projects</h1></center>
            <ProfessionalProjects />
            <center><h1>Blogs</h1></center>
            <Blogs />
        </div>
    )
}