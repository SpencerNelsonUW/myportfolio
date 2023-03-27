import Particle from '../Particle/Particle';
import Avatar from "../../images/Avatar.jpg"
import Image from 'react-bootstrap/Image';
import './Home.css'
// import { BsArrowDownShort } from 'react-icons/bs'



export const Home = () => {




    return(
        <div className='homeWrapper' id='home'>
            <Particle/>
            <div className='homeBody'>
                <h1 className="hi">Hi there,</h1>
                <Image className="img-fluid rounded-circle avatar" src={Avatar}></Image>
                <h1 className="hi">my name is Spencer</h1>
                {/* <BsArrowDownShort href="#navbar" className="downArrow"/> */}
            </div>
            
        </div>
    )

}