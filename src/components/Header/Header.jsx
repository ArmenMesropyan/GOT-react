import React from 'react';
import './Header.scss';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

const Header = ({pages}) => {
    const elements = pages.map(({label, link, active = false}) => {
        const linkClasses = `main-header__link ${active ? 'active': ''}`;
        return (
            <NavItem className="main-header__item" key={label}>
                <NavLink className={linkClasses} href={link}>{label}</NavLink>
            </NavItem>
        );
    })
    return (
        <>
            <header className="main-header">
                <Navbar className="main-header__nav" dark expand="md">
                    <Container>
                        <NavbarBrand className="main-header__logo" href="/">Game Of Thrones DB</NavbarBrand>

                        <Nav className="main-header__list ml-auto" navbar>
                            {elements}
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Header;