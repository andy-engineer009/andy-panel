/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);      // example: { name: "Andy" }
    const [token, setToken] = useState(null);    // example: JWT token
    const navigate = useNavigate();

    useEffect(() => {
       localStorage.setItem('user', 'andy@yopmail.com');
       localStorage.setItem('token', '1234567890');
       if(localStorage.getItem('user') && localStorage.getItem('token')){
        navigate('/dashboard');
       } else {
        navigate('/login');
       }
    }, []);

     // logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

    return (
        <AuthContext.Provider value={{user, token,logout}}>
          {children}
        </AuthContext.Provider>
      );
};

export const useAuth = () => useContext(AuthContext);

