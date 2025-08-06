import React from 'react';
import './MovingBlob.css';

export const MovingBlob = ({ className = "", size = "374px" }) => {
  return (
    <div 
      className={`moving-blob ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
