import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';

const StarBackground = () => {
    const canvasRef = useRef(null);
    let stars = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set up the canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate random stars
        const generateStars = () => {
            stars = [];
            const numberOfStars = Math.floor(canvas.width * canvas.height * 0.0005);

            for (let i = 0; i < numberOfStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 1.5;
                const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
                const opacityDirection = Math.random() < 0.5 ? 1 : -1;

                stars.push({ x, y, radius, opacity, opacityDirection });
            }
        };

        // Update the canvas with moving and twinkling stars
        const updateCanvas = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.x += 0.1;
                star.y += 0.1;

                if (star.x > canvas.width) star.x = 0;
                if (star.y > canvas.height) star.y = 0;

                star.opacity += star.opacityDirection * 0.01;

                // Reverse opacity direction if it reaches the limits
                if (star.opacity >= 1 || star.opacity <= 0.5) {
                    star.opacityDirection *= -1;
                }

                drawStar(star.x, star.y, star.radius, star.opacity, star.opacityDirection);
            });

            requestAnimationFrame(updateCanvas);
        };

        // Draw a single star on the canvas
        const drawStar = (x, y, radius, opacity) => {
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            context.fill();
        };

        // Initialize the star background
        generateStars();
        updateCanvas();

        // Event listener for window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container fluid className="p-0">
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
            {/* Your website content goes here */}
        </Container>
    );
};

export default StarBackground;