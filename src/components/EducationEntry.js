import React from 'react';

class EducationEntry extends React.Component {
    render(){
        return (
            <div className="education-entry">
                <p><b>Name of School</b> – Location - Years attended</p>
                <ul>
                    <li>Degree</li>
                    <li>GPA</li>
                    <li>Other accomplishments</li>
                </ul>
            </div>
        )
    }
}

export default EducationEntry;