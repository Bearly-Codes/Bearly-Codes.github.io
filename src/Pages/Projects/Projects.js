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
                <Col md={6} sm={12} className="Projects-box">
                    <a href="https://github.com/Bearly-Codes/Bearly-Codes.github.io" target="_blank" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        <img src={Nyx} alt="Nyx" />
                    </a>
                    <Row className="Projects-proj-title">
                        Nyx
                    </Row>
                    <Row className="Projects-proj-content">
                        My personal website built with react and bootstrap, styled with SASS.
                    </Row>
                    <Row className="Projects-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </Row>
                </Col>
                <Col md={6} sm={12} className="Projects-box">
                    <a href="https://github.com/jackpeng01/BoilerBytes" target="_blank" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        <img src={BoilerBytes} alt="Boiler Bytes" />
                    </a>
                    <Row className="Projects-proj-title">
                        Boiler Bytes
                    </Row>
                    <Row className="Projects-proj-content">
                        Scrum leader for a team of 5 developers.
                        We built a nutrition tracking website using React, Node.js, and MongoDB
                        that interfaced with the Purdue Menus API to track and display dining court nutrition information.
                    </Row>
                    <Row className="Projects-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </Row>
                </Col>
            </Row>
            <Row className="Projects-content">
                <Col md={6} sm={12} className="Projects-box">
                    <img src={ASMProfiler} alt="ASMProfiler" />

                    <Row className="Projects-proj-title">
                        Assembly Profiler
                    </Row>
                    <Row className="Projects-proj-content">
                        Worked with another student and with guidance from professor Gustavo Rodriguez-Rivera to create an assembly profiler
                        to analyze the performance of assembly code. Won 2nd place in the 2024 Cerias poster competition and was deployed
                        to hundreds of students for use in the Purdue Computer Architecture course.
                    </Row>
                </Col>
                <Col md={6} sm={12} className="Projects-box">
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