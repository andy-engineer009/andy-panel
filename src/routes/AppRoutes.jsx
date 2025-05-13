import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Dashboard from "../components/main/Dashbord";
import Login from "../components/auth/Login";
const AppRoutes = () => { 
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      <Route index element={<Dashboard />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="auth/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
