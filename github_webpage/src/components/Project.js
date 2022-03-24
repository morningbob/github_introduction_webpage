import React, { Fragment } from 'react'

import './Project.css'
import Card from './Card'
import sample from '../images/dev_icon_2x.png'

const Project = (props) => {
    return (
        <Fragment>
            <div className='project-title'>f</div>
            <div className='project-description'> f</div>
            <div className='project-screenshots'>Screenshots</div>
            <div className='project-screenshot-container'>
            <div className='project-screenshot-image-container'>
                <img className='project-screenshot' src={sample}/>
            </div>
            <div className='project-screen-description'>Screen Description</div>
            </div>
        </Fragment>
    )
}

export default Project