import './App.css';
import StarBackground from "./StarBackground";
import React, {useEffect, useState} from 'react';
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";

//TODO Add a navbar

//TODO Add education section + mention TA experience + Certifications
const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Lights up when user clicks the "get in touch" link
    const handleLinkClick = () => {
        window.scrollTo(0, document.body.scrollHeight);
        setFooterLight(true);
        setTimeout(() => setFooterLight(false), 3000);
    };

    const [footerLight, setFooterLight] = useState(false);

    return (
        <div>
            <div className="star-background">
                <StarBackground />
            </div>
            <AboutMe onLinkClick={handleLinkClick} />
            <Projects />
            <Footer id="footer" isLit={footerLight}/>
        </div>
    );
};

export default App;
