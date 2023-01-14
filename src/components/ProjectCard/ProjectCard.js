import './ProjectCard.css'

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <div className='box'>
            <h4>{title}</h4>
            <img className='projectImage' src={imgUrl} alt='projectPhoto'/> 
            <p>{description}</p>
           
        </div>
    )
}