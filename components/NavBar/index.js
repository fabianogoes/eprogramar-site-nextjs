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

    // const toggle = () => setIsOpen(!isOpen);

    if (typeof window !== 'undefined') {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".menu");
        const links = document.querySelectorAll(".menu li");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("open");
            console.log('click...');
        });

        console.log('Menu...');
    }

    return (
        <header className="header">

            <NavLink href="/">
                <img src="https://www.eprogramar.com.br/assets/images/e-programar-logo.png" />
            </NavLink>

            <nav>
                
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="menu">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/cursos">Cursos</NavLink>
                    </li>
                    <li>
                        <NavLink href="/youtube">Youtube</NavLink>
                    </li>
                    <li>
                        <NavLink href="/sobre">Sobre</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default NavBar