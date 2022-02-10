import React from 'react'
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <h2>
                    <Link to="/">React Blog</Link>
                </h2>
                <Nav variant="pills" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/">
                            Главная
                </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/about">
                            Обо мне
                </Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>
        </div>
    )
}

export default Header;