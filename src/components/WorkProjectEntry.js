import React from 'react';

class WorkProjectEntry extends React.Component {
    render(){
        return (
            <div className="work-project-entry">
                <p><b>Company/Project name</b> – [Job Title/Demo link] | [Dates/Github link]</p>
                <p><i>Description of role/Description and premise of project</i></p>
                <ul>
                    <li>Results and duties 1/Project stack</li>
                    <li>Results and duties 2/Functionality</li>
                    <li>Results and duties 3/Libraries/APIs</li>
                </ul>
            </div>
        )
    }
}

export default WorkProjectEntry;