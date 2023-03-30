import './ProjectCard.css'
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ link, title, description, imgUrl }) => {
    return (
        <div className='box'>
            <h4>{title}</h4>
            <img className='projectImage' src={imgUrl} alt='projectPhoto'/> 
            <p>{description}</p>
            <a href={link}>
            <Button className='button'>Go To</Button>
            </a>
        </div>
    )
}