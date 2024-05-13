import React from 'react';
import '../../App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// TODO add a scroll listener to fade out the navbar when scrolling down
function CustomNavbar() {
    return (
        <Row className="CNavbar-bar">
            <Col>
                <Nav.Item>
                    <Nav.Link href="#Namepage" className="CNavbar-link">Home</Nav.Link>
                </Nav.Item>
            </Col>
            <Col>
                <Nav.Item>
                    <Nav.Link href="#Namepage" className="CNavbar-link">Home</Nav.Link>
                </Nav.Item>
            </Col>
            <Col>
                <Nav.Item>
                    <Nav.Link href="#Namepage" className="CNavbar-link">Home</Nav.Link>
                </Nav.Item>
            </Col>
            <Col>
                <Nav.Item>
                    <Nav.Link href="#Namepage" className="CNavbar-link">Home</Nav.Link>
                </Nav.Item>
            </Col>
        </Row>
    );
}

export default CustomNavbar;