import React from 'react'
import { Element } from 'react-scroll'
import {ProjectCard} from '../ProjectCard/ProjectCard.js'
import Tiletopia from '../../images/gamepad-solid.svg'
import HomewardBound from '../../images/dog-solid.svg'
import Econletics from '../../images/econletics.png'
import Rustiverse from '../../images/RV.png'

import './Projects.css'


export const Projects = () => {

    const allProjects = [
        {
            link:'https://econletics.com/',
            title:'Econletics',
            description:'Advance your financial knowledge',
            imgUrl:Econletics,
        },
        {
            link:'https://github.com/bburton5/homeward-bound',
            title:'Homeward Bound',
            description:'Help animals find their way home',
            imgUrl:HomewardBound,
        },
        {
            link:'https://github.com/Tiletopia/tiletopia',
            title:'TileTopia',
            description:'Expand your kingdom in a fun tile clicker',
            imgUrl:Tiletopia,
        },
        {
            link:'https://discord.gg/F6NDXEZeXN',
            title:'Rustiverse',
            description:'Explore Rust on the best Server',
            imgUrl:Rustiverse,  
        }
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