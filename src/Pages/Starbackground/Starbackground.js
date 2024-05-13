import React, { useEffect, useRef } from 'react';
// TODO: optimize
// TODO: fix the resizing
const StarBackground = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const generateStars = () => {
            const numStars = canvas.width * canvas.height / 1500;
            const stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    opacity : Math.random(),
                    brighten : Math.random() > 0.5 ? true : false,
                    radius: Math.random() * 2
                });
            }
            starsRef.current = stars;
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            starsRef.current.forEach(star => {
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1;
        };

        const updateStars = () => {
            starsRef.current.forEach(star => {
                star.x += 0.1; // Adjust the speed of stars here
                if (star.x > canvas.width) {
                    star.x = 0;
                }
                (star.brighten) ? star.opacity += .005 : star.opacity -= .005;
                if (star.opacity > 1) {
                    star.brighten = false;
                } else if (star.opacity < 0) {
                    star.opacity = 0; // If it's below 0 it'll just set opacity to 1, creates an unpleasent flicker
                    star.brighten = true;
                }
            });
            drawStars();
            animationFrameId = requestAnimationFrame(updateStars);
        };

        const startAnimation = () => {
            resizeCanvas();
            generateStars();
            drawStars();
            updateStars();
        };

        startAnimation();

        const handleResize = () => {
            resizeCanvas();
            drawStars();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }} />;
};

export default StarBackground;