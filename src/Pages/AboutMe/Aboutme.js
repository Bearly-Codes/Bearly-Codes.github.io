import React from 'react';
import '../../App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutme() {
    return (
            <Container className="B-cont Aboutme-container">
                {/* Container for the solid background */}
                <Row className="Aboutme-title">
                    {/* Row for the title */}
                    Who I Am
                </Row>
                <Row className="Aboutme-content">
                I'm Nick Bogan, a senior in Computer Science at Purdue, and I build things. Always have. My childhood was filled with K'Nex, Legos, Train sets, and Tinker Toys. When I got my hands on a computer I immediately got to work building things there too. I was making games on Scratch before I'd left elementary school, in middle school I was coding robots, in highschool websites, and in college apps, tools, toys, and, well, more websites. When I needed a break I'd play video games and build spaceships, factories, cities, and submarines. I build things, and if you need something built chances are I can help.  Get in touch, let's build something together.
                </Row>
            </Container>        
    );
}

export default Aboutme;