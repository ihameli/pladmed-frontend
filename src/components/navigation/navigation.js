import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
import {
    Navbar,
    Nav
  } from 'react-bootstrap';
import Logo from '../../assets/logo.png'
import styles from './styles.module.css'

function Navigation() {
    return (
        <Navbar 
            collapseOnSelect
            sticky="top"
            variant="dark"
            expand='sm'
            className={styles.navbar}
        >
            <Navbar.Brand as={NavLink} to="/" className={styles.brand}>
                <img
                    src={Logo}
                    width="80"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Pladmed logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">            
            <Nav navbar className={styles.options}>
                <Nav.Item>
                    <Nav.Link as={NavLink} exact className="font-weight-bold" to="/">
                        Inicio
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} exact className="font-weight-bold" to="/users/me">
                        Mi cuenta
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} exact className="font-weight-bold" to="/operations">
                        Mediciones
                    </Nav.Link>
                </Nav.Item>                    
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        );    
}

Navigation = withRouter(Navigation);
export default Navigation;
