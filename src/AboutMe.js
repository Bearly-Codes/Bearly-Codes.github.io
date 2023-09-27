import './App.css';
import React, {useEffect} from 'react';
import './Resources/Bootstrap/bootstrap-5.3.0-dist/css/bootstrap.css';
import image from './Resources/pfp2.png';
//TODO add a picture of me replace placeholder


/*
    CSS STYLES USED:
    about-me
    about-me-header
    about-me-text
    about-me-image
 */
const AboutMe = ({onLinkClick}) => {
    useEffect(() => {

    }, []);

    const handleLinkClick = () => {
        onLinkClick();
    }

    return (
    <div className="about-me">
        <h1 className="about-me-header">About Me</h1>
        <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
                <img className="about-me-image" src={image} alt="placeholder profile picture"/>
            </div>
            <div className="col-md-8">
                <p className="about-me-text justify-content-center">I'm Nick Bogan, a Sophomore Computer Science student at Purdue, and I build things. Always have. My childhood was filled with
                    K'Nex, Legos, Train sets, and Tinker Toys. When I got my hands on a computer I immediately got to work building things there too. I was making games on Scratch
                    before I'd left elementary school, in middle school I was coding robots, in highschool websites, and in college apps, tools, toys, and, well, more websites.
                    When I needed a break I'd play video games and build spaceships, factories, cities, and submarines.
                    I build things, and if you need something built chances are I can help. &nbsp;
                    <a className="inline-link" onClick={handleLinkClick}>Get in touch, let's build something together. </a>
                </p>
            </div>
        </div>
    </div>
    );
}

export default AboutMe;