import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../config/particles.json";
import Avatar from "../../images/Avatar.jpg"
import Image from 'react-bootstrap/Image';
import './Home.css'
import { BsArrowDownShort } from 'react-icons/bs'



export const Home = () => {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    return(
        <div className='homeWrapper' id='home'>
            <div className='homeBody'>
                <Particles options={particlesOptions} init={particlesInit}/>
                <h1 className="hi">Hi there,</h1>
                <Image className="img-fluid rounded-circle avatar" src={Avatar}></Image>
                <h1 className="hi">my name is Spencer</h1>
                <BsArrowDownShort href="#navbar" className="downArrow"/>
            </div>
        </div>
    )

}