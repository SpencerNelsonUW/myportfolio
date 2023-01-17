import React from 'react';
import Button from 'react-bootstrap/Button';

import './Actions.css'

import Resume from '../../images/SpencerNelson.pdf'

export const Actions = () => {
   
    return (
    
        
        <div className='actions' id='contact'>
            <h3>Like my work?</h3>
            <div className='actionsStyle'>
                <div className="linkedIn">
                    <p>Check out my linkedIn</p>
                    <a href="https://www.linkedin.com/in/spencer-nelson-858533115/">
                    <Button>LinkedIn</Button>
                    </a>
                </div>
                <div>
                    <p>Email me</p>
                    <a href="mailto:Spencernelsonn@gmail.com">
                        <Button>Email</Button>
                    </a>
                </div>
                <div className='resume'>
                    <p>Download my resume</p>
                    <a href={Resume} download="SpencerNelsonResume">
                    <Button>Download</Button>
                    </a>
                </div>
            </div>
        </div>
       
    )
}