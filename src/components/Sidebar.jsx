import React from 'react';
import { Home, Map, Flag, Sword, Briefcase, Award, TrendingUp, ShoppingCart, Gem } from './Icons';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Главная', active: true },
  ];

  return (
    <div className="sidebar glass" style={{ gridRow: '1 / 3', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-cyan)', marginBottom: '20px', textAlign: 'center' }}>
        СДК
      </div>
      
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`nav-item ${item.active ? 'active' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              cursor: 'pointer',
              color: item.active ? 'white' : 'var(--text-dim)',
              backgroundColor: item.active ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            {item.icon}
            <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-card glass" style={{ padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(255, 255, 255, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Gem size={18} color="#fbbf24" />
          <span style={{ fontWeight: 'bold' }}>2450 кристаллов</span>
        </div>
        <button style={{
          padding: '8px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: 'var(--accent-purple)',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontWeight: '500'
        }}>
          <ShoppingCart size={16} />
          Магазин
        </button>
      </div>
      
      <style>{`
        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }
        .nav-item.active:hover {
          background-color: rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
