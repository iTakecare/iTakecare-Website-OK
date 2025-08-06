import React from 'react';
import './FloatingCard.css';

export const FloatingCard = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`floating-card ${className}`}
      style={{ '--delay': `${delay}s` }}
    >
      {children}
    </div>
  );
};
