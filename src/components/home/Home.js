import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../config/particles.json";
import './Home.css'



export const Home = () => {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    return(
        <div className='homeWrapper'>
            <div className='homeBody'>
                <Particles options={particlesOptions} init={particlesInit}/>
                <h1 className="hi">hi</h1>
            </div>
        </div>
    )

}