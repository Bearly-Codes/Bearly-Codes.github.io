import './App.css';
import React from 'react';
import './Resources/Bootstrap/bootstrap-5.3.0-dist/css/bootstrap.css';
import image from './Resources/png-clipart-english-draughts-checkerboard-checkerboard-angle-white.png';
//TODO add a picture of me replace placeholder

//TODO style with CSS




/*
    CSS STYLES USED:
    about-me
    about-me-header
    about-me-text
 */
const AboutMe = () => {
    return (
    <div className="about-me">
        <h1 className="about-me-header">About Me</h1>
        <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
                <img className="about-me-image" src={image} />
            </div>
            <div className="col-md-8 about-me-text-box">
                <p className="about-me-text d-flex justify-content-center">I'm Nick Bogan, a Computer Science student at Purdue, and I build things. Always have. My childhood was filled with
                    K'Nex, Legos, Train sets, and Tinker Toys. When I got my hands on a computer things only accelerated. I was making games on Scratch
                    before I'd left elementary school, in middle school I was coding robots, in highschool websites, and in college (well, websites obviously, hello) apps, tools
                    and toys. When I needed a break I'd open a videogame and build spaceships, factories, cities, and submarines.
                    I build things, and if you need something built chances are I can help, if I can't help I can learn, and so far I haven't run into
                    anything I couldn't learn. Get in touch, let's build something together.
                </p>
            </div>
        </div>
    </div>
    );
}

export default AboutMe;