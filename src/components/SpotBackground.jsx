import { useState, useEffect } from "react";

// each spot will have an id, size, x, y and opacity

export const SpotBackground = () => {

    const [spots, setSpots] = useState([])

    useEffect(() => {
        generateSpots();

        const handleResize = () => {
            generateSpots();
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const generateSpots = () => {
        const numberOfSpots = Math.floor(window.innerWidth * window.innerHeight / 5000);

        const newSpots = [];

        for (let i = 0; i < numberOfSpots; i++) {
            newSpots.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() *4 + 2,
            });
        }

        setSpots(newSpots);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {spots.map((spot) => (
                <div
                    key={spot.id}
                    className="spot animate-pulse-subtle"
                    style={{
                        position: 'absolute', 
                        width: `${spot.size}px`,
                        height: `${spot.size}px`,
                        left: `${spot.x}%`,
                        top: `${spot.y}%`,
                        opacity: spot.opacity,
                        animationDuration: `float ${spot.animationDuration}s ease-in-out infinite`, 
                    }}
                />
            ))}
        </div>
    );
};
