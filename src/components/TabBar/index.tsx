import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const TabBar: React.FC = () => {
  const location = useLocation();

  const tabs = [
    { path: '/about', label: 'About', icon: '👤' },
    { path: '/resume', label: 'Resume', icon: '📄' },
    { path: '/project', label: 'Project', icon: '💼' },
    { path: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <div className="tabbar">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`tabbar-item ${location.pathname === tab.path ? 'active' : ''}`}
        >
          <span className="tabbar-icon">{tab.icon}</span>
          <span className="tabbar-label">{tab.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default TabBar; 