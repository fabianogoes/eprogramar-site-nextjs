import React, { Component, useState  } from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
  } from 'reactstrap';

const linkStyle = {
    marginRight: 15
}

import './styles.css'
const NavBar = () => {    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <NavLink href="/">
                <a>
                    <img src="https://www.eprogramar.com.br/assets/images/e-programar-logo.png" />
                </a>
            </NavLink>
            <nav>
                <ul className="menu">
                    <li><NavLink href="/"><a>Home</a></NavLink></li>
                    <li><NavLink href="/cursos"><a>Cursos</a></NavLink></li>
                    <li><NavLink href="/youtube"><a>Youtube</a></NavLink></li>
                    <li><NavLink href="/sobre"><a>Sobre</a></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar