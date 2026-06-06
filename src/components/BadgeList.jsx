import React from 'react';
import { Award } from './Icons';

const BadgeList = ({ direction }) => {
  const isCompleted = direction.progress === 100;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '70px',
        opacity: isCompleted ? 1 : 0.3,
        transition: 'opacity 0.5s ease'
      }}>
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          backgroundColor: isCompleted ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: isCompleted ? '2px solid var(--accent-purple)' : '1px solid var(--glass-border)',
          boxShadow: isCompleted ? '0 0 15px rgba(139, 92, 246, 0.4)' : 'none'
        }}>
          <Award size={20} color={isCompleted ? 'var(--accent-purple)' : 'var(--text-dim)'} />
        </div>
        <span style={{ fontSize: '0.65rem', textAlign: 'center', color: isCompleted ? 'white' : 'var(--text-dim)' }}>
          {direction.badge}
        </span>
      </div>

      {/* Placeholder badges */}
      {[1, 2].map(i => (
        <div key={i} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          width: '70px',
          opacity: 0.1
        }}>
          <div style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--glass-border)'
          }}>
            <Award size={20} color="var(--text-dim)" />
          </div>
          <span style={{ fontSize: '0.65rem', textAlign: 'center', color: 'var(--text-dim)' }}>
            ???
          </span>
        </div>
      ))}
    </div>
  );
};

export default BadgeList;
