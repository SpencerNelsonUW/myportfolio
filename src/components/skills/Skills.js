import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css'

export const Skills = () => {
    return(
        <div id='skills'>
            <h1>Skills</h1>
            <div className="Skill">
            <ProgressBar variant="success" now={80} label='HTML' />
            </div>
            <div className="Skill">
            <ProgressBar variant="success" now={65} label='CSS' />
            </div>
            <div className="Skill">
            <ProgressBar variant="success" now={60} label='JavaScript' />
            </div>
            <div className="Skill">
            <ProgressBar variant="success" now={60} label='React' />
            </div>
            <div className="Skill">
            <ProgressBar variant="success" now={70} label='Node.js' />
            </div>
            <div className="Skill">
            <ProgressBar variant="success" now={75} label='Express' />
            </div>
            <div className="Skill">
            <ProgressBar variant="success" now={45} label='MySQL' />
            </div>
        </div>
    )
}