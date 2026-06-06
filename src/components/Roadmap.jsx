import React from 'react';
import DirectionCard from './DirectionCard';

const Roadmap = ({ directions, activeId, onSelect }) => {
  return (
    <div className="roadmap-container scrollable" style={{ 
      padding: '40px', 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '60px'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '100px',
        bottom: '100px',
        width: '4px',
        background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-blue), var(--accent-cyan))',
        opacity: 0.2,
        zIndex: 0
      }}></div>

      {directions.map((dir, index) => (
        <DirectionCard 
          key={dir.id}
          direction={dir}
          index={index + 1}
          isActive={activeId === dir.id}
          onSelect={() => onSelect(dir.id)}
        />
      ))}

      <style>{`
        .roadmap-container {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
        }
      `}</style>
    </div>
  );
};

export default Roadmap;
