import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

const Header = ({pages, active, onLinkChanged}) => {
    const elements = pages.map(({label, link}) => {
        const linkClasses = `main-header__link ${active === link ? 'active': ''}`;
        return (
            <NavItem className="main-header__item" key={label}>
                <NavLink tag="div" className={linkClasses} onClick={() => onLinkChanged(link)}>
                    <Link to={`${link}`} className={linkClasses}>{label}</Link>
                </NavLink>
            </NavItem>
        );
    })
    return (
        <>
            <header className="main-header">
                <Navbar className="main-header__nav" dark expand="md">
                    <Container>
                        <NavbarBrand tag="div" className="main-header__logo">
                            <Link to='/'>Game Of Thrones DB</Link>
                        </NavbarBrand>

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