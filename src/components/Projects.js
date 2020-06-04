import React, { useState, useEffect } from 'react';

import '../css/project-styles.css';
import Project from './Project'

const Projects = () => {

    const [ project, setProject ] = useState([])

    useEffect(() => {
        fetch('projects.json')
        .then ( response => response.json())
        .then ( data => setProject(data))
    }, [])

    return(
            <div className="projects">
                {project.map(elem => <Project key={elem.id} title={elem.title} code={elem.code_url} demo={elem.demo_url}/>)}
            </div>
    );
}

export default Projects;