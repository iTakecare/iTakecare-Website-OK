import React, { useEffect, useRef } from 'react';

export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical' 
}) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculer si l'élément est visible
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        const xPos = direction === 'horizontal' ? -(scrolled - elementTop) * speed * 0.5 : 0;
        
        element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
