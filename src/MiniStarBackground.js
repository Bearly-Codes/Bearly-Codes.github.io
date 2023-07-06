import React, {useEffect, useRef} from 'react';

const MiniStarBackground = () => {
    const canvasRef = useRef(null);
    let stars = [];
    let hover = false;
    const starConst = 0.002; //CHANGE ME FOR DIFFERENT STAR DENSITY

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const generateStars = () => {
            stars = [];
            const numStars = Math.floor(canvas.width * canvas.height * starConst);

            for (let i = 0; i < numStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 1.5;
                const opacity = Math.random() * 0.5 + 0.5; //Change here for different opacity
                const opacityDirection = Math.random() < 0.5 ? 1 : -1; //DON'T CHANGE HERE

                stars.push({x, y, radius, opacity, opacityDirection});
            }
        }

        const updateCanvas = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                if (hover) { // Only update star position when not frozen
                    star.x += 0.1;
                    star.y += 0.1;

                    if (star.x > canvas.width) star.x = 0;
                    if (star.y > canvas.height) star.y = 0;

                    star.opacity += star.opacityDirection * 0.01;

                    if (star.opacity >= 1 || star.opacity <= 0.5) {
                        star.opacityDirection *= -1;
                    }

                    drawStar(star.x, star.y, star.radius, star.opacity);

                } else {
                    drawStar(star.x, star.y, star.radius, star.opacity);
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

        const handleMouseEnter = () => {
            hover = true;
        };

        const handleMouseLeave = () => {
            hover = false;
        };

        //Handles resizing of canvas when the window is resized
        const resizeCanvas = () => {
            canvas.width = canvas.parentNode.offsetWidth;
            canvas.height = canvas.parentNode.offsetHeight;
            generateStars();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    return <canvas ref={canvasRef}
                   className="black-background" />;
};

export default MiniStarBackground;