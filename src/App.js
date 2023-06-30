import logo from './logo.svg';
import './App.css';
import StarBackground from "./StarBackground";
import TypeWriter from 'react-typewriter';
import React, { useEffect, useRef } from 'react';
import NamePage from "./NamePage";
import AboutMe from "./AboutMe";

//TODO Add a navbar

//TODO Add education section + mention TA experience

//TODO Add a footer

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
            return (
                <div>
                    <div className="black-background">
                        <StarBackground />
                    </div>
                    <AboutMe />
                </div>

            );
}
export default App;
