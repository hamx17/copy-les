import {  Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from 'react-scroll';
import log from '../Images/logo.png';
import './Header.css';

const Header = () => {
    const navbarStyle = {
        height: '90px',  // Set the desired height
        backgroundColor: '#f5f5f5',/* Set the desired background color */
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
      };
    
      const linkclr={

      }
    return ( 
        <div>
            <Navbar expand="lg" className='position-abslute w-100' style={navbarStyle}>
                <Container className='container'>
                    <Navbar.Brand onClick={() => scroll.scrollToTop()}>
                        <Link to="/" className='navbar-brand d-flex align-items-center'>
                        <img src={log} height={90} width={90} alt="React Image" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto justify-content-end w-100'>
           
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            REVIEWS
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            SERVICES
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            CONTACT
          </Link>

                        </Nav>


                    </Navbar.Collapse>
                </Container>

            </Navbar>
            
        </div>
    );
};
export default Header;