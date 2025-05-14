// import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import './Header.css';

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="admin-header">
      <div className="header-left">
        <div className="logo-section">
          <div className="logo">A</div>
          <span className="title">Andy Panel</span>
        </div>
      </div>

      <div className="header-right">
        <div className="user-section">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <span className="username">Admin User</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
          <button className="logout-btn" onClick={logout}>
            <span className="logout-icon">↪</span>
            <span className="logout-text">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
