import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import AuthLayout from "../layout/authLayout/AuthLayout";
import Dashboard from "../components/main/Dashboard";
import Login from "../components/auth/Login";
const AppRoutes = () => { 
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      <Route index element={<Dashboard />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
