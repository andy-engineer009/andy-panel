import './App.css'
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import MainLayout from './layout/mainLayout/MainLayout';
import AuthLayout from './layout/authLayout/AuthLayout';
import Dashboard from './components/main/Dashboard';
import Login from './components/auth/Login';
import NotFound from './shared/pages/notFound/NotFound';
import User from './components/main/User/User';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
        {/* 404 Page */}
    <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
