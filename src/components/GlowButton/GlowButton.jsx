import React from 'react';
import './GlowButton.css';

export const GlowButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`glow-button ${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="glow-button-content">
        {children}
      </span>
      <div className="glow-button-glow"></div>
    </button>
  );
};
