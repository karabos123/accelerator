import React from 'react';
import { Code, Server, Database, CheckCircle2, Circle, PlayCircle } from './Icons';

const DirectionCard = ({ direction, index, isActive, onSelect }) => {
  const getIcon = () => {
    switch (direction.id) {
      case 'frontend': return <Code size={32} color="var(--accent-cyan)" />;
      case 'backend': return <Server size={32} color="var(--accent-blue)" />;
      case 'ml': return <Database size={32} color="var(--accent-purple)" />;
      default: return <Code size={32} />;
    }
  };

  const getStatusIcon = () => {
    if (direction.progress === 100) return <CheckCircle2 size={20} color="var(--accent-green)" />;
    if (direction.task.status === 'В процессе') return <PlayCircle size={20} color="var(--accent-blue)" />;
    return <Circle size={20} color="var(--text-dim)" />;
  };

  return (
    <div 
      onClick={onSelect}
      className={`direction-card glass ${isActive ? 'active' : ''}`}
      style={{
        width: '100%',
        maxWidth: '500px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        border: isActive ? '2px solid var(--accent-blue)' : '1px solid var(--glass-border)',
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isActive ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'var(--glass-shadow)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="step-number" style={{ 
          width: '32px', 
          height: '32px', 
          minWidth: '32px',
          borderRadius: '8px', 
          backgroundColor: 'rgba(255,255,255,0.05)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '1rem',
          fontWeight: 'bold',
          color: 'var(--text-dim)'
        }}>
          {index}
        </div>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Направление
            </span>
            {getStatusIcon()}
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{direction.zoneName}</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{direction.title}</p>
        </div>

        <div className="card-icon" style={{ 
          width: '48px', 
          height: '48px', 
          minWidth: '48px',
          borderRadius: '12px', 
          background: 'rgba(255,255,255,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--glass-border)'
        }}>
          {getIcon()}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-dim)' }}>Прогресс</span>
          <span style={{ color: 'white', fontWeight: 'bold' }}>{direction.progress}%</span>
        </div>
        <div style={{ 
          height: '8px', 
          width: '100%', 
          backgroundColor: 'rgba(255,255,255,0.05)', 
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{ 
            height: '100%', 
            width: `${direction.progress}%`, 
            background: 'linear-gradient(to right, var(--accent-blue), var(--accent-cyan))',
            transition: 'width 0.5s ease-out'
          }}></div>
        </div>
      </div>

      {isActive && (
        <div style={{ 
          position: 'absolute', 
          right: '-10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          backgroundColor: 'var(--accent-blue)',
          borderRadius: '4px',
          rotate: '45deg',
          boxShadow: '0 0 15px var(--accent-blue)'
        }}></div>
      )}

      <style>{`
        .direction-card:hover {
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default DirectionCard;
