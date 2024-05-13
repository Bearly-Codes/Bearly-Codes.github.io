import React from 'react';
import '../../App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoilerBytes from '../../Images/BoilerBytes.jpg';
import ASMProfiler from '../../Images/ASMProfiler.png';
import Bunker from '../../Images/Bunker.png';
import Nyx from '../../Images/Nyx.png';

function Projects() {
    return (
        //Add images    
        <Container className="B-cont Projects-container">
            <Row className="Projects-title">
                What I've Done
            </Row>
            <Row className="Projects-content">
                <Col className="Projects-box">
                    <img src={Nyx} alt="Nyx" />
                    <Row className="Projects-proj-title">
                        Nyx
                    </Row>
                    <Row className="Projects-proj-content">
                        My personal website built with react and bootstrap, styled with SASS.
                    </Row>
                </Col>
                <Col className="Projects-box">
                <img src={BoilerBytes} alt="Boiler Bytes" />
                    <Row className="Projects-proj-title">
                        Boiler Bytes
                    </Row>
                    <Row className="Projects-proj-content">
                        Scrum leader for a team of 5 developers. 
                        We built a nutrition tracking website using React, Node.js, and MongoDB
                        that interfaced with the Purdue Menus API to track and display dining court nutrition information.
                    </Row>
                </Col>
            </Row>
            <Row className="Projects-content">
                <Col className="Projects-box">
                <img src={ASMProfiler} alt="ASMProfiler" />

                    <Row className="Projects-proj-title">
                        Assembly Profiler
                    </Row>
                    <Row className="Projects-proj-content">
                        Worked with another student anhd with guidance from professor Gustavo Rodriguez-Rivera to create an assembly profiler
                        to analyze the performance of assembly code. Won 2nd place in the 2024 Cerias poster competition and was deployed
                        to hundreds of students for use in the Purdue Computer Architecture course.
                    </Row>
                </Col>
                <Col className="Projects-box">
                <img src={Bunker} alt="Bunker" />

                    <Row className="Projects-proj-title">
                        Bunker
                    </Row>
                    <Row className="Projects-proj-content">
                        A prototype of an idle game that was programmed with ReactJS, currently being rebuilt in typescript.
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;