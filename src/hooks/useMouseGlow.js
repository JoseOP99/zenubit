import { useEffect } from 'react';

export const useMouseGlow = () => {
  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateMousePosition);
      }
    };

    const updateMousePosition = () => {
      document.documentElement.style.setProperty('--mouse-x', `${targetX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${targetY}px`);
      animationFrameId = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
};
