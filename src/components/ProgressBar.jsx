import React from 'react';

const ProgressBar = ({ progress, color = 'var(--accent-blue)' }) => {
  return (
    <div style={{ 
      height: '6px', 
      width: '100%', 
      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      borderRadius: '3px',
      overflow: 'hidden'
    }}>
      <div style={{ 
        height: '100%', 
        width: `${progress}%`, 
        backgroundColor: color,
        transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: `0 0 10px ${color}44`
      }}></div>
    </div>
  );
};

export default ProgressBar;
