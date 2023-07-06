import './App.css';
import React from 'react';
import './Resources/Bootstrap/bootstrap-5.3.0-dist/css/bootstrap.css';
import MiniStarBackground from './MiniStarBackground';

//TODO: Add additional projects
//TODO: Some animation on the boxes
const Projects = () => {
        const handleClick = () => {
            window.scrollTo(0,0);
        };

        const handleP2Click = () => {
            window.open('https://github.com/Bearly-Codes/Productivity-Timer', '_blank');
        };

//Known bug: Hovering over text elements in project 1 box stops the star animation
    return (
        <div className="projects">
            <h1 className="projects-header">What I've Done</h1>
            <div className="project-container">
                <div className="row center">
                    <div className="col-md-4 project-box project-1" onClick={handleClick}>
                        <MiniStarBackground />
                        <div className="project-text">
                            <h2>Aestraeus</h2>
                            <p>My Personal Website</p>
                            <p>Built using ReactJS and Bootstrap</p>
                        </div>
                    </div>
                    <div className="col-md-4 project-box project-2" onClick={handleP2Click}>
                        <h2>Productivity Timer</h2>
                        <p>Multithreaded Timer that can keep track of breaks while you work</p>
                        <p>Built using JavaFX</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
