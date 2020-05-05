import React from 'react';
import PersonalProjects from './projects tab/PersonalProjectsContainer'
import ProfessionalProjects from './projects tab/ProfessionalProjectsContainer'
import Blogs from './projects tab/BlogsContainer'

export default function ProjectsContainer() {

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