import React, { Fragment } from 'react'

import './Project.css'

const Project = () => {
    return (
        <Fragment>
            <div className='project-title'>Project Title</div>
            <div className='project-description'>Project description</div>
            <div className='project-screenshots'>Screenshots</div>
            <div className='project-screenshot-container'>
            <div className='project-screenshot-image-container'>
            <img className='project-screenshot'/>
            </div>
            <div className='project-screen-description'>Screen Description</div>
            </div>
        </Fragment>
    )
}

export default Project