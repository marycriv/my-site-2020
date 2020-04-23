import React from 'react';

class WorkEntry extends React.Component {
    render(){
        return (
            <div className="work-entry">
                <p><b>Company</b> – Job Title | Dates</p>
                <h3>Description:</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Nulla in sem eu nulla cursus fringilla nec eget orci.</li>
                    <li>Sed bibendum bibendum tempus. Maecenas dignissim ullamcorper feugiat.</li>
                </ul>
            </div>
        )
    }
}

export default WorkEntry;