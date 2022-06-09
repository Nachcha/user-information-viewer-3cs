import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import styles from './styles';

const MainLayout = ({ children, bottom }) => {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return (
        <div style={{height: height}}>
            <header>
                <Navbar style={styles.navBar}>
                    <NavbarBrand style={styles.navBarBrand}>Home</NavbarBrand>
                </Navbar>
                <Navbar>
                    <Navbar.Toggle area-aria-controls='basic-navbar-nav' />
                    <NavbarBrand style={styles.navbarBrandTwo}>Users</NavbarBrand>
                </Navbar>
            </header>
            <main>
                {children}
            </main>
            <bottom>
                {bottom}
            </bottom>
        </div>
    );
}

export default MainLayout;
