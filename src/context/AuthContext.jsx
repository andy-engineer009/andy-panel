/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // example: { name: "Andy" }
  const [token, setToken] = useState(null);    // example: JWT token
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // if (localStorage.getItem('user') && localStorage.getItem('token')) {
  //   //   navigate('/dashboard');
  //   // } else {
  //   //   navigate('/login');
  //   // }
  // }, []);

  // logout function
  const login = (values) => {
    setUser(values.email);
    setToken(values.password);
    localStorage.setItem('user', values.email);
    localStorage.setItem('token', values.password);
    if (values.email != null && values.password != null) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setIsSidebarMinimized, isSidebarMinimized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
};

