
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';





function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);



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
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (

        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/" id="/">
                        <span style={{ color: "rgb(225 25 198)", fontSize: "40px", fontFamily: "cursive", }}>M</span>
                        <span style={{ color: "#a23ec5", fontSize: "40px", fontFamily: "cursive", }}>A</span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'Home' ? 'active navber-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#Skills" className={activeLink === 'Skills' ? 'active navber-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navber-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
                            <Nav.Link href="#Connect" className={activeLink === 'connect' ? 'active navber-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Connect')}>Connect</Nav.Link>
                        </Nav>

                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/mohamed-abdo-13a527211" rel="noreferrer" target={"_blank"} ><img src={navIcon1} alt=""></img></a>
                                <a href="https://www.facebook.com/MohameAsr/" rel="noreferrer" target={"_blank"}><img src={navIcon2} alt=""></img></a>
                                <a href="https://www.instagram.com/m7md_3bdo_3sr/" rel="noreferrer" target={"_blank"}><img src={navIcon3} alt=""></img></a>
                            </div>

                            <Nav>
                                <Nav.Link id="ConnectBtn" href="#Connect">Let's Connect</Nav.Link>
                            </Nav>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;