import React from 'react'
import {Navbar, Container, Input} from "react-bootstrap"
const NavBar = () => {
    const [activeLink, setActiveLink] = userState('home');
    const [scrolled, setScrolled] = userState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <nav class="navbar navbar-expand-lg" className={scrolled ? "scrolled": ""}>
        <a class="navbar-brand" href="#"><img src = {''} alt = "Logo"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home" className={activeLink === 'home' ? 'active navbar-link': "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills" className={activeLink === 'home' ? 'active navbar-link': "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects" className={activeLink === 'home' ? 'active navbar-link': "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
                </li>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src ={''} alt = ""/></a>
                        <a href='#'><img src ={''} alt = ""/></a>
                        <a href='#'><img src ={''} alt = ""/></a>
                    </div>
                    <button className='"vvs' onClick={() => console.log('connect')}><span> Let's Connect</span></button>
                </span>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}

export default NavBar