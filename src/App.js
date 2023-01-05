import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/Navbar.js'
import { Home } from './components/home/Home.js'

function App() {
    return (
        <>
            <div className="App">
                <Home/>
                <NavBar/>
            </div>
        </>
    );
}

export default App;
