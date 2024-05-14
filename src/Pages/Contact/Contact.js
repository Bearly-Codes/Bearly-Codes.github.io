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
            <Row className="Contact-credit">
            <a href="https://www.flaticon.com/free-icons/stellar" style={{
                color: 'black',
            }} title="stellar icons">Stellar icons created by meaicon - Flaticon</a>
            </Row>
        </Container>
    );
}

export default Contact;