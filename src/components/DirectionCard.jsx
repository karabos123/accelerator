import React from 'react';
import { Code, Server, Database, CheckCircle2, Circle, PlayCircle } from './Icons';

const DirectionCard = ({ direction, index, isActive, onSelect }) => {
  const getIcon = () => {
    switch (direction.id) {
      case 'frontend': return <Code size={24} color="var(--accent-cyan)" />;
      case 'backend': return <Server size={24} color="var(--accent-blue)" />;
      case 'ml': return <Database size={24} color="var(--accent-purple)" />;
      default: return <Code size={24} />;
    }
  };

  const getStatusIcon = () => {
    if (direction.progress === 100) return <CheckCircle2 size={16} color="var(--accent-green)" />;
    return null;
  };

  const getPointLabel = () => {
    switch (direction.id) {
      case 'frontend': return 'HTML Деревня';
      case 'backend': return 'Java Башня';
      case 'ml': return 'Python Лес';
      default: return direction.zoneName;
    }
  };

  return (
    <div 
      onClick={onSelect}
      className={`direction-card ${isActive ? 'active' : ''}`}
      style={{
        width: '200px',
        padding: '12px',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(28, 33, 40, 0.9)',
        border: isActive ? '2px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
        boxShadow: isActive ? '0 0 20px rgba(0, 212, 255, 0.4)' : '0 4px 12px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="step-number" style={{ 
          width: '28px', 
          height: '28px', 
          minWidth: '28px',
          borderRadius: '50%', 
          backgroundColor: index === 1 ? 'var(--accent-green)' : index === 2 ? 'var(--accent-blue)' : '#eab308', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          color: 'white'
        }}>
          {index}
        </div>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {getPointLabel()}
            </h4>
            {getStatusIcon()}
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
            {direction.progress === 100 ? 'Пройдено 100%' : `Прогресс ${direction.progress}%`}
          </p>
        </div>
      </div>

      {isActive && (
        <div style={{ 
          position: 'absolute', 
          bottom: '-12px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: '24px',
          height: '24px',
          backgroundColor: 'var(--accent-cyan)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px var(--accent-cyan)',
          border: '3px solid white'
        }}>
          <CheckCircle2 size={12} color="white" />
        </div>
      )}

      <style>{`
        .direction-card:hover {
          transform: translateY(-5px);
          background-color: var(--bg-card-hover);
        }
      `}</style>
    </div>
  );
};

export default DirectionCard;
