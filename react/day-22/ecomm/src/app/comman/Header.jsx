"use client"

import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (

        <>
            <Navbar expand="lg" className="bg-danger">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto  ">
                            <Link className='mx-2' href={"/"} > Home </Link>
                            <Link  className='mx-2' href={"/about"}> About </Link>
                            <Link className='mx-2' href={"/gallery"}> Gallery </Link>
                            <Link className='mx-2' href={"/contact"}> Contact </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
