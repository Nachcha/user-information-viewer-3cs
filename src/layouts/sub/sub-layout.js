import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Navbar, NavbarBrand } from 'react-bootstrap';
import styles from './styles';

const SubLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <Navbar style={styles.navbar}>
                    <Navbar.Toggle area-aria-controls='basic-navbar-nav' />
                    <Button style={styles.navbarButton} onClick={() => { navigate(-1) }}>Go Back</Button>
                </Navbar>
                <Navbar>
                    <Navbar.Toggle area-aria-controls='basic-navbar-nav' />
                    <NavbarBrand style={styles.navbarBrand}>User information</NavbarBrand>
                </Navbar>
            </header>
            <main>
                {children}
            </main>
        </div>

    );
}

export default SubLayout;