import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useAuth } from '../../../context/AuthContext';

const Sidebar = () => {
  const {isSidebarMinimized,setIsSidebarMinimized} = useAuth();

  const menuItems = [
    { title: 'Dashboard', icon: '📊', path: '/dashboard' },
    { title: 'User', icon: '�', path: '/user' },
    { title: 'Profile', icon: '👤', path: '/profile' },
    { title: 'Settings', icon: '⚙️', path: '/settings' },
    { title: 'Analytics', icon: '📈', path: '/analytics' },
    { title: 'Reports', icon: '📑', path: '/reports' },
  ];

  return (
    <div className={`sidebar ${isSidebarMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        {!isSidebarMinimized && <h2 className="sidebar-title">Andy Panel</h2>}
        <button 
          className="toggle-btn"
          onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
        >
          {isSidebarMinimized ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="nav-item"
            title={isSidebarMinimized ? item.title : ''}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isSidebarMinimized && <span className="nav-title">{item.title}</span>}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        {!isSidebarMinimized && (
          <div className="user-info">
            <span className="user-avatar">👤</span>
            <div className="user-details">
              <span className="user-name">John Doe</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar; 