import React from 'react';
import DirectionCard from './DirectionCard';
import { Code, Zap } from './Icons';
import bgImage from '../assets/ChatGPT Image 7 июн. 2026 г., 14_51_44.png';

const Roadmap = ({ directions, activeId, onSelect }) => {
  const activeDirection = directions.find(d => d.id === activeId);

  return (
    <div className="roadmap-container scrollable" style={{ 
      padding: '0', 
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#0a0d12'
    }}>
      {/* Header with direction info */}
      <div style={{
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        backgroundColor: 'rgba(28, 33, 40, 0.5)',
        borderBottom: '1px solid var(--glass-border)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Code size={24} color="var(--accent-blue)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-white)' }}>{activeDirection?.title}</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={16} color="white" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Текущий ранг</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-white)' }}>{activeDirection?.rank}</span>
          </div>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px', minWidth: '300px' }} className="xp-container">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
              <span style={{ color: 'var(--text-dim)' }}>{activeDirection?.progress * 25} / 3000 XP</span>
              <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>0</span>
            </div>
            <div style={{ height: '8px', width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '10%', background: 'linear-gradient(to right, var(--accent-purple), #c084fc)', borderRadius: '4px' }}></div>
            </div>
          </div>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--accent-purple)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>0</div>
        </div>
      </div>

      {/* Map Content */}
      <div style={{
        height: 'calc(100% - 100px)',
        position: 'relative',
        backgroundColor: '#0a0d12',
        padding: '40px',
        overflow: 'hidden'
      }}>
        {/* Background Image from assets */}
        <img 
          src={bgImage} 
          alt="Map Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 1
          }}
        />
        
        {/* Dark radial overlay for game atmosphere */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'radial-gradient(circle at center, transparent 0%, rgba(13, 17, 23, 0.4) 100%)',
          zIndex: 1 
        }}></div>

        {/* The Road (SVG) - Styled to look like a glowing path */}
        <svg 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}
        >
          <defs>
            <filter id="road-glow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path 
            d="M 150 250 Q 300 200, 450 150 T 750 450 T 550 750" 
            fill="none" 
            stroke="rgba(0, 212, 255, 0.3)" 
            strokeWidth="10" 
            filter="url(#road-glow)"
          />
          <path 
            d="M 150 250 Q 300 200, 450 150 T 750 450 T 550 750" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.2)" 
            strokeWidth="2" 
            strokeDasharray="20, 15"
          />
        </svg>

        {/* Direction Cards as map points */}
        <div style={{ position: 'relative', zIndex: 3, height: '100%', pointerEvents: 'none' }}>
          {/* HTML Деревня - Top Left */}
          <div style={{ position: 'absolute', top: '15%', left: '8%', pointerEvents: 'auto' }}>
            <DirectionCard 
              direction={directions[0]}
              index={1}
              isActive={activeId === directions[0].id}
              onSelect={() => onSelect(directions[0].id)}
            />
          </div>

          {/* Java Башня - Top Center */}
          <div style={{ position: 'absolute', top: '8%', left: '38%', pointerEvents: 'auto' }}>
            <DirectionCard 
              direction={directions[1]}
              index={2}
              isActive={activeId === directions[1].id}
              onSelect={() => onSelect(directions[1].id)}
            />
          </div>

          {/* Python Лес - Middle Right */}
          <div style={{ position: 'absolute', top: '38%', left: '65%', pointerEvents: 'auto' }}>
            <DirectionCard 
              direction={directions[2]}
              index={3}
              isActive={activeId === directions[2].id}
              onSelect={() => onSelect(directions[2].id)}
            />
          </div>

          {/* Arena */}
          <div style={{ position: 'absolute', top: '68%', left: '48%', opacity: 0.9, pointerEvents: 'none' }}>
            <div style={{
              width: '180px',
              padding: '12px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'rgba(28, 33, 40, 0.95)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
            }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>5</div>
              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-dim)' }}>Арена проектов</h4>
                <p style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Заблокировано</p>
              </div>
            </div>
          </div>
        </div>

        {/* Zoom controls */}
        <div style={{ 
          position: 'absolute', 
          bottom: '24px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px',
          borderRadius: '24px',
          backgroundColor: 'rgba(28, 33, 40, 0.8)',
          border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(10px)',
          zIndex: 10
        }}>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-white)', cursor: 'pointer', fontSize: '1.2rem' }}>−</button>
          <div style={{ width: '20px', height: '20px', border: '1px solid var(--text-dim)', borderRadius: '4px' }}></div>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-white)', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
