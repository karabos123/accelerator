import React from 'react';
import { Search, Bell, Flame, User } from './Icons';

const Topbar = () => {
  return (
    <div className="topbar glass" style={{ 
      gridColumn: '2 / 4', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0 30px',
      zIndex: 10,
      flexWrap: 'wrap'
    }}>
      <div className="topbar-left" style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: 'auto' }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-main)', whiteSpace: 'normal', textAlign: 'center' }}>
          Суверенная дорожная карта
        </h1>
        <div className="search-container" style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          <input 
            type="text" 
            placeholder="Поиск..." 
            style={{
              padding: '10px 15px 10px 40px',
              width: '100%',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              outline: 'none'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <div style={{ position: 'relative', cursor: 'pointer', color: 'var(--text-dim)' }}>
          <Bell size={20} />
          <div style={{ 
            position: 'absolute', 
            top: '-2px', 
            right: '-2px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: '#ef4444', 
            borderRadius: '50%',
            border: '2px solid var(--bg-deep)'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
