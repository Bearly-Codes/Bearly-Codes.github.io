import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import TypeWriter from "react-typewriter";
import NamePage from "./NamePage";

/**
 * This component is the star background that is displayed on the home page.
 * @returns {JSX.Element}
 * @constructor
 */
const StarBackground = () => {
    const canvasRef = useRef(null);
    let stars = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const generateStars = () => {
            stars = [];
            const numberOfStars = Math.floor(canvas.width * canvas.height * 0.002);

            for (let i = 0; i < numberOfStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 1.5;
                const opacity = Math.random() * 0.5 + 0.5; //Change here for different opacity
                const opacityDirection = Math.random() < 0.5 ? 1 : -1; //DON'T CHANGE HERE

                stars.push({ x, y, radius, opacity, opacityDirection });
            }
        };

        const updateCanvas = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.x += 0.1;
                star.y += 0.1;

                if (star.x > canvas.width) star.x = 0;
                if (star.y > canvas.height) star.y = 0;

                star.opacity += star.opacityDirection * 0.01;


                if (star.opacity >= 1 || star.opacity <= 0.5) {
                    star.opacityDirection *= -1;
                }

                if (star.y < canvas.height * .9) {
                    drawStar(star.x, star.y, star.radius, star.opacity, star.opacityDirection);
                } else {
                    let fadeOutOpacity = (star.opacity - .2) * (1 - ((star.y - canvas.height * 0.9) / (canvas.height * 0.1)));
                    drawStar(star.x, star.y, star.radius, fadeOutOpacity, star.opacityDirection);
                }
            });

            requestAnimationFrame(updateCanvas);
        };

        const drawStar = (x, y, radius, opacity) => {
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            context.fill();
        };

        generateStars();
        updateCanvas();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="star-background-container">
            <div className="position-relative">
                <canvas ref={canvasRef} className="canvas" />
            </div>
            <NamePage />
        </div>
    );
};

export default StarBackground;