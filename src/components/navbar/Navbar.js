import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onscroll)
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return ( 
    <Nav fill variant="tabs" defaultActiveKey="/home" className={scrolled ? "scrolled": ""}>
      <Nav.Item>
        <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} href="#skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} href="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')} href="contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    )
}