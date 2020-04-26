import React from 'react';
import WorkProjectEntry from './../components/WorkProjectEntry';
import EducationEntry from './../components/EducationEntry';

export default function ResumeContainer() {
    return (
        <div className="resume">
            <div className="header">
                <center><h2>Title | Location | Resume PDF Link</h2></center>
                <p>Personal Statement: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eu nulla cursus fringilla nec eget orci. Sed bibendum bibendum tempus. Maecenas dignissim ullamcorper feugiat. Sed at lobortis massa. In massa purus, aliquet nec enim eu, tempus consectetur magna. Nam vulputate risus lacus, eget mollis dolor gravida eget. Phasellus ac bibendum quam. Suspendisse semper massa ac metus imperdiet, sit amet mollis purus sodales. Praesent bibendum tortor metus, eget dapibus ante tempor a.</p>
            </div>
            <hr />
            <div className="work-experience">
                <WorkProjectEntry />
                <WorkProjectEntry />
            </div>
            <hr />
            <div className="projects"> 
                <WorkProjectEntry />
                <WorkProjectEntry />
                <WorkProjectEntry />
                <WorkProjectEntry />
            </div>
            <hr />
            <div className="education"> 
                <EducationEntry />
                <EducationEntry />
            </div>
        </div>
    )
}