import React from 'react'
import { Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <br />
            <Navbar bg="light" style={{ paddingLeft: 20 }}>
                <Navbar.Brand href="#home">My site (c) 2022</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Footer;
