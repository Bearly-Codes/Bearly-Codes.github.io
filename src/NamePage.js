
import './App.css';
import TypeWriter from 'react-typewriter';
import React from 'react';

const NamePage = () => {
    return (
        <div className="starBackground">
            <h1 className="nameText">Nicholas Bogan</h1>
            <TypeWriter typing={1}><h3 className="description">I build things</h3></TypeWriter>
        </div>
    );
}

export default NamePage;
