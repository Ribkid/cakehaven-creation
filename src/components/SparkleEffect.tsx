import { useEffect, useState } from 'react';

const SparkleEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-3 h-3 animate-sparkle"
          style={{
            left: sparkle.x - 6,
            top: sparkle.y - 6,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill="rgba(218, 165, 32, 0.6)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SparkleEffect;