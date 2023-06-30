
import './App.css';
import TypeWriter from 'react-typewriter';
import React from 'react';
import './Resources/Bootstrap/bootstrap-5.3.0-dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NamePage = () => {
    return (
        <div className="name-page-container">
            <h1 className="name-text">Nicholas Bogan</h1>
            <TypeWriter typing={1} fixed={true}><h3 className="description">I build things.</h3></TypeWriter>
            <IconList />
        </div>
    );
}


const IconList = () => {
    return (
        <div className="icon-list">
            <a className="icon" href="https://github.com/Bearly-Codes">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="icon" href="https://www.linkedin.com/in/nick-bogan-28601a220/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    );
}

export default NamePage;
