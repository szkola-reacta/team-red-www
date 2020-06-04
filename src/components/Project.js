import React from 'react';

import '../css/project-styles.css';


function Project({ title, code, demo }) {
    return (
      <div className="project">
        <div className="project_title">{title}</div>
        <button className="project_btn demo">Demo</button>
        <button className="project_btn code">Code</button>
      </div>
    );
}

export default Project;