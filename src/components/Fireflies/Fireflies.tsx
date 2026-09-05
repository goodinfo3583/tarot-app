import React, { useEffect, useState } from 'react';
import './Fireflies.css';

const Fireflies: React.FC = () => {
  const [fireflies, setFireflies] = useState<Array<{ id: number; left: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // 產生 20 隻隨機位置、隨機速度的螢火蟲
    const generatedFireflies = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 螢幕寬度 0% ~ 100%
      duration: 10 + Math.random() * 15, // 漂浮速度 10秒 ~ 25秒
      delay: Math.random() * 5, // 延遲出發 0秒 ~ 5秒
    }));
    setFireflies(generatedFireflies);
  }, []);

  return (
    <div className="fireflies-container">
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          className="firefly"
          style={{
            left: `${fly.left}vw`,
            animationDuration: `${fly.duration}s`,
            animationDelay: `${fly.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Fireflies;