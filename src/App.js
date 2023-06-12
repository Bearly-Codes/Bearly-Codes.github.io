import logo from './logo.svg';
import './App.css';
import StarBackground from "./StarBackground";
import TypeWriter from 'react-typewriter';
import React, { useEffect, useRef } from 'react';

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
            return (
                <div>
                    <div className="black_background">
                        <StarBackground />
                    </div>
                </div>
            );
}

export default App;
