import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/Navbar.js'
import { Home } from './components/home/Home.js'
import { Skills } from './components/skills/Skills.js'
import { About } from './components/about/About.js'

function App() {
    return (
        <>
            <div className="App">

                <div className="Upper">
                <Home/>
                </div>

                <div className="Lower">
                <NavBar/>
                    <div className="Split">
                    <Skills/>
                    <About/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
