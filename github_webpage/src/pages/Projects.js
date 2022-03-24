import React from 'react'

import './Projects.css'
import Project from '../components/Project'
import projectData from '../Data/projectData'

const Projects = () => {
    return (
        <div>
            <Project name={projectData.name} />
        </div>
    )
}

export default Projects