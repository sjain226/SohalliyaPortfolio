import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const handleMouseEnter = () => {
      // Create particles on mouse enter
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.02 + 0.01,
        direction: Math.random() * Math.PI * 2
      }));
      setParticles(newParticles);
    };

    const handleMouseLeave = () => {
      setParticles([]);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + Math.cos(particle.direction) * particle.speed,
          y: particle.y + Math.sin(particle.direction) * particle.speed,
          direction: particle.direction + 0.01
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}
      />



      {/* Floating Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute bg-green-400 rounded-full"
          style={{
            left: `${particle.x * 100}%`,
            top: `${particle.y * 100}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.6
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.2, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}


      {/* Dynamic Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <motion.path
          d="M 10 20 L 30 20 L 30 40 L 50 40 L 50 60 L 70 60 L 70 80 L 90 80"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="1,1"
          animate={{
            strokeDashoffset: [0, 2],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 90 20 L 70 20 L 70 40 L 50 40 L 50 60 L 30 60 L 30 80 L 10 80"
          stroke="rgba(34, 197, 94, 0.2)"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="0.5,0.5"
          animate={{
            strokeDashoffset: [0, -1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>

    </div>
  );
};

export default InteractiveBackground;
