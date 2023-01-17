import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/Navbar.js'
import { Home } from './components/home/Home.js'
import { Skills } from './components/skills/Skills.js'
import { About } from './components/about/About.js'
import { Projects } from './components/projects/Projects.js'
import { Actions } from './components/Actions/Actions.js'

function App() {
    return (
        <>
            <div className="App">

                <div className="Upper">
                <Home/>
                </div>

                <div className="Middle">
                <NavBar/>
                    <div className="Split">
                    <Skills/>
                    <About/>
                    </div>
                <Projects/>
                </div>
                <div>
                    <Actions/>
                </div>

            </div>
        </>
    );
}

export default App;
