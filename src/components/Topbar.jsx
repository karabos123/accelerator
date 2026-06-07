import React from 'react';
import { Search, Bell, Flame } from './Icons';

const Topbar = () => {
  return (
    <div className="topbar" style={{ 
      gridColumn: '2 / 4', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0 24px',
      backgroundColor: 'var(--bg-deep)',
      borderBottom: '1px solid var(--glass-border)',
      zIndex: 10
    }}>
      <div className="topbar-left" style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
        <div className="search-container" style={{ position: 'relative', width: '400px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          <input 
            type="text" 
            placeholder="Поиск по навыкам, квестам и проектам..." 
            style={{
              padding: '8px 15px 8px 40px',
              width: '100%',
              borderRadius: '6px',
              border: '1px solid var(--glass-border)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-white)',
              outline: 'none',
              fontSize: '0.85rem'
            }}
          />
          <div style={{ 
            position: 'absolute', 
            right: '10px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            fontSize: '0.7rem', 
            color: 'var(--text-dim)',
            padding: '2px 6px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
            border: '1px solid var(--glass-border)'
          }}>
            ⌘K
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative', cursor: 'pointer', color: 'var(--text-dim)' }}>
          <Bell size={20} />
          <div style={{ 
            position: 'absolute', 
            top: '-2px', 
            right: '-2px', 
            width: '14px', 
            height: '14px', 
            backgroundColor: '#ef4444', 
            borderRadius: '50%',
            border: '2px solid var(--bg-deep)',
            fontSize: '8px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
