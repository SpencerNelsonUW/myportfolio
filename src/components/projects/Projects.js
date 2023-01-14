import { Row, Container } from "react-bootstrap"
import {ProjectCard} from '../ProjectCard/ProjectCard.js'
import Avatar from '../../images/Avatar.jpg'
import './Projects.css'

import './Projects.css'

export const Projects = () => {

    const allProjects = [
        {
            title:'Homeward Bound',
            description:'Help animals find their way home',
            imgUrl:Avatar,
        },
        {
            title:'TileTopia',
            description:'Expand your kingdom in a fun tile clicker',
            imgUrl:Avatar,
        },
        {
            title:'Homeward Bound',
            description:'help animals find their way home',
            imgUrl: Avatar,
        },
    ]

    return(
        <div className='project' id='project'>
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
    )
}