import React from 'react'
import '../../App.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Contact() {
    return (
        <Container className="B-cont Contact-container">
            <Row className="Contact-title">
                I'd Love to Connect
            </Row>
            <Row className="Contact-content">
                Feel free to reach out at 
                <a href="mailto:nickabogan@gmail.com">nickabogan@gmail.com</a>
                <a href="mailto:bogann@purdue.edu">bogann@purdue.edu</a>
            </Row>
        </Container>
    );
}

export default Contact;