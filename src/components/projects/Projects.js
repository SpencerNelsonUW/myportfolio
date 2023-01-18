import React from 'react'
import { Element } from 'react-scroll'
import {ProjectCard} from '../ProjectCard/ProjectCard.js'
import Avatar from '../../images/Avatar.jpg'
import Tiletopia from '../../images/Tiletopia.PNG'
import HomewardBound from '../../images/HomewardBound.jpg'
import './Projects.css'


export const Projects = () => {

    const allProjects = [
        {
            title:'Homeward Bound',
            description:'Help animals find their way home',
            imgUrl:HomewardBound,
        },
        {
            title:'TileTopia',
            description:'Expand your kingdom in a fun tile clicker',
            imgUrl:Tiletopia,
        },
        {
            title:'Homeward Bound',
            description:'help animals find their way home',
            imgUrl: Avatar,
        },
        {
            title:'Homeward Bound',
            description:'help animals find their way home',
            imgUrl: Avatar,
        },
        {
            title:'Homeward Bound',
            description:'help animals find their way home',
            imgUrl: Avatar,
        },
    ]

    return(
        <React.Fragment>
        <Element id='projectLink' name='projectLink'>
        <div className='project' id='project'>
            <br></br>
            <h1>Project Portoflio</h1>
            <br></br>
            <div className='projectContainerStyle'>
                    {allProjects.map((project, index) => {
                        return(
                            <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                    })}
            </div>
        </div>
        </Element>
        </React.Fragment>
    )
}