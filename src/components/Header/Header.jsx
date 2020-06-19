import React from 'react';
import './Header.scss';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    return (
        <>
            <header className="main-header">
                <Navbar className="main-header__nav" color="dark" dark expand="md">
                    <NavbarBrand className="main-haeder__logo" href="/">GOT React</NavbarBrand>

                    <Nav className="main-header__list ml-auto" navbar>
                        <NavItem className="main-header__item">
                            <NavLink className="main-header__link" href="/characters/">Characters</NavLink>
                        </NavItem>
                        <NavItem className="main-header__item">
                            <NavLink className="main-header__link" href="/houses/">Houses</NavLink>
                        </NavItem>
                        <NavItem className="main-header__item">
                            <NavLink className="main-header__link" href="/books/">Books</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </header>
        </>
    );
}

export default Header;