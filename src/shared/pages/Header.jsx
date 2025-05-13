// import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  // const navigate = useNavigate();
  // const logout = () => {
  //   navigate("/login");
  // };

  const { logout } = useAuth();

  return <header className="admin-header">
  <div className="logo-section">
    LOGO 
    {/* <img src="assets/logo.png" alt="Logo" className="logo" /> */}
    <span className="title" style={{marginLeft: '10px'}}>Admin Panel</span>
  </div>

  <div className="user-section">
    <span className="username">Hello, Admin</span>
    <button className="logout-btn" onClick={logout}>Logout</button>
  </div>
</header>
;
};

export default Header;
