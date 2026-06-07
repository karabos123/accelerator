import React from 'react';
import { Home, Map, ShoppingCart, Gem } from './Icons';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Главная', active: false },
    { icon: <Map size={20} />, label: 'Роадмапы', active: true },
  ];

  return (
    <div className="sidebar" style={{ 
      gridRow: '1 / 3', 
      padding: '24px 16px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      backgroundColor: 'var(--bg-sidebar)',
      borderRight: '1px solid var(--glass-border)'
    }}>
      <div className="logo" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        fontSize: '1.25rem', 
        fontWeight: 'bold', 
        color: 'var(--text-white)',
        padding: '0 8px'
      }}>
        <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--accent-purple)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Map size={20} color="white" />
        </div>
        СДК
      </div>
      
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {menuItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`nav-item ${item.active ? 'active' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              color: item.active ? 'var(--text-white)' : 'var(--text-dim)',
              backgroundColor: item.active ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
              transition: 'all 0.2s ease',
              fontWeight: item.active ? '600' : '400'
            }}
          >
            {React.cloneElement(item.icon, { color: item.active ? 'var(--accent-purple)' : 'var(--text-dim)' })}
            <span style={{ fontSize: '0.9rem' }}>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-card" style={{ 
        marginTop: 'auto',
        padding: '16px', 
        borderRadius: 'var(--radius-lg)', 
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ color: '#fbbf24' }}><Gem size={20} /></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-white)' }}>2450</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Кристаллы</span>
          </div>
        </div>
        <button style={{
          padding: '10px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: 'var(--bg-card-hover)',
          color: 'var(--text-white)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '0.85rem',
          fontWeight: '600',
          transition: 'background 0.2s'
        }}>
          <ShoppingCart size={16} />
          Магазин
        </button>
      </div>
      
      <style>{`
        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-white);
        }
        .nav-item.active:hover {
          background-color: rgba(139, 92, 246, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
