import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap"

function Naverino() {
    return (
        <Navbar className="Naverino" bg="#ff5e6c" expand="lg">
            <Navbar.Brand href="/">
                <img className="miniLogo" src='https://www.stickpng.com/assets/images/59cfc06fd3b1936210a5ddb6.png' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/WorkingAxios">About</Nav.Link>
                    <Nav.Link href="/Signup">Sing Up</Nav.Link>
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Shop">Small cats</NavDropdown.Item>
                        <NavDropdown.Item href="/Shop">Chunky cats</NavDropdown.Item>
                        <NavDropdown.Item href="/Shop">Hairless cats</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Doggos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Naverino;